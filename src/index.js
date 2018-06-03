import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
//import routes from './routes'
import { Home } from './views/Home'
import { HomeAlternative } from './views/HomeAlternative'
import { Header } from './components/Header'
import { extrasApp } from './reducers'

class ExtrasApp extends React.Component {

  render() {
    return <div>
      <h1></h1>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={HomeAlternative}/>
      </Switch>
    </div>
  }
}

const store = createStore(extrasApp)

console.log("this is the store", store)

document.addEventListener('DOMContentLoaded', () => ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <ExtrasApp/>
    </BrowserRouter>
  </Provider>
  
), document.getElementById('app')))