import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class StepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(input){
        this.setState({
            img: input
        })
    }


    render(){
        return(
            <div>
                <p>Image URL</p>
                
                <input onChange={(e) => {this.handleChange(e.target.value)}} type='text' />
                <br />
                <br />
                <br />

                <button>Previous Step</button>
                <br />
                <br />

                <button>Next Step</button>
            
            </div>
        )
    }
}  