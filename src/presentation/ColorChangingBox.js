/**
 * Created by personal on 07/01/2016.
 */
import React from 'react'

export default class ColorChangingBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      colors: ['gray', 'blue', 'yellow', 'red']
    }
  }

  static propTypes = {
    style: React.PropTypes.object
  }

  onClick () {
    const selected = this.state.selected
    this.setState({ selected: (selected + 1) % 4 })
  }

  render () {
    const { selected, colors } = this.state
    const style = this.props.style
    const color = colors[selected]
    const mergedStyle = Object.assign({ backgroundColor: color }, style)
    return (
      <div style={mergedStyle} onClick={::this.onClick}>This is a color changing box, click me!!</div>
    )
  }
}
