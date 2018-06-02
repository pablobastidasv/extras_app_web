import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
//import routes from './routes'
import { Home } from './views/Home'
import { HomeAlternative } from './views/HomeAlternative'

class ExtrasApp extends React.Component {

  render() {
    return <div>
      <h1>This is the very first element!!!dfadsf </h1>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={HomeAlternative} />
      </Switch>
    </div >
  }
}

/*
ReactDOM.render(
  <ExtrasApp></ExtrasApp>,
  document.getElementById('app')
)
*/

document.addEventListener('DOMContentLoaded', () => ReactDOM.render((
  <BrowserRouter>
    <ExtrasApp />
  </BrowserRouter>),
  document.getElementById('app')
))