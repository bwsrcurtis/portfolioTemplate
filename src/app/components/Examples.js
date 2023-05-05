import React from 'react';
import Card from './Card';

const Examples = () => {
	return (
		<div className='bg-background pb-8 w-5/6 mt-8 mx-auto'>
			<p id='work' className='w-[calc(full-2rem)] text-center text-4xl lg:text-5xl py-12'>
				<span className='text-primary'>Our </span>
				Templates</p>
			<div
				className='lg:px-12 md:px-24 px-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
			w-full my-0 mx-auto gap-6 place-items-center'>
				<Card
					src="/photosite.JPG" alt="Photography Site" title="Photography Site"
					description="Photography site built to showcase a local photographer's work.">
				</Card>
				<Card
					src="/gardienne.JPG" alt="Gardening Site" title="Gardening Site"
					description="Site that sends people reminders to care for their plants.">
				</Card>
				<Card
					src="/pokedex.JPG" alt="Pokedex Site" title="Pokedex Site"
					description="Site uses the Pokemon API to display information on different pokemon.">
				</Card>
			</div>
		</div>
	);
};

export default Examples;
