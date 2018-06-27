import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class StepThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            mortgage: 0,
            recommend: 0,
            rent: 0
        }
        this.addListing = this.addListing.bind( this )

    }

    addListing() {
        let {name, address, city, state, zip} = this.props;

        axios.post('/api/house', {name, address, city, state, zip})
        .then( res => {
            console.log(res.data)
        })
   
    }

    render(){
        return(
            <div>
                <p>Recommended Rent: </p>
                <br />

                <p>Monthly Mortgage Amount</p>
                <input type='text' />
                <br />

                <p>Desired Monthly Rent</p>
                <input type='text' />
                <br />

                <button>Previous Step</button>
                 
                 
                 <Link to='/'>
                    <button onClick={(e) => this.addListing(e)}>
                        Complete
                    </button>
                </Link>
            </div>

            
        )
    }





}