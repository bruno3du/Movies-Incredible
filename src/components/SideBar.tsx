/** @format */

import { Button } from './Button';
import '../styles/sidebar.scss';

interface SideBarProps {
	handleClickButton: (id: number) => void;
	genres: Array<{
		id: number;
		name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
		title: string;
	}>;
	selectedGenreId: number;
}

export function SideBar({
	handleClickButton,
	genres,
	selectedGenreId,
}: SideBarProps) {
	return (
		<nav className='sidebar'>
			<span>
				Watch<p>Me</p>
			</span>

			<div className='buttons-container'>
				{genres.map((genre) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClickButton(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	);
}
