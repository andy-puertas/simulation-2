import React, {Component } from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';

export default class StepOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleName = this.handleName.bind( this )
        this.handleAddress = this.handleAddress.bind( this )
        this.handleCity = this.handleCity.bind( this )
        this.handleState = this.handleState.bind( this )
        this.handleZip = this.handleZip.bind( this )
    }

    

    handleName(input){
         this.setState({
             name: input
         })
     }


    handleAddress(input){
        this.setState({
            address: input
        })
    }


    handleCity(input){
        this.setState({
            city: input
        })
    }


    handleState(input){
        this.setState({
            state: input
        })
    }


    handleZip(input){
        this.setState({
            zip: input
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                
                <br />
                <br />

                <p>Property Name</p>
                <input onChange={(e) => {this.handleName(e.target.value)}} type='text'/>
                <br />
                <br />

                <p>Address</p>
                <input onChange={(e) => {this.handleAddress(e.target.value)}} type='text'/>
                <br />
                <br />

                <p>City</p>
                <input onChange={(e) => {this.handleCity(e.target.value)}} type='text' />
                <br />
                <br />

                <p>State</p>
                <input onChange={(e) => {this.handleState(e.target.value)}} type='text' />
                <br />
                <br />

                <p>Zip</p>
                <input onChange={(e) => {this.handleZip(e.target.value)}} type='text' />
                <br />
                <br />

                
                    <button>
                        Next Step
                    </button>
                
            </div>
            
        )
    }
}