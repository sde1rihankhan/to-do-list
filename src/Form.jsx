import React, { useEffect, useState } from "react";

const Form = ({ setTodos, todos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !description) {
      alert("Please fill both fields!");
    } else {
      if (id) {
        updateById(id);
        console.log(updateById(id));
        setId("");
      } else {
        const obj = {
          id: Math.random(),
          title,
          description,
          complete: false,
        };
        setTodos([...todos, obj]);
      }
      setId("");
      setTitle("");
      setDescription("");
    }
  };

  useEffect(() => {
    if (id) {
      const updateData = todos.filter((d) => d.id === id);

      setTitle(updateData[0].title);
      setDescription(updateData[0].description);
    }
  }, [id]);

  const updateById = (id) => {
    const obj = {
      title,
      description,
    };
    setTodos((data) =>
      data.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container my-5 text-center flex justify-center items-center">
          <input
            value={title}
            onChange={(v) => setTitle(v.target.value)}
            className="mx-2 w-72 p-2 rounded-lg text-black"
            placeholder="Title"
            type="text"
          />
          <input
            value={description}
            onChange={(v) => setDescription(v.target.value)}
            className="mx-2 w-72 p-2 rounded-lg text-black"
            placeholder="Description"
            type="text"
          />
          {!id && (
            <button className="btn bg-warning p-1.5 rounded-md">Add</button>
          )}
          {id && (
            <button className="btn bg-warning p-1.5 rounded-md">Edit</button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
