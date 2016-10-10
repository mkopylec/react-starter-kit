import React, {Component} from "react";

export class Search extends Component {

    readQuery = (event) => {
        let {value} = event.target;
        this.props.onChange(value);
    };

    render() {
        return (
            <input ref="query" onChange={this.readQuery}/>
        );
    }
}
