import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Editor } from './editor'
import { History } from './history'
import { useStateWithStorage } from '../hooks/use_state_with_storage'

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`

// interface Props {
//   setText: (text: string) => void
// }

export const EditorIndex: React.FC = () => {

  const StorageKey = '/editor:text'

  const [text, setText] = useStateWithStorage('', StorageKey)

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/editor">
            <Editor
              text={text}
              setText={setText}
            />
          </Route>
          <Route exact path="/history">
            <History
              setText={setText}
            />
          </Route>
          {/* <Redirect to="/editor" path="*" /> */}
        </Switch>
      </Router>
    </>
  )
}
// render(<Main />, document.getElementById('app'))
