import resolvers from './resolvers'

const getField = type => {
  const existence = resolvers[type]

  if (!existence) console.warn('Formland Material: ', 'The [type] that you define, does not exists, [material-text] will be the default.')

  return existence || resolvers['material-text']
}

export const componentResolver = type => getField(type).component

export const valueResolver = (config, value) => getField(config.type).value(config, value)
