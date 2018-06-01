import React, { Component } from 'react';
import axios from 'axios';
import House from '../House/House';
//import Wizard from '../Wizard/Wizard';
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind( this )
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses() {
        axios.get('/api/list')
        .then((res) => {
          this.setState({
            houses: res.data
          })
        })
    }
    
    deleteHouse(id) {
        axios.delete(`/api/house/${id}`)
       .then(res => this.getHouses());
    }
    



    render() {
        let houses = this.state.houses.map( element => {
           return (
               <div >
                   <House house={element} key={element.id} delete={this.deleteHouse}/>
               </div>
            )
        }
    )  
    
    
   
    return (
        <div>
            <h2>Dashboard</h2>
            <Link to='/wizard/stepone'>
                <button type='button'>
                    Add New Property
                </button>
            </Link>
            <hr />
            {/* <House />  */}
            <h3>House Listings</h3>
        
            { houses }
        </div>
        
        )
    }
    
        
}
   