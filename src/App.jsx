import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuid API 임포트
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
    // todos state 생성
    const [todos, setTodos] = useState(initialState);
    // console.log(todos);

    return (
        <div>
            <Header>헤더입니다</Header>
            <main style={{ backgroundColor: "yellow", padding: "20px" }}>
                {/* 인풋을 받아 입력하는 부분  */}
                <Input todos={todos} setTodos={setTodos} />
                {/* todoList를 출력하는 부분 */}
                <TodoList isActive={true} todos={todos} setTodos={setTodos} />
                <TodoList isActive={false} todos={todos} setTodos={setTodos} />
            </main>
            {/* <footer>푸터입니다</footer> */}
            <Footer>푸터입니다</Footer>
        </div>
    );
};

export default App;

// initialState 생성
const initialState = [
    {
        id: uuidv4(),
        title: "리액트 공부",
        content: "리액트를 공부합시다",
        isDone: false,
    },
    {
        id: uuidv4(),
        title: "리덕스 공부",
        content: "리덕스를 공부합시다",
        isDone: true,
    },
    {
        id: uuidv4(),
        title: "자바스크립트 공부",
        content: "자바스크립트를 공부합시다",
        isDone: true,
    },
];
