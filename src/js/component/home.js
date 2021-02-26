import React, { useState } from "react";

export function Home() {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState("");
	const [sizeArr, setSizeArr] = useState(0);

	//create your first component
	const updateTodo = e => {
		setTodo(e.target.value);
		setSizeArr(todoList.length);
	};

	const handleAdd = () => {
		setTodoList([...todoList, todo]);

		setTodo("");
		setSizeArr(todoList.length);
	};

	const deleteElem = index => {
		todoList.splice(index, 1);
		handleAdd();
		setSizeArr(todoList.length);
	};

	// setSizeArr(todoList.length);

	return (
		<div className="container ">
			<div className=" text-center container mt-5 todoListMain2">
				<div>
					<h2>
						<em> todos</em>
					</h2>
				</div>
				<input
					type="text"
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
				<p
					key={index}
					className="todoListMain container"
					onClick={() => deleteElem(index)}>
					{item}
				</p>
			))}

			<p className="todoListFoo container">{sizeArr} item left</p>
		</div>
	);
}
