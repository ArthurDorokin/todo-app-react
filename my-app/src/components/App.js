import React, {Component} from 'react';
import Notes from './Notes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                "массив"
            ]
        };
    }
    render() {
        return <Notes notes={this.state.notes}/>;
    };
}

export default App;
