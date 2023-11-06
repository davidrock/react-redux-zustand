import ReactPlayer from 'react-player';

export function VideoPlayer() {
	return (
		<div className="aspect-video flex-1">
			<ReactPlayer width="100%" height="100%" controls url="https://www.youtube.com/watch?v=0nB_JfVDsXk" />
		</div>
	);
}
