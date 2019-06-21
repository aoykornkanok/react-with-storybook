import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../Button/Button'

const component = 'Button'
storiesOf(component, module)
  .add(
      'defaults 1 haha button',
       () => (
    <Button text='hahahaa' isWithEmoji={true} />
  ))
  .add(
    'default 2 WTF button',
     () => (
  <Button text='WTF' isWithEmoji={false}/>
))
