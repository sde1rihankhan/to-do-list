import React, { useState } from "react";

const Todos = ({
  todos,
  completeTodos,
  handleDelete,
  handleDeleteFromComplete,
  handleComplete,
  setId,
}) => {
  const [filter, setFilter] = useState("pending");
  const allTodos = [...todos, ...completeTodos];

  // Filter ke hisab se todos dikhana
  const getFilteredTodos = () => {
    switch (filter) {
      case "pending":
        return todos;
      case "completed":
        return completeTodos;
      default:
        return allTodos;
    }
  };

  return (
    <div className="container text-center w-2/3">
      <div className="flex justify-around mb-10">
        <button
          className={`p-2 px-3 rounded-lg ${
            filter === "all" ? "bg-yellow-500" : "bg-yellow-400"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`p-2 px-3 rounded-lg ${
            filter === "pending" ? "bg-rose-600" : "bg-rose-400"
          }`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>

        <button
          className={`p-2 px-3 rounded-lg ${
            filter === "completed" ? "bg-lime-600" : "bg-lime-400"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <table className="table table-dark px-2 py-1 border">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredTodos().map((todo) => (
            <tr key={todo.id}>
              <td className="border px-2">
                {todo.title}{" "}
                {/* {filter !== "completed" && ( */}
                  <input
                    type="checkbox"
                    checked={completeTodos.some((c) => c.id === todo.id)}
                    onChange={() => handleComplete(todo.id)}
                    className="ml-2"
                  />
                {/* )} */}
              </td>
              <td className="border px-2">{todo.description}</td>
              <td className="border px-2">
                {completeTodos.some((c)=> c.id === todo.id) ? (
                  <button
                    onClick={() => handleDeleteFromComplete(todo.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setId(todo.id)}
                      className="btn btn-warning m-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;