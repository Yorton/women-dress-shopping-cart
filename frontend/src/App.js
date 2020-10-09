import React from 'react';
//import data from './data.json';
import Products from './components/Products' ;
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';


class App extends React.Component {

  /*no use redux*/

  // constructor(){

  //   super();
  //   this.state = {
  //     products: data.products,
  //     cartItems: localStorage.getItem("cartItems") 
  //                 ? JSON.parse(localStorage.getItem("cartItems"))
  //                 : [],
  //     size: "",
  //     sort: ""
  //   }
  // }

  // createOrder = (order) => {
    
  //   alert("need to save order for "+order.name);
  // }

  // removeFromCart = (product) => {

  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({cartItems: cartItems.filter(x => x._id !== product._id)});

  //   //use this.state.cartItems would be not work due to state is async
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x._id !== product._id)));
  // }

  // addToCart = (product) => {

  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id){
  //         item.count++;
  //         alreadyInCart = true;
  //     }
  //   });

  //   if (!alreadyInCart){
  //       cartItems.push({...product, count: 1});
  //   }

  //   this.setState({cartItems});

  //   //use this.state.cartItems would be not work due to state is async
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }


  // sortProducts = (event) => {

  //   const sort = event.target.value;
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products.slice().sort((a,b) => (
  //       sort === "lowest" 
  //         ? a.price > b.price
  //           ? 1 
  //           : -1 
  //         : sort === "highest" 
  //           ? a.price < b.price 
  //             ? 1 
  //             : -1 
  //           : a._id < b._id
  //             ? 1 
  //             : -1
  //     ))
  //   }));
  // }

  // filterProducts = (event) => {
  //  if (event.target.value === ""){
  //     this.setState({size: event.target.value, products: data.products});
  //   }else{
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
  //     });
  //   }
  // }
  /*no use redux*/

  render(){
    return (

      <Provider store={store}>
           <div className="grid-container">
            <header><a href="/">Shopping Cart</a></header>
            <main>
                <div className="content">
                  <div className="main">
                    <Filter 
                    /*no use redux*/
                    /*count={this.state.products.length} 
                    size={this.state.size} 
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}*/
                    ></Filter>
                    <Products 
                      /*no use redux*/
                      /*products={this.state.products}
                      addToCart={this.addToCart}*/
                    ></Products>
                  </div>
                  <div className="sidebar">
                    <Cart 
                    /*no use redux*/
                    /*
                    cartItems={this.state.cartItems} 
                    removeFromCart={this.removeFromCart}
                    createOrder={this.createOrder} 
                    */
                    />
                  </div>
                </div>
            </main>
            <footer>All right is reserved.</footer>
          </div>
      </Provider>
    )
  } 
}

export default App;
