import { getAttributeValue } from '@d4rek/babel-svgr-plugins-common'
import { normalizeValueOptions } from './normalize-value-options'

export default function optionalJsxElements(
  { types: t, template },
  { elements: _elements }
) {
  const elements = normalizeValueOptions(_elements)
  return {
    visitor: {
      JSXElement(path) {
        // ignore element that's already inside a conditionalExpression
        if (path.parent.type === 'ConditionalExpression') return

        const openingElement = path.node.openingElement
        const currentTagName = openingElement.name.name

        elements.forEach(element => {
          if (
            element.tagName !== 'any' &&
            element.tagName !== currentTagName
          ) return

          const attributes = openingElement.attributes.reduce((acc, attr) => {
            const name = attr.name.name
            const value = getAttributeValue(attr.value)

            if (value) {
              acc[name] = value
            }
            return acc
          }, {})

          const conditionAttributes = element.attributes
          const isMatched = Object.keys(conditionAttributes).every(attrName => {
            return attributes[attrName] === conditionAttributes[attrName]
          })

          if (!isMatched) return

          path.replaceWith(
            t.JSXExpressionContainer(
              t.ConditionalExpression(
                t.Identifier(element.propName),
                path.node,
                t.NullLiteral()
              )
            )
          )
          // path.skip()
        })
      }
    }
  }
}
