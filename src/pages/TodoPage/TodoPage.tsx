import React, { useEffect, useState } from "react";
import AddButton from "../../components/AddButton";
import InputField from "../../components/InputField"
import { Filter, Todo } from "../../types/item";
import Task from "../../components/TodoComponent";
import ReactDOM from "react-dom";

const TodoList = () => {
    const [text, setText] = useState('')
    // const [list, setList] = useState<Array<Todo>>(new Array<Todo<)
    const [list, setList] = useState<Todo[]>([])
    const [index, setIndex] = useState(0)

    const [filterIndex, setFilter] = useState(0)

    function editTask(text: string) {
        setText(text)
    }
    function addTask(todo: Todo) {
        setList([...list, todo])

        /*
        const checkbox = document.createElement("input")
        const label = document.createElement("label")
        checkbox.type = 'checkbox'
        checkbox.id = index.toString()
        label.textContent = text
        label.htmlFor = checkbox.id
        document.body.append(checkbox)
        document.body.append(label)
        */

        // ReactDOM.render(<Task state={todo.state} id={todo.id} content={todo.content} />, document.getElementById("root"))

        setText("")
        setIndex(index + 1)
    }

    return (
        <>
            <form action="#" method="">
                <input type="text" onChange={(e) => editTask(e.target.value)} value={text} />
                <input type="submit" onClick={() => addTask({ state: false, id: index, content: text })} value={"追加"} />
            </form>

            <div>
                <button onClick={() => setFilter(Filter.ALL)}>全部表示</button>
                <button onClick={() => setFilter(Filter.COMP)}>完了</button>
                <button onClick={() => setFilter(Filter.YET)}>未完了</button>
            </div>

            <ul>
                {
                    list.map((todo) => {
                        switch (filterIndex) {
                            case Filter.ALL:
                                return <Task id={todo.id} state={todo.state} content={todo.content} />
                            case Filter.COMP:
                                if (todo.state) {
                                    return <Task id={todo.id} state={todo.state} content={todo.content} />
                                }
                                break;
                            case Filter.YET:
                                if (!todo.state) {
                                    return <Task id={todo.id} state={todo.state} content={todo.content} />
                                }
                                break;
                        }
                    })
                }
            </ul>

        </>
    )
}


export default TodoList;