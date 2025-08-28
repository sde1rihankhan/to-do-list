import React, { useState } from "react";

const Todos = ({ todos, deleteTodo, setId, handleDelete, setTodos }) => {
  // const [showTodo, setShowTodo] = useState(false);

  const [completeTodo, setCompleteTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleComplete = (id) => {
    const completeItem = todos.find((todo) => todo.id === id);
    if (!completeTodo.find((i) => i.id === id)) {
      setCompleteTodo([...completeTodo, completeItem]);
    }
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  const pendingTodo = todos.filter(
    (t) => !completeTodo.find((c) => c.id === t.id)
  );

  let listToShow = [];
  if (filter === "all") listToShow = todos;
  if (filter === "pending") listToShow = pendingTodo;
  if (filter === "complete") listToShow = completeTodo;

  return (
      <div className="container text-center w-2/3">
        <div className=" flex justify-around mb-10">
          <button
            className="bg-yellow-400 p-2 px-3 rounded-lg"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="bg-rose-400 p-2 px-3 rounded-lg"
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            className="bg-lime-400 p-2 px-3 rounded-lg"
            onClick={() => setFilter("complete")}
          >
            Complete
          </button>
        </div>

        <div className={`border p-2 rounded mt-2`}>
          <ul>
            {listToShow.length === 0 ? (
              <p className="text-gray-400">No todos found.</p>
            ) : (
              listToShow.map((todo) => (
                <li key={todo.id} className="text-gray-500 m-2">
                    <p>{`Title     -     ${todo.title}`}</p>
                    <p className="mb-2">{`Description     -     ${todo.description}`}</p>
                  <hr />
                  {/* <button
                    onClick={() => handleUndo(todo.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded mb-2"
                  >
                    Undo
                  </button> */}
                </li>
              ))
            )}
          </ul>
        </div>

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          {todos.map((value) => (
            <tbody key={value.id}>
              <tr>
                <td className="content-center">
                  {value.title}{" "}
                  <input
                    onClick={() => handleComplete(value.id)}
                    type="checkbox"
                    className="p-3"
                  />
                </td>
                <td className="content-center">{value.description}</td>
                <td>
                  <button
                    onClick={() => setId(value.id)}
                    className="btn btn-warning m-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(value.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
  );
};

export default Todos;