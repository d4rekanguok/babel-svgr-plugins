const get = require('lodash/get')
const set = require('lodash/set')

const replaceName = (obj, path) => {
  const name = get(obj, path, 'no-name')
  if (name === 'no-name') throw new Error('Found no name')
  
  const transformed = name.replace('Svg', 'Icon')
  set(obj, path, transformed)
  return obj
}

module.exports = (
  { template }, opts, { imports, componentName, props, jsx, exports },
) => {
  return template.ast`
    ${imports}
    const ${replaceName(componentName, 'name')} = (props) => {
      const strokeColor = props.strokeColor || '#3D0969'
      const fillColor = props.fillColor || '#FF6AB0'
      const strokeWidth = props.strokeWidth || 6
      const active = props.active || false
      return ${jsx}
    }
    ${replaceName(exports, 'declaration.name')}
  `
}