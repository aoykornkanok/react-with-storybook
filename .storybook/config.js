import { configure } from '@storybook/react'

const req = require.context('../src/components/stories', true, /.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => {
      // console.log('filename: ', filename)
    req(filename)
  })
}

configure(loadStories, module)
