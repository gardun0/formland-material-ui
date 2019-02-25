import Text from './components/Text'

const components = {
  'material-text': {
    component: Text,
    value: (config, value = '') => value ? value.value : ''
  }
}

export default components
