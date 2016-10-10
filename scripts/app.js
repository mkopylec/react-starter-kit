import React, {Component} from "react";
import {Filter} from "./filter";
import {Items} from "./items";
import {Price} from "./price";
import {Search} from "./search";

export class App extends Component {

    state = {
        query: '',
        filter: {
            receiveInPackstation: true,
            freeShipping: true
        },
        price: {
            from: 0,
            to: 10000
        },
        items: this.props.items
    };

    updateQuery = (query) => {
        this.setState({query});
    };

    updateFilter = (filter) => {
        this.setState({filter});
    };

    updatePrice = (price) => {
        this.setState({price});
    };

    filterItems() {
        return this.state.items
            .filter(item => item.name.toLowerCase().startsWith(this.state.query.toLowerCase()))
            .filter(item => item.price >= this.state.price.from && item.price <= this.state.price.to)
            .filter(item => this.state.filter.receiveInPackstation && item.tags.includes('[Receive in packstation]')
                || this.state.filter.freeShipping && item.tags.includes('[Free shipping]')
            );
    }

    render() {
        console.log(this.state);
        const filteredItems = this.filterItems();
        return (
            <div className="app">
                <Search onChange={this.updateQuery}/>
                <Filter currentValue={this.state.filter} onChange={this.updateFilter}/>
                <Price currentValue={this.state.price} onChange={this.updatePrice}/>
                <Items items={filteredItems}/>
            </div>
        );
    }
}
