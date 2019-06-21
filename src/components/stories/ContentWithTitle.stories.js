import React from 'react'
import { storiesOf } from '@storybook/react'
import ContentWithTitle from '../ContentWithTitle/ContentWithTitle'

const component = 'ContentWithTitle'
storiesOf(component, module)
  .add(
      'default',
       () => (
    <ContentWithTitle text='fff'/>
  ))
