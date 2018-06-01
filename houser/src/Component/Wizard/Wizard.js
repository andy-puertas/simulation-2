import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    constructor(){
        super();
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
                <h3>Add New Listing</h3>
                <Link to='/'>
                    <button type='button'>
                        Cancel
                    </button>
                </Link>
                <br />
                <br />

                Property Name
                <input onChange={(e) => {this.handleName(e.target.value)}} type='text'/>
                <br />
                <br />

                Address
                <input onChange={(e) => {this.handleAddress(e.target.value)}} type='text'/>
                <br />
                <br />

                City
                <input onChange={(e) => {this.handleCity(e.target.value)}} type='text' />
                <br />
                <br />

                State
                <input onChange={(e) => {this.handleState(e.target.value)}} type='text' />
                <br />
                <br />

                Zip
                <input onChange={(e) => {this.handleZip(e.target.value)}} type='text' />
                <br />
            </div>
            
        )
    }
}