import React from 'react'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import IconSvgrPlugin from '../components/SvgrPlugin'

export default {
  title: 'Icon — Basic',
  decorators: [withKnobs]
}

export const Icon = () => {
  const size = number('Size (rem)', 12)
  const props = {
    active: boolean('Active', false),
    strokeColor: text('Stroke Color', null),
    fillColor: text('Fill Color', null),
    strokeWidth: number('Width', 6),
  }
  return (
    <main style={{ fontSize: `${size}rem` }}>
      <IconSvgrPlugin {...props} />
    </main>
  )
};
