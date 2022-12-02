import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Toggle from './components/toggle/Toggle';
import { useState } from 'react';

const App = () => {
	const [rotateExpand, setRotateExpand] = useState(false);

	const onCLickHandler = () => {
		setRotateExpand(!rotateExpand);
	};
	return (
		<>
			<Header />
			<Toggle rotateExpand={rotateExpand} onClickHandler={onCLickHandler} />
			<Nav rotateExpand={rotateExpand} />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};
export default App;
