import './contact.css';
import { AiFillHome, AiFillPhone, AiFillMail } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_kuytxnp',
			'template_kir3odk',
			form.current,
			'2oNPolvN1sNiSAxsy'
		);
		e.target.reset();
	};

	return (
		<section className='section' id='contact'>
			<h2 className='contact-me'>Send Me A Message</h2>
			<div className='contact-container'>
				<div className='contact-context'>
					<div className='info-title'>
						<h3>Getting in touch is easy!</h3>
					</div>
					<div className='info-box'>
						<div className='info-icon'>
							<AiFillHome />
						</div>
						<div className='info-context'>
							<h2>Talaibon Ibaan Batangas</h2>
							<h3>102 Lipa - Ibaan Rd.</h3>
						</div>
					</div>
					<div className='info-box'>
						<div className='info-icon'>
							<AiFillPhone />
						</div>
						<div className='info-context'>
							<h2>+63-927-990-6646</h2>
							<h3>Mon - Sun</h3>
						</div>
					</div>
					<div className='info-box'>
						<div className='info-icon'>
							<AiFillMail />
						</div>
						<div className='info-context'>
							<h2>kentfortich.ccs@gmail.com</h2>
							<h3>Send it here</h3>
						</div>
					</div>
				</div>
				<div className='other-option'>
					<div className='dm-title'>
						<h3>Email Me Here</h3>
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<input
							type='text'
							name='name'
							placeholder='Your Full Name'
							required
						/>
						<input
							type='text'
							name='email'
							placeholder='Your Email Address'
							required
						/>
						<textarea
							name='message'
							placeholder='Your Message'
							rows='7'
						></textarea>
						<button className='submit-btn' type='submit'>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
export default Contact;
