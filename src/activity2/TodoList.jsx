import React, { useState } from 'react';
import '../activity2/TodoList.css'

const TodoList = () => {
    // Initialize states
    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});

    // Function to handle adding a new todo heading 
    const handleAddTodo = () => {
        //check if input is not empty
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
    };

    // Function to handle deleting a todo heading
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // Function to handle adding a new list item to a specific todo heading
    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: '' });
        }
    };

    // Function to update list input value for a specific heading index
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value });
    };

    return (
        <div className="todo-container">
            <h1>My Todo List</h1>
            
            <div className="input-container">
                {/* Input field to enter a new heading */}
                <input
                    type="text"
                    className="heading-input"
                    placeholder="Enter heading"
                    value={headingInput}
                    onChange={(e) => { setHeadingInput(e.target.value); }}
                />
                {/* Button to add the entered heading to the todo list */}
                <button className="add-list-button" onClick={handleAddTodo}>
                    Add Heading
                </button>
            </div>

            <div className="todo_main">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-card">
                        <div className="heading_todo">
                            {/* Display the heading text of the current todo item */}
                            <h3>{todo.heading}</h3>
                            
                            {/* Button to delete the current heading by passing its index */}
                            <button 
                                className="delete-button-heading" 
                                onClick={() => handleDeleteTodo(index)}
                            >
                                Delete Heading
                            </button>
                        </div>

                        {/* Display the list items */}
                        <ul>
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    <p>{list}</p>
                                </li>
                            ))}
                        </ul>

                        {/* Input and button to add new list items */}
                        <div className='add_list'>
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={listInputs[index] || ''}
                                onChange={(e) => handleListInputChange(index, e.target.value)}
                            />
                            <button 
                                className="add-list-button" 
                                onClick={() => handleAddList(index)}
                            >
                                Add List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;