import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './components/JobInfo';
import BtnContainer from './components/BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [currentItem, setCurrentItem] = useState(0);
	const fetchTabs = async () => {
		const response = await fetch(url);
		const newJob = await response.json();
		setJobs(newJob);
		setIsLoading(false);
	};
	useEffect(() => {
		fetchTabs();
	}, []);
	if (isLoading) {
		return (
			<section className='jobs-center'>
				<div className='loading'></div>
			</section>
		);
	}
	return (
		<section className='jobs-center'>
			{/* BtnContainer */}
			<BtnContainer
				jobs={jobs}
				currentItem={currentItem}
				setCurrentItem={setCurrentItem}
			/>
			{/* JobInfo */}
			<JobInfo jobs={jobs} currentItem={currentItem} />
		</section>
	);
}

export default App;
