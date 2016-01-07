/**
 * Created by personal on 15/12/2015.
 */
import { fromJS } from 'immutable'
import { ActionTypes } from './PresentationActions'

const initialState = fromJS({
  activeIdx: 0,
  pages: [
    {
      header: 'What is React ?',
      contents: 'A library to create highly composable View component',
      footer: 'footer'
    },
    {
      header: 'Why React ?',
      contents: '',
      footer: 'footer'
    },
    {
      header: 'Old way of client code ~ (Binary.com)',
      contents: `\`\`\`
<header>
  <div class="name">
    Not Logged In
  </div>
</header>
      \`\`\`

    $.post('/login', credentials, function( user ) {
      $('header .name').text( user.name );
    });
      `,
      footer: 'footer'
    },
    {
      header: 'Problem',
      contents: 'Who change the DOM?',
      footer: 'footer'
    },
    {
      header: 'React Example',
      contents: `\`\`\`js
export default class Header extends React.Component {
  static propTypes = {
    h: React.PropTypes.string.isRequired
  }

  render () {
    return <h1 className='header'>{this.props.h}</h1>
  }
}

RenderDOM.render(
  <Header h={"Halo"} />,
  document.getElementByID("header"))
      \`\`\`
      `,
      footer: 'footer'
    },
    {
      header: 'Key Take away',
      contents: `
* Dont mutate, re-render
  * UI code as expression of state
      `,
      footer: 'footer'
    },
    {
      header: 'Component model',
      contents: `
* All Component are self-contained
 * Structure
 * Logic
`,
      footer: 'footer'
    },
    {
      header: 'Composable Example',
      contents: `\`\`\`
export default class ColorChangingBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      colors: ['white', 'blue', 'yellow', 'red']
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
    const mergedStyle =
      Object.assign({ backgroundColor: color }, style)
    return (
      <div
        style={mergedStyle}
        onClick={::this.onClick}
      >
      This is a color changing box, click me!!
      </div>
    )
  }
}
      \`\`\`
      `,
      footer: 'footer'
    },
    {
      header: 'Key take away',
      contents: 'Components means reusable, testable, composable'
    },
    {
      header: 'Fast adoption from Big Players',
      contents: `
* Airbnb
* Atlassian
* Facebook
* DailyMotion
* Taobao
* Imgur
* Netflix
* Paypal
      `
    },
    {
      header: 'Reason is Simple ~ (Pun intended)',
      contents:
        `
* React.Component
 * render()
 * componentWillMount()
 * props
 * state
 * setState()
* ReactDOM
 * render(element, domElement, fn)
 `,
      footer: 'footer'
    },
    {
      header: 'Embrace JS -> JSX',
      contents: `> templates separate technology, not concerns
      \nFacebook Developers`,
      footer: 'footer'
    },
    {
      header: 'Performance',
      contents: `
  Le Virtual DOM
  - White board time
      `
    },
    {
      header: 'Meaningless speed demo~',
      contents: `
[react](http://speed.examples.500tech.com/ngrepeat/before/react.html)

[angular](http://speed.examples.500tech.com/ngrepeat/before/angular.html)

[angular-improved](http://speed.examples.500tech.com/ngrepeat/after/angular.html)
      `
    },
    {
      header: 'React => Reactive !!',
      contents: `
* DOM update automatically
* React Component can be idempotent easily
      `,
      footer: 'footer'
    }
  ]
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.NEXT_PAGE: {
      const next = state.get('activeIdx') + 1
      const max = state.get('pages').length
      if (next < max) {
        return state.set('activeIdx', next)
      }
      return state
    }
    case ActionTypes.PREVIOUS_PAGE: {
      const next = state.get('activeIdx') - 1
      if (next < 0) {
        return state
      }
      return state.set('activeIdx', next)
    }
    case ActionTypes.UPDATE_TITLE: {
      const oldPages = state.get('pages')
      const oldPage = oldPages.get(action.idx)
      const newPage = oldPage.merge({header: action.title})
      const updated = oldPages.set(action.idx, newPage)
      return state.set('pages', updated)
    }
    case ActionTypes.UPDATE_CONTENT: {
      const oldPages = state.get('pages')
      const oldPage = oldPages.get(action.idx)
      const newPage = oldPage.merge({contents: action.content})
      const updated = oldPages.set(action.idx, newPage)
      return state.set('pages', updated)
    }
    default: {
      return state
    }
  }
}
