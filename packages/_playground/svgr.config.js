const replaceJsxAttributeValue = require('@d4rek/replace-jsx-attribute-value')
const optionalJsxElements = require('@d4rek/optional-jsx-elements')
const template = require('./template')

module.exports = {
  icon: true,
  expandProps: false,
  template,
  jsx: {
    babelConfig: {
      plugins: [
        [optionalJsxElements, {
          elements: [{
            propName: 'props.active',
            conditions: {
              fill: '#FF6AB0',
            }
          }]
        }],
        [replaceJsxAttributeValue, {
          values: [{
            replace: 6,
            with: '{strokeWidth}',
            when: {
              attributeName: 'strokeWidth',
            }
          }, {
            replace: '#3D0969',
            with: '{strokeColor}',
          }, {
            replace: '#FF6AB0',
            with: '{fillColor}',
          }]
        }],
      ]
    }
  }
}