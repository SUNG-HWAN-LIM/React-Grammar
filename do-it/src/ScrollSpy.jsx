import React, { Component } from 'react';

class ScrollSpy extends Reate.PrueComponent {
    constructor(props) {
        super(props)
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
    }
    checkPosition() {
        if (TouchList.ref.getBoundingClientRect().top < window.innerHeight) {
            console.log('enter');
        } else {
            console.log('exit')
        }
    }

    ComponentDidMount() {
        window.addEventListener(scroll, this.checkPosition);
        this.checkPosition();
    }

    ComponentDidMount() {
        window.addEventListener(scroll, this.checkPosition);
    }
    render() {
        return (
            <div ref=
                {this.setRef} />
        );
    }
}

export default ScrollSpy;