import React from 'react'
import {Link} from 'react-router-dom';
import Cart from './Cart'
export default class Software extends React.Component
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
                            <p class="card-text">About: {item.about}</p>
                        </div>
                        <Link className="p-2 text-white" to={`${this.props.match.url}/${item.id}`}>
                            <button className="btn btn-primary mx-5 mb-2 " onClick={() => this.filter(item.id)}>Add to Cart</button>
                        </Link>
                    </div>
                )})}
            </div>
            </div>
        )
    }
    
}