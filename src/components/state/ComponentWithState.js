import React, {useState} from "react";

export class ComponentWithState extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => this.setState((state) => ({ count: state.count + 1 }));

    render() {
        return (
            <div onClick={this.increment}>
                Class count is {this.state.count}
            </div>
        )
    }
}

export const FunctionalState = () => {
    const [count, setCount] = useState(0);

    return (
        <div onClick={() => setCount(count + 1)}>
            Functional: count is {count}
        </div>
    )
};