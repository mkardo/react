import React from 'react';

export default class extends React.Component{

    state = {
        cnt: this.props.min,
        alert: ''
    };

    increase = () => {
        if (this.state.cnt < this.props.max) {
            this.setState({
                cnt: this.state.cnt + 1,
                alert: ''
            });
        }
    }

    decrease = () => {
        if (this.state.cnt > this.props.min) {
            this.setState({
                cnt: this.state.cnt - 1,
                alert: ''
            });
        }
    }

    handleChange = (event) => {

        const value = +event.target.value;

        if (isNaN(value)) {
            this.setState({
                cnt: event.target.value,
                alert: 'Введено неверное значение'
            });

            return;
        }

        if (value > this.props.max) {
            this.setState({
                cnt: event.target.value,
                alert: 'Число больше максимума'
            });

            return;
        }

        if (value < this.props.min) {
            this.setState({
                cnt: event.target.value,
                alert: 'Число меньше минимума'
            });
            
            return;
        }

        this.setState({
            cnt: value,
            alert: ''
        });
    }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>Minus 1</button>
                <input type="text" value={this.state.cnt} onChange={this.handleChange}/>
                <button onClick={this.increase}>Plus 1</button>
                <div>
                    <span>{this.state.alert}</span>
                </div>
            </div>
        );
    }
}