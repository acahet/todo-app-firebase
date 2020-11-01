import './App.css';
import { PageHeader } from '@workday/canvas-kit-react-page-header';
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';

import { Button } from '@workday/canvas-kit-react-button';
import { useState } from 'react';
import Todo from './Todo';
import Card from '@workday/canvas-kit-react-card';
function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, input]);
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
					return <Todo todo={todo} />;
				})}
			</Card>
		</div>
	);
}

export default App;
