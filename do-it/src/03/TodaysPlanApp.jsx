import React, { Component } from 'react'

class TodaysPlanApp extends React.Component {
    render() {
        const { onButtonClick, hasPaln } = this.props;

        return (
            <div className="body">
                {hasPaln ? <todaysPlan /> : null}
                <button onClick={onButtonClick}>
                    계획없음
                </button>
            </div>
        )
    }
}
