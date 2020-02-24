module.exports = function (valueNode) {
  if (valueNode.type === 'StringLiteral') {
    return valueNode.value
  }

  if (valueNode.type === 'JSXExpressionContainer') {
    // boolean & number
    return valueNode.expression.value
  }
}