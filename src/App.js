import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: "react를 배워봅시다." },
        { id: 2, title: "useState를 배워봅시다." },
    ]);

    return (
        <>
            <Layout>
                <Form todos={todos} setTodos={setTodos}/>
            </Layout>
        </>
    );
}

const Layout = (props) => {
    return (
        <>
            <div className="layout">
                <div className="header">
                    <div>My TodoList</div>
                    <div>한지윤</div>
                </div>
                <div>{props.children}</div>
            </div>
        </>
    );
};

const Form = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const addButtonHandler = () => {
        const newTodos = {
            id: todos.length + 1,
            title,
        };

        setTodos([...todos, newTodos]);
    };

    return (
        <>
            <div>
                <div>
                    <input value={title} onChange={titleChangeHandler} />
                    <button onClick={addButtonHandler}>추가하기</button>
                </div>
            </div>
            <div> TodoList</div>
            <div className="app-style">
                {todos.map(function (todo) {
                    return <Todo key={todo.id} todo={todo} />;
                })}
            </div>
        </>
    );
};

const Todo = ({ todo }) => {
    return (
        <div key={todo.id} className="component-style">
            {todo.title}
        </div>
    );
};

export default App;
