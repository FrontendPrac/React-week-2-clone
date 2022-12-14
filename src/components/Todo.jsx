import React from "react";

const Todo = ({ todo, isActive, setTodos }) => {

    // delete handler 생성
    const onClickDeleteHandler = () => {
        setTodos((todos) => todos.filter((t) => t.id !== todo.id));
    };

    // swith handler 생성
    const onClickSwithHandler = () => {
        setTodos((todos) =>
            todos.map((t) => {
                if (t.id === todo.id) {
                    return { ...t, isDone: !t.isDone };
                } else {
                    return t;
                }
            })
        );
    };

    return (
        <div style={{ border: "2px solid black" }}>
            <h5>{todo.title}</h5>
            <p>{todo.content}</p>
            <button onClick={onClickSwithHandler}>
                {isActive === true ? "완료" : "취소"}
            </button>
            <button onClick={onClickDeleteHandler}>삭제</button>
        </div>
    );
};

export default Todo;
