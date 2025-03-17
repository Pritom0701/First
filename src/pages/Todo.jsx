import { useEffect, useState } from 'react';
import './Todo.css'

const Todo = () => {


    const [data, setData] = useState()
    const [finalData, setFinalData] = useState([])
    const [changebtn,setChangebtn] = useState(0)
    // const [index, setIndex] = useState()
 
    useEffect(() => {
        const getData = localStorage.getItem('todo')
        setFinalData(JSON.parse(getData))
    }, [])


    const addTodo = () => {
        const temData = ([...finalData,data])
        setFinalData(temData)
        localStorage.setItem("todo",JSON.stringify(temData))
        setData('')
    }

    

    const deleteData = (item) => {
        const updateData = finalData.filter((v,i) => i != item)
        setFinalData(updateData)
        localStorage.setItem("todo",JSON.stringify(updateData))
    }

    const editData = (item) => {
        const findData = finalData.find((v,i) => i == item)
        setData(findData)
        const clearPreviousData = finalData.filter((v,i) => i != item)
        setFinalData(clearPreviousData)
        localStorage.setItem("todo", JSON.stringify(clearPreviousData))
        setChangebtn(1)
        // setFinalData(updateData)
        // localStorage.setItem("todo",JSON.stringify(updateData))
    }

    const updateTodo = () => {
        const setNewData = ([...finalData,data])
        setFinalData(setNewData)
        localStorage.setItem("todo",JSON.stringify(setNewData))
        setData('')
        setChangebtn(0)
    }

    


    return (
        <>
            <div class="container">
                <h2>To-Do List</h2>
                <input onChange={(e) => setData(e.target.value)} type="text" class="todo-input" placeholder="Add a new task..." value={data} />
                {
                    changebtn == 0 ? <button onClick={addTodo} class="add-btn">Add Task</button>:
                    <button onClick={updateTodo} class="add-btn">Update task</button>
                }
                <ul class="todo-list">
                {/* <li>{finalData}<button class="delete-btn">X</button></li> */}
                    {
                        finalData?.map((item,i) => 
                            <li>{item}
                            <div>
                            <button onClick={() => deleteData(i)} class="delete-btn">X</button>
                            <button onClick={() => editData(i)} class="delete-btn">Edit</button>
                            </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    );
};

export default Todo;