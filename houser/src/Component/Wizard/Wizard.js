import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
//import axios from 'axios';


export default class Wizard extends Component {
    
    render() {
        console.log(this.state)
        return (
            <div>
                <h3>Add New Listing</h3>
                <Link to='/'>
                    <button type='button'>
                        Cancel
                    </button>
                </Link>
                <br />
                <br />
                <Switch>
                    <Route path='/Wizard/stepone' component={StepOne} />
                    <Route path='/Wizard/steptwo' component={StepTwo}/>
                    <Route path='/Wizard/stepthree' component={StepThree}/>
                </Switch>

            </div>
            
        )
    }
}
    
                
    