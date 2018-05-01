import React from 'react'
import PropTypes from 'prop-types'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
