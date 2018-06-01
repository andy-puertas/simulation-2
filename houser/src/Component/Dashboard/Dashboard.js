import React, { Component } from 'react';
//import axios from 'axios';
import House from '../House/House';
//import Wizard from '../Wizard/Wizard';
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard
                <House />
                <Link to='/wizard'>
                    <button type='button'>
                        Add New Property
                    </button>
                </Link>
            </div>
           
        )
    }
}