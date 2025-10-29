import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [completeTodos, setCompletedTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);

  const handleDelete = (id) => {
    const deletedItem = todos.find((todo) => todo.id === id);
    setDeletedTodos([...deletedTodos, deletedItem]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteFromComplete = (id) => {
    const deleteItem = completeTodos.find((todo) => todo.id === id);
    setDeletedTodos([...deletedTodos, deleteItem]);
    setCompletedTodos(completeTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    const completeItem = todos.find((todo) => todo.id === id);
    if (!completeTodos.find((t) => t.id === id)) {
      setCompletedTodos([...completeTodos, completeItem]);
    }
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUndo = (id) => {
    const restoredItem = deletedTodos.find((todo) => todo.id === id);
    setTodos([...todos, restoredItem]);
    setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
  };

  const [id, setId] = useState("");

  return (
    <>
      <div className="pt-16 pl-9 absolute">
        <button
          onClick={() => setShowDeleted(!showDeleted)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          <div
            style={{ top: 55, left: 26 }}
            className={`flex bg-red-600 w-6 justify-center rounded-full absolute`}
          >
            <p style={{height: 'n'}} className="text-white font-bold ">{deletedTodos.length}</p>
          </div>

          {showDeleted ? "Hide Deleted Todos" : "Show Deleted Todos"}
        </button>

        <div className="flex pt-3">
          {/* <h2 className="text-xl font-bold mb-4 underline">Deleted Todos</h2> */}
          <div
            className={`border rounded-md w-96 ${
              showDeleted ? "block" : "hidden"
            }`}
          >
            <p className="ml-2 my-2">Your Deleted Todos</p>

            {deletedTodos.length === 0 ? (
              <p className="ml-2 my-2 text-gray-500 text-sm">
                Deleted is Empty
              </p>
            ) : (
              <ul>
                {deletedTodos.map((todo) => (
                  <li key={todo.id} className="text-gray-500 m-2">
                    <div>
                      <p>{`Title     -     ${todo.title}`}</p>
                      <p className="mb-2 ">{`Description     -     ${todo.description}`}</p>
                    </div>
                    <button
                      onClick={() => handleUndo(todo.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mb-2"
                    >
                      Undo
                    </button>
                    <hr />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="container absolute -right-52">
          <h1 className="text-center text-3xl mt-5 underline p-1">
            React To DO List
          </h1>
          <Form id={id} setId={setId} todos={todos} setTodos={setTodos} />
          <Todos
            todos={todos}
            completeTodos={completeTodos}
            handleDelete={handleDelete}
            handleDeleteFromComplete={handleDeleteFromComplete}
            handleComplete={handleComplete}
            setId={setId}
          />
        </div>
      </div>
    </>
  );
};

export default App;
