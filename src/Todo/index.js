import React from 'react';

import './styles.css';
import { List, ListItem, ListItemText } from '@material-ui/core';
function Todo({ todo }) {
	
	return (
		<List className="todo_list" key={todo}>
			<ListItem>
				<ListItemText primary={todo} />
			</ListItem>
		</List>
	);
}

export default Todo;
