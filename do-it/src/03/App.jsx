import React, { Component } from 'react';

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.increaseCount = this.increaseCount.bind(this)
    }
    render() {
        return (
            <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)} />
        );
    }
}

export default App;