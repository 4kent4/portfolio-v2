import './about.css';
import Me from '../../assets/Me.png';
import { SiFramer } from 'react-icons/si';
import { FcMultipleDevices } from 'react-icons/fc';
import { GiPlainArrow } from 'react-icons/gi';

const About = () => {
	return (
		<section className='section' id='about'>
			<h2 className='about-me section-title'>About Me</h2>
			<div className='about-container'>
				<div className='about-context'>
					<p>
						Hello! My name is <span className='highlight'>Kent M. Fortich</span>
						. I have been interested in building refined digital web experiences
						with a focus on responsive and interactive content.
						<br />
						<br />I graduated with a bachelor's degree in{' '}
						<span className='highlight'>Computer Science</span> at Lyceum of the
						Philippines Batangas. Currently, I'm seeking for an entry level
						position to start my journey in the realm of{' '}
						<span className='highlight'>Web Development</span> field.
					</p>
				</div>
				<div className='me-pic'>
					<img src={Me} alt='' />
				</div>
			</div>

			<div className='contribute'>
				Ways that I can contribute :
				<div className='arrowdown'>
					<GiPlainArrow />
				</div>
			</div>
			<div className='contribute-container'>
				<div>
					<div className='con-con'>
						<SiFramer className='contribute-icon' />
						<div className='contribute-title'>
							<h3 className='h-light-title'>Animated Interaction</h3>
						</div>
						<p>
							Typically, I design animated micro interactions to make content
							more interesting and less boring
						</p>
					</div>
				</div>

				<div>
					<div className='con-con'>
						<FcMultipleDevices className='contribute-icon' />
						<div className='contribute-title'>
							<h3 className='h-light-title'>Responsive Web Design</h3>
						</div>
						I design layouts that adapt to every screen size, whether it be a
						desktop, tablet, or mobile.
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
