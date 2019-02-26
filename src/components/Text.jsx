import React, { memo } from 'react'
import TextField from '@material-ui/core/TextField'

export default memo(({ config, value, callbacks }) => {
  return (
    <TextField
      {...config.componentProps}
      {...callbacks}
      {...config.props}
      value={value}
    />
  )
})