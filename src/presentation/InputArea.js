import React from 'react'

export default class InputArea extends React.Component {
  static propTypes = {
    page: React.PropTypes.object.isRequired,
    onTitleChange: React.PropTypes.func.isRequired,
    onContentChange: React.PropTypes.func.isRequired,
    style: React.PropTypes.object
  }

  render () {
    const { page, onContentChange, onTitleChange, style } = this.props
    return (
      <div style={style}>
        <div><input type='text' onChange={onTitleChange} value={page.header}></input></div>
        <div><textarea value={page.contents} onChange={onContentChange} rows='10' cols='70'></textarea></div>
      </div>)
  }
}
