# svgr-babel-plugins
A set of babel plugins to do more with [svgr](https://github.com/gregberge/svgr)

![svgr-plugins logo](./packages/_playground/icons/svgr-plugin.svg)

## optional-jsx-elements
Toggle an element via a prop

svg
```html
<svg>
  <path d="..." />
  <circle fill="#FF6AB0" stroke-width="2" cx="57" cy="59" r="42" />
</svg>
```

output component
```jsx
import React from 'react';

const IconSvgrPlugin = ({ active }) => (
  <svg>
    { active ? <path d="..." /> : null }
    <circle fill="#FF6AB0" strokeWidth={2} cx="57" cy="59" r="42" />
  </svg>
)
```

config
```js
// svgr.config.js
module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        [optionalJsxElements, {
          elements: [{
            propName: 'props.active',
            // tagName: 'path',  <-- not required
            conditions: {
              fill: '#FF6AB0',
              // strokeWidth: 2, <-- specify multiple attributes
            }
          }]
        }],
      ]
    }
  }
}
```


## replace-jsx-attribute-value
Change attribute if a jsx element meets certain condition

svg
```html
<svg>
  <path d="..." />
  <circle fill="#FF6AB0" stroke-width="2" cx="57" cy="59" r="42" />
</svg>
```

output component
```jsx
import React from 'react';

const IconSvgrPlugin = ({ fillColor, strokeWidth }) => (
  <svg>
    <path d="..." />
    <circle fill={fillColor} strokeWidth={strokeWidth} cx="57" cy="59" r="42" />
  </svg>
)
```