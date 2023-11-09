import ReactPlayer from 'react-player';
import { Loader } from 'lucide-react';
import { useCurrentLesson, useStore } from '../zustand-store';

export function VideoPlayer() {
	const { currentLesson } = useCurrentLesson();
	const { isLoading, next } = useStore((store) => {
		return {
			isLoading: store.isLoading,
			next: store.next,
		};
	});

	if (!currentLesson) return null;

	return (
		<div className="aspect-video flex-1">
			{isLoading ? (
				<div className="flex h-screen items-center justify-center">
					<Loader className="h-6 w-6 animate-spin text-zinc-400" />
				</div>
			) : (
				<ReactPlayer
					width="100%"
					height="100%"
					controls
					url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
					onEnded={() => next()}
				/>
			)}
		</div>
	);
}
