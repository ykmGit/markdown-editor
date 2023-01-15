import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
  HashRouter as Router,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import { EditorIndex } from './pages/editorIndex'
import { ButtonBases } from './pages/buttonBases'
import { useStateWithStorage } from './hooks/use_state_with_storage'

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`


const Main: React.FC = () => {

  return (
    <>
      <ButtonBases />
      <BrowserRouter>
        <Link to="/EditorIndex">Editor</Link>
        <Switch>
          <Route exact path="/index">
            <EditorIndex />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

render(<Main />, document.getElementById('app'))




