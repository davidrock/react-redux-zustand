import { ChevronDown } from 'lucide-react';
import { Lesson } from './Lesson';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { play } from '../store/slices/player';

interface Props {
	title: string;
	lessonsAmount: number;
	moduleIndex: number;
}

export function Module({ title, lessonsAmount, moduleIndex }: Props) {
	const dispatch = useDispatch();
	const lessons = useAppSelector((state) => {
		return state.player.course.modules[moduleIndex].lessons;
	});

	return (
		<Collapsible.Root className="group">
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
						{lessons.map((lesson, lessonIndex) => {
							return (
								<Lesson
									key={lesson.id}
									title={lesson.title}
									duration={lesson.duration}
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
