import React from "react";
import { Todo } from "../../types/item";

type Props = {
    list: Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo>>
}

const Task = (todo: Todo, props: Props) => {
    function change(id: number) {
        props.setList(
            {
                id: 1,
                state: true,
                content: ""
            }
        )
    }


    return (
        <li>
            <input type="checkbox" name="" id={todo.id.toString()} defaultChecked={todo.state}
                /*onChange={() => change(todo.id)}*/ />
            <label htmlFor={todo.id.toString()}>{todo.content}</label>
        </li>
    )
}

export default Task;