import React from 'react'
import {Redirect} from 'react-router-dom'

export default class Devices extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      cartValue : 0
    }
  }
  componentDidMount = () =>{
    var sum = 0
    this.props.cart.forEach(item => {
        sum = sum + parseFloat(item.price)
    })
    console.log(sum)
    this.setState({
      cartValue : sum
    })
  }
    render()
    {
     return this.props.isAuth ? (
       <div>
         <h1>Cart Value</h1>
        <span className="btn btn-lg btn-info ml-5">Rs.{this.state.cartValue}</span>
          <div className="container-fluid">
            <div className="d-flex flex-wrap pt-4">
              {this.props.cart.map(item => {
                return(
                  <div class="card mx-5 mb-5" style={{width:"20rem"}}>
                      <img class="card-img-top" src={item.img} alt="Card image cap" />
                      <div class="card-body">
                          <h5 class="card-title">{item.name}</h5>
                          <p class="card-text text-info">Price: {item.price}</p>
                          <p class="card-text">Specifications: {item.specifications}</p>
                      </div>
                  </div>)
              })}
            </div>
          </div>
       </div>
     ) : 
    <Redirect to="/login" />
    }
    
}