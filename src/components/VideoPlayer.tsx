import ReactPlayer from 'react-player';
import { next, useCurrentLesson } from '../store/slices/player';
import { useAppDispatch } from '../store';

export function VideoPlayer() {
	const dispatch = useAppDispatch();
	const { currentLesson } = useCurrentLesson();

	function handlePlayNext() {
		dispatch(next());
	}

	if (!currentLesson) return null;

	return (
		<div className="aspect-video flex-1">
			<ReactPlayer
				width="100%"
				height="100%"
				controls
				url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
				onEnded={() => handlePlayNext()}
			/>
		</div>
	);
}
