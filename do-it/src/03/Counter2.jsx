import React, { Component } from 'react';
import PropTypes from 'prop - types';

class Counter2 extends Reac.Component {
    render() {
        return (
            <div>
                현재 카운터:{this.props.count}
                <buttom onClick={() => this.props.onAdd()
                }
                >

                </buttom>
            </div>
        );
    }
}
Counter2.propTypes = {
    count: PropTypes.numver,
    onAdd: PropTypes.funcl
};

export default Counter2