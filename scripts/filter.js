import React, {Component} from "react";

export class Filter extends Component {

    readReceiveInPackstation = (event) => {
        const {checked} = event.target;
        this.readFilterSetting({receiveInPackstation: checked});
    };

    readFreeShipping = (event) => {
        const {checked} = event.target;
        this.readFilterSetting({freeShipping: checked});
    };

    readFilterSetting(setting) {
        let updatedValue = Object.assign(this.props.currentValue, setting);
        this.props.onChange(updatedValue);
    }

    render() {
        return (
            <div>
                <p>Filters</p>
                <label htmlFor="receiveInPackstation">Receive in packstation</label>
                <input id="receiveInPackstation" type="checkbox" checked={this.props.currentValue.receiveInPackstation} onChange={this.readReceiveInPackstation}/>
                <label htmlFor="freeShipping">Free shipping</label>
                <input id="freeShipping" type="checkbox" checked={this.props.currentValue.freeShipping} onChange={this.readFreeShipping}/>
            </div>
        );
    }
}
