import './App.css';
import { PageHeader } from '@workday/canvas-kit-react-page-header';
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';

import { Button } from '@workday/canvas-kit-react-button';
import { useEffect, useState } from 'react';
import Todo from './Todo';
import Card from '@workday/canvas-kit-react-card';
import { db } from './firebase';
import { getTodosFromDb, addToCollection } from './helpers/api';
function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	// app loads-> listen to db -> fetch new todos as they are added/removed
	//runs once the apps loads
	//useEffect(arrow function/dependencies) - this fires when app loads
	//runs once when app load if [] is left empty
	//[input] -> once a new todo is added it will fire
	useEffect(() => {
		getTodosFromDb('todos', setTodos);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		addToCollection('todos', 'todo', input);
		setInput('');
	};
	return (
		<div className="app">
			<PageHeader title="ToDo APP" />
			<div className="app__form">
				<FormField label="Add TODO">
					<div className="app__form_input">
						<TextInput placeholder="Enter TODO" value={input} onChange={(e) => setInput(e.target.value)} />
					</div>
					<div>
						<Button size={Button.Size.Small} onClick={handleSubmit} disabled={!input}>
							Add Todo
						</Button>
					</div>
				</FormField>
			</div>
			<Card>
				{todos.map((todo) => {
					return <Todo key={todo} todo={todo} />;
				})}
			</Card>
		</div>
	);
}

export default App;
