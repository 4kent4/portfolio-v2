import './header.css';
import Particle from '../Particle';
import { GiButterfly } from 'react-icons/gi';

const Header = () => {
	return (
		<section id='header' className='section'>
			{/* <Particle id='tsparticles' /> */}
			<div className='txt-container'>
				<h3 className='intro'>Hi, I am </h3>
				<h2 className='intro my-name'>
					Kent Fortich.{' '}
					<span className='bfly'>
						<GiButterfly />
					</span>
				</h2>
				<h1 className='help'>Let me help you design your success. </h1>
				<h3>
					A <span className='H-light'>Computer Science</span> graduate who
					aspires to become a
					<span className='H-light'> ReactJS Developer.</span>
				</h3>
				<div className='cv-con'>
					<a className='cv' href=''>
						Resume
					</a>
				</div>
			</div>
		</section>
	);
};
export default Header;
