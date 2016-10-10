import React, {Component, PropTypes} from "react";

export class Price extends Component {

    readFrom = (event) => {
        let {value} = event.target;
        this.readPriceSetting({from: value});
    };

    readTo = (event) => {
        let {value} = event.target;
        this.readPriceSetting({to: value});
    };

    readPriceSetting(setting) {
        let updatedValue = Object.assign(this.props.currentValue, setting);
        this.props.onChange(updatedValue);
    }

    render() {
        return (
            <div>
                <p>Price</p>
                <input type="number" placeholder="from" value={this.props.currentValue.from} onChange={this.readFrom}/>
                <input type="number" placeholder="to" value={this.props.currentValue.to} onChange={this.readTo}/>
            </div>
        );
    }
}
