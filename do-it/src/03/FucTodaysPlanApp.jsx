import React, { Component } from 'react'



function FucTodaysPlanApp(props) {
    const { onButtonClick, hasPaln } = props;
    return (
        <div className="body">
            {hasPaln ? <todaysPlan /> : null}
            <button onClick={onButtonClick}>
                계획없음
                </button>
        </div>
    );

}

const todoList = [
    { taskName: '빨래하기', finished: false },
    { taskName: '공부하기', finishe: true },
];
const todos = todoList.map(todo => <TodoTask taskName={todo.taskName} />);
//결과
//{<div>빨래하기</div><div>공부하기</div>}
