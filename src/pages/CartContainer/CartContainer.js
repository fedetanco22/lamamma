// import { useState } from "react";
import { Button, CartList, CartResume } from './../../components/index';
import useAppContext from '../../context/useAppContext';

import './CartContainer.scss';

export const CartContainer = () => {
	const { products } = useAppContext();

	return (
		<div id='CartContainer' className='cartContainer container'>
			{products.length === 0 ? (
				<div className='cartContainer__vacio'>
					<h1 className='cartContainer__title'>Carrito</h1>
					<h3 className='cartContainer__vacio__titulo'>Actualmente no tienes artículos en tu Carrito</h3>
					<Button path='/' content='Volver a comprar' className='button__red' />
				</div>
			) : (
				<div className='row'>
					<h1 className='cartContainer__title'>Carrito</h1>
					<CartList products={products} />
					<CartResume products={products} />
				</div>
			)}
		</div>
	);
};
