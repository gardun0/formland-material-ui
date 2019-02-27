import Text from './components/Text'

/**
 * Available fields types
 * @property {{ component: JSX.Element, value: Function }} material-text Field from TextField in {@link https://material-ui.com/api/text-field/|Material UI (TextField)}
 */
const components = {
  'material-text': {
    component: Text,
    value: (config, value = '') => value ? value.value : ''
  }
}

export default components
