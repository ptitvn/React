import  { Component} from 'react';
import ChildrenComp from './Children_Comp';

type ParentCompState = {
    fullName: string;
};

export default class ParentComp extends Component<object, ParentCompState> {
    constructor(props: object) {
        super(props);
        this.state = {
            fullName: 'Nguyễn Văn Nam'
        };
    }

    render() {
        return (
            <div>
                <p>Họ và tên bên component cha: {this.state.fullName}</p>
            <ChildrenComp name={this.state.fullName} />
        </div>
    );
};
}