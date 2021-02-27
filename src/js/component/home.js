import React, { useState } from "react";

export function Home() {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState("");
	const [trash, setTrash] = useState(false);
	const [trashList, setTrashList] = useState([]);

	//create your first component
	const updateTodo = e => {
		setTodo(e.target.value);
	};

	const handleAdd = () => {
		setTodoList([...todoList, todo]);
		setTrashList([...trashList, false]);
		setTodo("");
	};

	function deleteElem(arr, itemdel) {
		const result = arr.filter((todoList, index3) => {
			return index3 != itemdel;
		});
		setTodoList(result);
	}

	return (
		<div className="container " style={{ with: "30%", margin: "auto" }}>
			<div
				className=" text-center container mt-5 todoListMain2"
				style={{ with: "30%", margin: "auto" }}>
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
				<div
					key={index}
					onMouseEnter={() => setTrash(!trash)}
					onMouseLeave={() => setTrash(!trash)}
					//onMouseEnter={() => (trashList[index] = !trash)}
					//onMouseLeave={() => (trashList[index] = !trash)}
					className="todoListMain container row"
					style={{ with: "30%", margin: "auto" }}
					onClick={() => deleteElem(todoList, index)}>
					<div className="d-flex justify-content-start col">
						{item}
					</div>
					<div className="d-flex justify-content-end col">
						{!trash === false ? (
							<i className="fas fa-trash-alt"></i>
						) : (
							""
						)}
					</div>
				</div>
			))}

			<p className="todoListFoo container">{todoList.length} item left</p>
		</div>
	);
}
