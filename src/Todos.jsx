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
  // const [completedTodos, setCompletedTodos] = useState([]);
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

  // const mode = ()=>{
  //   }
  // }

  // console.log(filter);

  // Pending todos (jo complete nahi hain)
  // const pendingTodos = todos.filter(
  //   (todo) => !completedTodos.find((c) => c.id === todo.id)
  // );

  // // All todos (pending + completed, bina duplicate)

  // // Checkbox click par todo ko complete karna
  // const handleComplete = (id) => {
  //   const todo = todos.find((t) => t.id === id);
  //   if (!completedTodos.find((c) => c.id === id)) {
  //     setCompletedTodos([...completedTodos, todo]); // completed me bhej do
  //   }
  // };

  // // Completed me se delete karna
  // // const handleDeleteFromCompleted = (id) => {
  // //   setCompletedTodos(completedTodos.filter((t) => t.id !== id)); // complete se hatao
  // //   handleDelete(id); // deletedTodos me bhej do (App.js wala function)
  // // };

  //  Filter ke hisab se todos dikhana
  // const getFilteredTodos = () => {
  //   switch (filter) {
  //     case "pending":
  //       return pendingTodos;
  //     case "completed":
  //       return completedTodos;
  //     default:
  //       return allTodos;
  //   }
  // };

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
      {/* <button></button> */}
    </div>
  );
};

export default Todos;
