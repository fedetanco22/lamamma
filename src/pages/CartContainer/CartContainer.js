// import { useState } from "react";
import { Button, CartList } from './../../components/index';
import useAppContext from '../../context/useAppContext';

import '../../components/Button/Button.scss';
import './CartContainer.scss';

export const CartContainer = () => {
	const { products } = useAppContext();

	return (
		<div id='CartContainer' className='cartContainer'>
			<h1 className='cart__cart'>Carrito</h1>
			{products.length === 0 ? (
				<div className='cartContainer__vacio'>
					<h3 className='cartContainer__vacio__titulo'>Actualmente no tienes artículos en tu Carrito</h3>
					<Button path='/' content='Volver a comprar' className='button__red' />
				</div>
			) : (
				<div>
					<CartList products={products} />
				</div>
			)}
		</div>
	);
};
