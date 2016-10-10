import React, {Component} from "react";

class Tags extends Component {

    render() {
        let tags = this.props.tags.map(tag => {
            return <span key={tag}>{tag} </span>;
        });
        return <div>{tags}</div>
    }
}

export class Items extends Component {

    renderItems() {
        return this.props.items.map(item => {
            return (
                <li key={item.name}>
                    {item.name}<br/>
                    {item.price} PLN<br/>
                    <Tags tags={item.tags}/>
                </li>
            )
        });
    }

    render() {
        let items = this.renderItems();
        return (
            <ul>
                {items}
            </ul>
        );
    }
}
