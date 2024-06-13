import React from 'react'
import './Button.css'

/* кнопка через props принимает в себя заголовок, ссылку, цвет кнопки, ширину кнопки */
function Button({children, href, color, width }) {

  return (
    <a className ={'btn '+ color} style={{width: width}} href={href}>
      {children}
    </a>
  )
}

export default Button
