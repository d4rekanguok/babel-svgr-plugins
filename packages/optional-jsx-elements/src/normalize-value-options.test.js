import tap from 'tap'
import { normalizeValueOptions } from './normalize-value-options'

tap.test('normalizeValueOptions', t => {
  const elements = [{
    propName: 'props.active',
    conditions: {
      tagName: 'circle',
      fill: '#12D294',
      strokeWidth: 2,
    }
  }]

  const expected = [{
    propName: 'props.active',
    tagName: 'circle',
    attributes: {
      fill: '#12D294',
      strokeWidth: 2,
    },
  }]

  t.same(normalizeValueOptions(elements), expected)
  t.end()
})

tap.test('normalizeValueOptions with empty tagName', t => {
  const elements = [{
    propName: 'props.active',
    conditions: {
      fill: '#12D294',
      strokeWidth: 2,
    }
  }]

  const expected = [{
    propName: 'props.active',
    tagName: 'any',
    attributes: {
      fill: '#12D294',
      strokeWidth: 2,
    },
  }]

  t.same(normalizeValueOptions(elements), expected)
  t.end()
})