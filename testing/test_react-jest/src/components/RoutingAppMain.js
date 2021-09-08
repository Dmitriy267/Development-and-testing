import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import PageRegistrationApp from './PageRegistrationApp';
import RegistrationApp from './RegistrationApp';
import AutorizationApp from './AutorizationApp';
import AboutApp from './AboutApp';
import  QuestionApp from './QuestionApp';
import RecoveryApp from './RecoveryApp';


const RoutingAppMain=()=>(
<div>
<Switch>
<Route exact path='/' component={Home}/>
<Route path='/pageregistration' component={PageRegistrationApp}/>
<Route path='/registration' component={RegistrationApp}/>
<Route path='/qustions' component={QuestionApp}/>
<Route path='/about' component={AboutApp}/>
<Route path='/avtorisation' component={AutorizationApp}/>
<Route path='/recovery' component={RecoveryApp}/>
</Switch>
</div>
)
export default RoutingAppMain;