/**
 * Container Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../../component_exists.js')

module.exports = {
  description: 'Add an connected container',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of container',
      default: 'Stateless',
      choices: () => ['Stateless', 'React Class'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Oven',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: 'wantI18n',
      default: true,
      message: 'Do you want i18n messages (i.e. will this container use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the container asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate

    switch (data.type) {
      case 'Stateless': {
        componentTemplate = './container/stateless.js.hbs'
        break
      }
      default: {
        componentTemplate = './container/class.js.hbs'
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
    ]

    // If they want a i18n messages file
    if (data.wantI18n) {
      actions.push({
        type: 'add',
        path: '../../../containers/{{properCase name}}/lang.js',
        templateFile: './container/lang.js.hbs',
        abortOnFail: true,
      })
    }

    // If want Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../../containers/{{properCase name}}/Loadable.js',
        templateFile: './container/loadable.js.hbs',
        abortOnFail: true,
      })
    }

    return actions
  },
}
