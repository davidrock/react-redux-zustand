import ReactPlayer from 'react-player';
import { next, useCurrentLesson } from '../store/slices/player';
import { useAppDispatch, useAppSelector } from '../store';
import { Loader } from 'lucide-react';

export function VideoPlayer() {
	const dispatch = useAppDispatch();
	const { currentLesson } = useCurrentLesson();
	const isCourseLoading = useAppSelector((state) => state.player.isLoading);

	function handlePlayNext() {
		dispatch(next());
	}

	if (!currentLesson) return null;

	return (
		<div className="aspect-video flex-1">
			{isCourseLoading ? (
				<div className="flex h-screen items-center justify-center">
					<Loader className="h-6 w-6 animate-spin text-zinc-400" />
				</div>
			) : (
				<ReactPlayer
					width="100%"
					height="100%"
					controls
					url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
					onEnded={() => handlePlayNext()}
				/>
			)}
		</div>
	);
}
