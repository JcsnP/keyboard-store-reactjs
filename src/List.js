import { Component } from "react";

class List extends Component {
    render() {
        return(
            <>
                <ul>
                    {this.props.items.map(items => (
                        <li key={items.id}>{items.name} - {items.price}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default List;