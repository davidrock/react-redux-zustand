import { useAppSelector } from '../store';

export function TodoList() {
	const todos = useAppSelector((store) => {
		return store.todos;
	});
	console.log(todos);

	return (
		<ul>
			{todos.map((i) => (
				<li key={i}>{i}</li>
			))}
		</ul>
	);
}
