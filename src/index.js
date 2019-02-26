import resolvers from './resolvers'

/**
 * Export the helper functions for {@link https://github.com/indix/formland|Formland}
 * @module Formland Material UI
 */

const getField = type => {
  const existence = resolvers[type]

  if (!existence) console.warn('Formland Material: ', 'The [type] that you define, does not exists, [material-text] will be the default.')

  return existence || resolvers['material-text']
}

/**
 * @name Component resolver
 * @description Component resolver for Formland prop {@link https://github.com/indix/formland|customComponentResolvers}
 * @param {string} type The field type given by {@link https://github.com/indix/formland|Formland}.
 */
export const componentResolver = type => getField(type).component

/**
 * @name Value resolver
 * @description Value resolver for Formland prop {@link https://github.com/indix/formland|customValueResolvers}
 * @param {object} config object given in the fields array. {@link https://github.com/indix/formland|See}
 * @param {object} value given by {@link https://github.com/indix/formland|Formland} on each change
 */
export const valueResolver = (config, value) => getField(config.type).value(config, value)
