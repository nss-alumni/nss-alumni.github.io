import React from 'react'
import { colors } from 'theme'
import injectSheet from 'react-jss'

const sheet = {
  anchor: {
    'background-color': colors.accent,
    'border-radius': '.15rem',
    'color': colors.white,
    'padding': '.5rem .75rem',
    'text-decoration': 'none',
  }
}

const LinkButton = ({
  children,
  classes,
  url,
}) => (
  <a className={classes.anchor} href={url}>{children}</a>
)

export default injectSheet(sheet)(LinkButton)