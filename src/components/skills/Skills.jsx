import { useState } from 'react';
import items from './Data';
import Menu from './Menu';
import Button from './Button';
import './skills.css';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

console.log(allCategories);

const Skills = () => {
	const [menuItem, setMenuItem] = useState(items);
	const [button, setButton] = useState(allCategories);

	const filter = (button) => {
		if (button === 'All') {
			setMenuItem(items);
			return;
		}

		const filteredData = items.filter((item) => item.category === button);
		setMenuItem(filteredData);
	};

	return (
		<section id='skills' className='section'>
			<div className='skills-tittle-con'>
				<h2 className='section-title'>My Skills</h2>
				<div className='skills-pic-con'>
					<Button filter={filter} button={button} setButton={setButton} />
					<Menu menuItem={menuItem} />
				</div>
			</div>
		</section>
	);
};
export default Skills;
