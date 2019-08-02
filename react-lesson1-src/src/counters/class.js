import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }

    state = {
        cnt: this.props.min,
        inputValue: this.props.min
    };

    increase = () => {
        this.setCnt(this.state.cnt + 1);
    }

    decrease = () => {
        this.setCnt(this.state.cnt - 1);
    }

    setCnt(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            cnt,
            inputValue: cnt
        });
    }

    handleChange(newStr) {
        /*let cnt = parseInt(newStr);

        this.setCnt(isNaN(cnt) ? this.props.min : cnt);*/
        this.setState({
            inputValue: newStr
        });
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);

        this.setCnt(isNaN(cnt) ? this.props.min : cnt);
    }

    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.applyValue();
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>Minus 1</button>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={(e) => this.handleChange(e.target.value)}
                    onBlur={this.applyValue}
                    onKeyUp={this.checkEnterKey}
                />
                <button onClick={this.increase}>Plus 1</button>
                <div>
                    <span>{this.state.alert}</span>
                </div>
            </div>
        );
    }
}
