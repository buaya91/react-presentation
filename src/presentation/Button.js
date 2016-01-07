/**
 * Created by personal on 15/12/2015.
 */
import React from 'react'

export default ({text, onclick, autoFocus}) => {
  return <button autoFocus={autoFocus} onClick={onclick}>{text}</button>
}
