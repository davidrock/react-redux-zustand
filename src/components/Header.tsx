import { useAppSelector } from '../store';
import { useCurrentLesson } from '../store/slices/player';

export function Header() {
	const { currentLesson, currentModule } = useCurrentLesson();

	return (
		<div className="flex flex-col gap-1">
			<h1>{currentLesson.title}</h1>
			<span className="">Módulo {currentModule.title}</span>
		</div>
	);
}
