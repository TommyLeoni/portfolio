import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'react-tiny-fab/dist/styles.css'
import './App.scss'
import Tree from './components/Navigation'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

export default class App extends React.Component {
  render () {
    return (
      <div className='App container'>
        <Router>
          <div className='row justify-content-center h-100 p-0 m-0'>
            <div className='col-4 my-auto'>
              <h6 className='font-weight-light'>Hi, my name is</h6>
              <h2 className='font-weight-bold'>Tomaso Leoni</h2>
              <h6 className='font-weight-light'>
                and I am a seventeen-year-old application developer from
                Switzerland
                <span role='img' aria-label='Swiss flag'>
                  🇨🇭
                </span>
              </h6>
              <Tree
                name={
                  <span>
                    Navigation{' '}
                    <span role='img' aria-label='Compass emoji'>
                      🧭
                    </span>
                  </span>
                }
                defaultOpen
              >
                <Tree name='About me' link='/' />
                <Tree name='My projects' link='/projects' />
                <Tree name='Education & Skils' link='/skills' />
                <Tree name='Contact me' link='/contact' />
              </Tree>
            </div>
            <div className='col-8 my-auto'>
              <Switch>
                <Route exact path='/'>
                  <About />
                </Route>
                <Route exact path='/projects'>
                  <Projects />
                </Route>
                <Route exact path='/skills'>
                  <Skills />
                </Route>
                <Route exact path='/contact'>
                  <Contact />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
