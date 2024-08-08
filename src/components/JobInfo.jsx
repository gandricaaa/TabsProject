import React from 'react';
import Duties from './Duties';

const JobInfo = ({ jobs, currentItem }) => {
	console.log(jobs);

	const { title, dates, duties, company } = jobs[currentItem];
	console.log(duties);

	return (
		<article className='job-info'>
			<h2>{title}</h2>
			<span className='job-company'>{company}</span>
			<p className='job-date'>{dates}</p>
			<Duties duties={duties} />
		</article>
	);
};

export default JobInfo;
