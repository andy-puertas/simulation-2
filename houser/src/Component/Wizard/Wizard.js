import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
        this.addListing = this.addListing.bind( this )
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

    addListing() {
        let {name, address, city, state, zip} = this.state
        axios.post('/api/house', {name, address, city, state, zip})
        .then( res => {this.setState(
            res.data
        )})
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

                <Link to='/'>
                    <button onClick={this.addListing}>
                        Complete
                    </button>
                </Link>
            </div>
            
        )
    }
}
    
    