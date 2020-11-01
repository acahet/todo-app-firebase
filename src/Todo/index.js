import React, { useState } from 'react';
import { deleteTodo } from '../helpers/api';
import './styles.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { updateTodo } from '../helpers/api';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'center',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function Todo(props) {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');

	const updateTodoToDb = () => {
		updateTodo('todos', props.todo.id, input);
		setOpen(false);
	};
	return (
		<>
			<Modal className={classes.paper} open={open} onClose={(e) => setOpen(false)}>
				<div className="todo__modal">
					<div className="todo__modal_header">
						<h1>Edit ToDo</h1>
						<CloseIcon onClick={(e) => setOpen(false)} />
					</div>
					<div className="todo__modal_body">
						<input placeholder={props.todo.todo} value={input} onChange={(e) => setInput(e.target.value)} />

						<Button onClick={updateTodoToDb}>Update TODO</Button>
					</div>
				</div>
			</Modal>
			<List className="todo__list" key={props.todo.id}>
				<div className="todo__content">
					<ListItem>
						<ListItemText primary={props.todo.todo} />
					</ListItem>
					<div className="todo__icons">
						<DeleteIcon
							onClick={() => {
								deleteTodo('todos', props.todo.id);
							}}
						/>
						<EditIcon onClick={(e) => setOpen(true)} />
					</div>
				</div>
			</List>
		</>
	);
}

export default Todo;
