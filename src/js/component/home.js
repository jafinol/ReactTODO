import React, { useState } from "react";

export function Home() {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState("");
	//create your first component
	const updateTodo = e => {
		setTodo(e.target.value);
	};

	const handleAdd = () => {
		setTodoList([...todoList, todo]);
		setTodo("");
	};

	const deleteElem = index => {
		todoList.splice(index, 1);
		handleAdd();
	};

	return (
		<div className="container ">
			<div className=" text-center container mt-5 todoListMain">
				<div>
					<h2>
						<em> todos</em>
					</h2>
				</div>
				<input
					onKeyPress={event => {
						if (event.key === "Enter") {
							handleAdd();
						}
					}}
					placeholder="enter task"
					onChange={updateTodo}
					value={todo}></input>
			</div>

			{todoList.map((item, index) => (
				<div
					key={index}
					className="todoListMain container"
					onClick={() => deleteElem(index)}>
					{item}
				</div>
			))}
		</div>
	);
}
