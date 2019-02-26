## formland-material-ui [![Build Status](https://travis-ci.org/notapineapple/formland-material-ui.svg?branch=master)](https://travis-ci.org/notapineapple/formland-material-ui)

This is a collection of [Material UI](https://material-ui.com) input components for [Formland](https://github.com/indix/formland)

<a name="module_Formland Material UI"></a>

## Formland Material UI
Export the helper functions for [Formland](https://github.com/indix/formland)


* [Formland Material UI](#module_Formland Material UI)
    * [~Component resolver](#module_Formland Material UI..Component resolver)
    * [~Value resolver](#module_Formland Material UI..Value resolver)

<a name="module_Formland Material UI..Component resolver"></a>

### Formland Material UI~Component resolver
Component resolver for Formland prop [customComponentResolvers](https://github.com/indix/formland)

**Kind**: inner property of [<code>Formland Material UI</code>](#module_Formland Material UI)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The field type given by [Formland](https://github.com/indix/formland). |

<a name="module_Formland Material UI..Value resolver"></a>

### Formland Material UI~Value resolver
Value resolver for Formland prop [customValueResolvers](https://github.com/indix/formland)

**Kind**: inner property of [<code>Formland Material UI</code>](#module_Formland Material UI)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | object given in the fields array. [See](https://github.com/indix/formland) |
| value | <code>object</code> | given by [Formland](https://github.com/indix/formland) on each change |

<a name="module_resolvers"></a>

## resolvers
Module that stores the field types available

<a name="module_resolvers..components"></a>

### resolvers~components
Available fields types

**Kind**: inner constant of [<code>resolvers</code>](#module_resolvers)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| material-text | <code>Object</code> | Field from TextField in [Material UI (TextField)](https://material-ui.com/api/text-field/) |

---

With :heart: by Jorge Garduño