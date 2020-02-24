/**
 * transform...
 * [{
 *   replace: '#123',
 *   with: '#000',
 *   when: {
 *     attributeName: 'strokeWidth',
 *     tagName: 'circle',
 *   }
 * }]
 * 
 * to:
 * [{
 *   tagName: 'circle',
 *   attributeName: 'strokeWidth',
 *   value: '#123',
 *   newValue: '#000',
 * }]
 */
export function normalizeValueOptions(values) {
  return values.map(value => {
    const when = value.when || {}
    return {
      tagName: 'any',
      attributeName: 'any',
      ...when,
  
      value: value.replace,
      newValue: value.with,
    }
  })
}