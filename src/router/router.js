import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {HomeScreen } from '../screens/home'
import {ContactScreen} from '../screens/contact'


export  const RouterApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/contact' component={ContactScreen} />
            </Switch>
        </Router>
    )
}
