import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {HomeScreen } from '../screens/home'
import {ContactScreen} from '../screens/contact'
import {FAQ} from '../screens/Faq'
import {CsANDTsScreen} from '../screens/csandts'
import {TravelTips} from '../screens/travelTips'
import {Location  } from "../screens/location";

export  const RouterApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/contact' component={ContactScreen} />
                <Route exact path='/faq' component={FAQ} />
                <Route exact path='/csAndTs' component={CsANDTsScreen} />
                <Route exact path='/travel-tips' component={TravelTips} />
                <Route exact path='/location' component={Location} />
            </Switch>
        </Router>
    )
}
