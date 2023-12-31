import { ChevronDown } from 'lucide-react';
import { Lesson } from './Lesson';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useAppDispatch, useAppSelector } from '../store';
import { play } from '../store/slices/player';

interface Props {
	title: string;
	lessonsAmount: number;
	moduleIndex: number;
}

export function Module({ title, lessonsAmount, moduleIndex }: Props) {
	const dispatch = useAppDispatch();
	const lessons = useAppSelector((state) => {
		return state.player.course?.modules[moduleIndex].lessons;
	});
	const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
		const { currentModuleIndex, currentLessonIndex } = state.player;

		return { currentModuleIndex, currentLessonIndex };
	});

	return (
		<Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
			<div>
				<Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">1</div>

					<div className="flex flex-col gap-1 text-left">
						<strong>{title}</strong>
						<span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
					</div>

					<ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
				</Collapsible.Trigger>
				<Collapsible.Content>
					<nav className="relative flex flex-col gap-4 p-6">
						{lessons &&
							lessons.map((lesson, lessonIndex) => {
								const isCurrent = currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex;
								return (
									<Lesson
										key={lesson.id}
										title={lesson.title}
										duration={lesson.duration}
										isCurrent={isCurrent}
										onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
									/>
								);
							})}
					</nav>
				</Collapsible.Content>
			</div>
		</Collapsible.Root>
	);
}
