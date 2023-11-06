import { ChevronDown } from 'lucide-react';
import { Lesson } from './Lesson';
import * as Collapsible from '@radix-ui/react-collapsible';

interface Props {
	title: string;
	lessonsAmount: number;
	index: number;
}

export function Module({ title, lessonsAmount, index }: Props) {
	return (
		<Collapsible.Root className="group">
			<div>
				<Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">1</div>

					<div className="flex flex-col gap-1 text-left">
						<strong>{title}</strong>
						<span className="text-xs text-zinc-400">{lessonsAmount}s</span>
					</div>

					<ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
				</Collapsible.Trigger>
				<Collapsible.Content>
					<nav className="relative flex flex-col gap-4 p-6">
						<Lesson title="Fundamentos do redux" duration="09:13" />
						<Lesson title="Fundamentos do redux" duration="09:13" />
						<Lesson title="Fundamentos do redux" duration="09:13" />
						<Lesson title="Fundamentos do redux" duration="09:13" />
						<Lesson title="Fundamentos do redux" duration="09:13" />
						<Lesson title="Fundamentos do redux" duration="09:13" />
						<Lesson title="Fundamentos do redux" duration="09:13" />
					</nav>
				</Collapsible.Content>
			</div>
		</Collapsible.Root>
	);
}
