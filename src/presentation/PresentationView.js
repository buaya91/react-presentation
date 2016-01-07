/**
 * Created by personal on 15/12/2015.
 */
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Body from './MarkedBody'
import Button from './Button'
import InputArea from './InputArea'
import ColorChangingBox from './ColorChangingBox'
import * as actions from './PresentationActions'

const mapStateToProps = (state) => ({
  presentation: state.presentation
})

export class PresentationView extends React.Component {
  static propTypes = {
    presentation: React.PropTypes.object,
    nextPage: React.PropTypes.func,
    previousPage: React.PropTypes.func,
    updateTitle: React.PropTypes.func,
    updateContent: React.PropTypes.func
  }

  keyPress (e) {
    if (e.keyCode === 37) {
      this.props.previousPage()
    }

    if (e.keyCode === 39) {
      this.props.nextPage()
    }
  }

  render () {
    const {activeIdx, pages} = this.props.presentation.toJS()
    return (
      <div style={{
        position: 'relative',
        top: '50px',
        left: '50px',
        width: '70%'
      }}>
        <Header h={pages[activeIdx].header} />
        <Body content={pages[activeIdx].contents} />
        <div onKeyDown={::this.keyPress}>
          <Button onclick={::this.props.previousPage} text='Back' />
          <Button onclick={::this.props.nextPage} text='Next' autoFocus />
        </div>
        <InputArea
          style={{
            position: 'relative',
            top: '50px'
          }}
          page={pages[activeIdx]}
          onTitleChange={e => this.props.updateTitle(activeIdx, e.target.value)}
          onContentChange={e => this.props.updateContent(activeIdx, e.target.value)}
        />
        {activeIdx === 7 ? <ColorChangingBox style={{ position: 'relative', top: '50px', height: '200px', width: '300px' }} /> : null}
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(PresentationView)
