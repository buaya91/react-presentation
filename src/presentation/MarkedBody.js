import React from 'react'
import marked from 'marked'

export default ({content}) => {
  return <h3 style={{ width: '95%' }} dangerouslySetInnerHTML={{__html: marked(content)}}></h3>
}
