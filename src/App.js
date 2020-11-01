import './App.css';
import { PageHeader } from '@workday/canvas-kit-react-page-header';
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';
import { Button } from '@workday/canvas-kit-react-button';
import { useState } from 'react';
function App() {
  
	return (
		<div className="app">
			<PageHeader title="ToDo APP" />
			<FormField
				label="My Field"
				inputId="my-input-field"
				hintText="Please add a todo"
				hintId="my-input-field-error"
				error={FormField.ErrorType.Error}
			>
				<TextInput placeholder="Placeholder" value="value" onChange={() => {}} />
				<Button size={Button.Size.Small}>Small Button</Button>
			</FormField>
			
		</div>
	);
}

export default App;
