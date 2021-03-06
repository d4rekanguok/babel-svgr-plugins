import { getAttributeValue } from '@d4rek/babel-svgr-plugins-common'
import { normalizeValueOptions } from './normalize-value-options'

function stripBrace(str) {
  return str.substring(1, str.length -1)
}

const buildAttribute = ({ t, template }) => (value) => {
  if (typeof value === 'string') {
    const _value = value.trim()

    // handles '{props.value}'
    if (_value.startsWith('{') && _value.endsWith('}')) {
      return t.jsxExpressionContainer(
        template.expression(stripBrace(value))()
      )

    // just string value
    } else {
      return t.stringLiteral(value)
    }
  }

  if (typeof value === 'number') {
    return t.jsxExpressionContainer(
      t.numericLiteral(value)
    )
  }

  if (typeof value === 'boolean') {
    return t.jsxExpressionContainer(
      t.booleanLiteral(value)
    )
  }

  // can't pass undefined to path.replaceWith
  return null
}

export default function replaceJsxAttributeValues(
  { types: t, template },
  { values }
) {
  const normalizedOptions = normalizeValueOptions(values)
  const buildAttributeValue = buildAttribute({ t, template })

  return {
    visitor: {
      JSXElement(path) {
        const openingElement = path.node.openingElement
        const currentTagName = openingElement.name.name

        normalizedOptions.forEach(option => {
          if (
            option.tagName !== 'any' &&
            option.tagName !== currentTagName
          ) return

          const attributes = openingElement.attributes
          
          attributes.forEach((attribute, i) => {
            const currentAttributeName = attribute.name.name
            if (
              option.attributeName !== 'any' &&
              option.attributeName !== currentAttributeName
            ) return

            const currentAttributeValue = getAttributeValue(attribute.value)
            if (option.value !== currentAttributeValue) return

            const valuePath = path.get(`openingElement.attributes.${i}.value`)
            const newValueNode = buildAttributeValue(option.newValue)
            valuePath.replaceWith(newValueNode)
          })
        })
      }
    }
  }
}