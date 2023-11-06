import ReactPlayer from 'react-player';
import { useAppSelector } from '../store';

export function VideoPlayer() {
	const lesson = useAppSelector((state) => {
		const { currentLessonIndex, currentModuleIndex } = state.player;

		const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex];
		return currentLesson;
	});
	return (
		<div className="aspect-video flex-1">
			<ReactPlayer width="100%" height="100%" controls url={`https://www.youtube.com/watch?v=${lesson.id}`} />
		</div>
	);
}
