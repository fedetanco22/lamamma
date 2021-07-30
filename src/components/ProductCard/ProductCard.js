import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import useAppContext from '../../context/useAppContext';
import './ProductCard.scss';

export const ProductCard = ({ product }) => {
	const [quantity] = useState(1);
	const { addProduct } = useAppContext();
	const { categoryId, id, image, price, title } = product;

	const addItem = () => {
		addProduct(product, quantity);
		console.log('object', product, quantity);
	};
	return (
		<div className=' col-10 col-sm-6 col-md-4 col-lg-3'>
			<div className='ProductCard'>
				<NavLink to={`/${title}/${id}`} className='ProductCard__link'>
					<div className='ProductCard__image'>
						<img src={image} alt={`${title}`} />
					</div>
					<div className='ProductCard__text'>
						<h3 className='ProductCard__text__title'>{title}</h3>
						<p className='ProductCard__text__price'>${price}</p>
					</div>
				</NavLink>

				<div className='ProductCard__text__icon'>
					<BiShoppingBag onClick={addItem} />
				</div>
			</div>
		</div>
	);
};
