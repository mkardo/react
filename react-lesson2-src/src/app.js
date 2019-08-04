import React from 'react';
import AppMinMax from './hw/5-norm.js';

export default class extends React.Component{
    state = {
        products: [
            {
                id: 100,
                title: 'Ipnone 200',
                price: 12000,
                rest: 10,
                current: 1
            },
            {
                id: 101,
                title: 'Samsung AAZ8',
                price: 22000,
                rest: 5,
                current: 1
            },
            {
                id: 103,
                title: 'Nokia 3310',
                price: 5000,
                rest: 2,
                current: 1
            },
            {
                id: 105,
                title: 'Huawei ZZ',
                price: 15000,
                rest: 8,
                current: 1
            }
        ],
        orderDone: false
    }

    changeCnt(i, cnt){
        // по смысле this.state.products[i].current = cnt;

        let products = [...this.state.products];
        products[i] = {...products[i], current: cnt};
        this.setState({products});
    }

    deleteProduct(i){
        let products = [...this.state.products];
        products.splice(i, 1);
        this.setState({products});
    }

    sendForm = () => {
        this.setState({
            orderDone: true
        });
    }

    render(){
        let productsCost = this.state.products.reduce((t, pr) => {
            return t + (pr.current * pr.price)
        }, 0);
        let productsRows = this.state.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={product.current} 
                                   onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td><button onClick={() => this.deleteProduct(i)}>Delete</button></td>
                </tr>
            );
        });

        return (
            <div>
                {this.state.orderDone ? showCongrats() : showForm(productsRows, productsCost, this.sendForm)}
            </div>
        );
    }
}

function showForm(productsRows, productsCost, onSend) {
    return (
        <div>
            <h2>Cart</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                    </tr>
                    {productsRows}
                </tbody> 
            </table>
            <span>Total cost: {productsCost}</span>
            <button onClick={onSend}>Send</button>
        </div>
    );
}

function showCongrats() {
    return (
        <div>
            <h2>Congratulations!</h2>
            <p>Your order is in process.</p>
        </div>
    );
}