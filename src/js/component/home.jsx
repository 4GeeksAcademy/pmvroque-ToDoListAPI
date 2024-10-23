import React, {useEffect} from "react";
import ToDoForm from "./toDoForm";
import ToDoList from "./toDoList"

//create your first component
const Home = () => {
	
	return (
		<div className="toDo-List">
			<ToDoList />

		</div>
	);
};

export default Home;
