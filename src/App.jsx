import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';

function App() {
	const [userSelected, setUserSelected] = useState();
	const [formIsOpen, setFormIsOpen] = useState(false);
	const [users, getUsers, createUser, deleteUser, updateUser] = useCrud('/users/');
	useEffect(() => {
		getUsers();
	}, []);

	const handleOpenForm = () => {
		setFormIsOpen(true);
	};

	return (
		<div className="app">
			<header className="user__header">
				<h1>User CRUD</h1>
				<button onClick={handleOpenForm} className="new__user-btn">
					New User +
				</button>
			</header>

			<FormUser
				createUser={createUser}
				userSelected={userSelected}
				setUserSelected={setUserSelected}
				updateUser={updateUser}
				setFormIsOpen={setFormIsOpen}
				formIsOpen={formIsOpen}
			/>
			<section className="user__container flex-container">
				{users?.map((user) => (
					<UserCard key={user.id} user={user} deleteUser={deleteUser} setUserSelected={setUserSelected} setFormIsOpen={setFormIsOpen} />
				))}
			</section>
		</div>
	);
}

export default App;
