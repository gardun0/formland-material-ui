### Installation

```sh
npm i formland formland-material-ui
```
or

```sh
yarn add formland formland-material-ui
```

### Example

```jsx harmony
import React, { Component } from 'react'
import { componentResolver, valueResolver } from 'formland-material-ui' // Yay!
import Form from 'formland'

class Example extends Component {
  state = {}

  onChange = (newState) => {
    this.setState(newState)
  }

  render() {
    const config = [
      {
        id: 'firstName',
        type: 'material-text', // this is where we defined out custom Material UI field
        resultPath: 'country',
        displayName: 'Shipping Country',
        placeholder: 'Select a country',
        options: [
          {
            value: 'india',
            label: 'India',
          },
          {
            value: 'usa',
            label: 'The United States',
          },
          {
            value: 'china',
            label: 'China',
          }
        ],
      },
    ]

    // Right here we use the custom component and value resolver from this library
    return <Form
      customComponentResolvers={[componentResolver]}
      customValueResolvers={[valueResolver]}
      config={config}
      store={this.state}
      onChange={this.onChange} />
  }
}
```