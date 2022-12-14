import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // uuid API 임포트

const Input = ({ todos, setTodos }) => {
    // title, content state 생성
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // title handler 생성
    const onChangeTitleHandler = (event) => {
        setTitle(event.target.value);
    };

    // content handler 생성
    const onChangeContentHandler = (event) => {
        setContent(event.target.value);
    };

    // console.log("title: ", title);
    // console.log("content: ", content);

    // submit handler 생성
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log("here");

        if (title === "" || content === "") {
            alert("빈 칸을 채워주세요");
        } else {
            const newTodo = {
                id: uuidv4(),
                title: title,
                content: content,
                isDone: false,
            };

            setTodos((todos) => {
                return [...todos, newTodo];
            });

            setTitle("");
            setContent("");
        }
    };

    return (
        <form onSubmit={onSubmitHandler}>
            제목:{" "}
            <input type="text" value={title} onChange={onChangeTitleHandler} />
            내용:{" "}
            <input
                type="text"
                value={content}
                onChange={onChangeContentHandler}
            />
            <button>추가</button>
        </form>
    );
};

export default Input;
