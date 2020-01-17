import React from 'react'
import {Link, Route} from 'react-router-dom';

export default class Devices extends React.Component
{
    filter =(id) =>
    {
        this.props.arr.forEach(item => {
            if (item.id === id) {
                this.props.cart(item)
            }
        })
        // console.log(newList)
        
        // console.log(this.props)
    }
    render()
    {
        return(
            <div className="container-fluid">
                <div className="d-flex flex-wrap pt-4">
                {this.props.arr.map(item => {
                    return(
                    <div class="card mx-5 mb-5" style={{width:"20rem"}}>
                        <img class="card-img-top" src={item.img} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text text-info">Price: {item.price}</p>
                            <p class="card-text">Specifications: {item.specifications}</p>
                        </div>
                            <Link className="text-center mb-2" to={`${this.props.match.url}/${item.id}`}>
                                <button  onClick={() => this.filter(item.id)} className="btn btn-primary px-5">Add to cart</button>
                            </Link>
                    </div>
                )})}
            </div>
            </div>
        )
    }
    
}