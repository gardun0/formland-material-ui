import resolvers from './resolvers'

const getField = type => {
  const existence = resolvers[type]

  if (!existence) console.warn('Formland Material: ', 'The [type] that you define, does not exists, [material-text] will be the default.')

  return existence || resolvers['material-text']
}

/**
 * @name componentResolver
 * @description Component resolver for Formland prop {@link https://github.com/indix/formland|customComponentResolvers}
 * @param {string} type The field type given by {@link https://github.com/indix/formland|Formland}.
 * @returns {JSX.Element}
 */
export const componentResolver = type => getField(type).component

/**
 * @name valueResolver
 * @description Value resolver for Formland prop {@link https://github.com/indix/formland|customValueResolvers}
 * @param {object} config object given in the fields array. {@link https://github.com/indix/formland|See}
 * @param {object} value given by {@link https://github.com/indix/formland|Formland} on each change
 * @returns {Function}
 */
export const valueResolver = (config, value) => getField(config.type).value(config, value)
