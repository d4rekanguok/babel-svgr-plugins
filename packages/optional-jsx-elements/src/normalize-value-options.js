export function normalizeValueOptions(elements) {
  return elements.map(element => {
    const { conditions = {}, propName } = element
    const { tagName = 'any', ...rest } = conditions
    return {
      propName,
      tagName,
      attributes: {
        ...rest,
      }
    }
  })
}