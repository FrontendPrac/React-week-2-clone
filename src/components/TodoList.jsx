import React from "react";
import Todo from "./Todo";

const TodoList = ({ isActive, todos, setTodos }) => {
    return (
        <>
            <h4>{isActive === true ? "해야할 것" : "완료된 것"}</h4>
            {todos
                .filter((todo) => todo.isDone !== isActive)
                .map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            isActive={isActive}
                            todo={todo}
                            setTodos={setTodos}
                        />
                    );
                })}
        </>
    );
};

export default TodoList;
