import { useState } from 'react';
// import CartIcon from "../CartIcon/CartIcon";
import { FaBars } from 'react-icons/fa';

import { Button, CartIcon, SignUp } from '../index';
import logo from '../../assets/images/Logo-Lammama2.png';
import './NavBar.scss';

const linkMenu = [
	{ link: 'productos', path: '/' },
	// { link: "colecciones", path: "/" },
	{ link: 'categorías', path: '/categories/' },
	// { link: "venta mayorista", path: "/" },
];

export const NavBar = () => {
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', changeBackground);

	return (
		<div id='Navbar' className={navbar ? 'navbar navbar__active' : 'navbar'}>
			<nav className='menu'>
				<div className='menu__row'>
					<div className='menu__row--left'>
						<Button path='/' content={logo} className={'logo '} />
						<FaBars className='menu__icons' />
					</div>
					<ul className='menu__list '>
						<SignUp saludoActive={navbar ? 'signup__user__saludo--active' : ''} nameActive={navbar ? 'signup__user__name--active' : ''} iconActive={navbar ? 'icons--active' : ''} />
						<CartIcon path='/cart/' numberActive={navbar ? 'shopCart__number--active' : ''} iconActive={navbar ? 'icons--active' : ''} />
					</ul>
				</div>
				{/* </Navbar.Collapse> */}{' '}
			</nav>
		</div>
	);
};
