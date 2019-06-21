import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from 'testAlias/Header'

const component = 'Header'
storiesOf(component, module)
  .add(
      'default',
       () => (
    <Header />
  ))
