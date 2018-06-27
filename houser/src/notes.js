// import React, {Component} from 'react';
// import axios from 'axios';
// import CartItems from '../CartItems/CartItems';
// import './Dashcart.css';

// export default class DashCart extends Component {
//     constructor() {
//         super();
//         this.state = {
//             cart: []
//         }
//     }

//     componentDidMount() {
//         axios.get('/api/cart')
//         .then( (res) => {
//             this.setState({
//                 cart: res.data
//             })
//         })
//     }
    


//     render() {
//         let order = this.state.cart.map( element => {
//             return(
//                 <div>
//                     <CartItems 
//                         item={element}
//                         key={element.id}
//                     />
//                 </div>
//             )
//         })
        
//         console.log(this.cart)
//         return(
//             <div>
//                 <h4>Cart</h4>
//                 <div className='cart-container'>
//                 {order}
//                 </div>
//             </div>
//         )
//     }
// }




// import React, { Component } from 'react';


// export default class CartItems extends Component {
//     constructor(props) {
//         super(props);
//     }


//     render() {
//         const { id, artist, date, time, price, img } = this.props.event
//         return (
//             <div className='event-cart'>
//                 <h3>{artist}</h3>
//                 <h3>{date}</h3>
//                 <h3>{time}</h3>
//                 <h3>{price}</h3>
//                 <div className='image-container'>
//                         <img src={img} alt='logo' />
//                 </div>
//                 < br />

//                 <button>Remove</button>
//             </div>
//         )
//     }
// }