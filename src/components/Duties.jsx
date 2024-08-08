import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
const Duties = ({ duties }) => {
	console.log(duties);

	return (
		<article>
			{duties.map((duty) => {
				const id = uuidv4();
				return (
					<div key={id} className='job-desc'>
						<FaAngleDoubleRight className='job-icon' />
						<p>{duty}</p>
					</div>
				);
			})}
		</article>
	);
};

export default Duties;
