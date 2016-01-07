/**
 * Created by personal on 15/12/2015.
 */
import React from 'react'

export default class Header extends React.Component {
  static propTypes = {
    h: React.PropTypes.string.isRequired
  }

  render () {
    return <h1 className='header'>{this.props.h}</h1>
  }
}
