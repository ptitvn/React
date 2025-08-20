import  { Component } from 'react';
import ChildComponent from './ChildrenComponent';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface State {
    product: Product;
}

export default class ParentComponent extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: 'Bưởi ba roi',
                price: 12000,
                quantity: 6,
            },
        };
    }

    render() {
        return (
            <div>
                <ChildComponent product={this.state.product} />
            </div>
        );
    }
}

