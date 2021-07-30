import { useState } from 'react';
import useAppContext from '../../context/useAppContext';
import { Login, CheckOutCart, FormSuccess } from '../../components/index';

import './CheckOutContainer.scss';

export const CheckOutContainer = () => {
	const { products, totalPrice } = useAppContext();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const submitForm = () => {
		setIsSubmitted(true);
	};

	return (
		<div id='CheckOut' className='checkout container'>
			<div className='checkout__container'>
				{!isSubmitted ? (
					<>
						<div className='checkout__sections checkout__sections--detalle '>
							<h1 className='checkout__titulosPpales'>Detalle de compra</h1>
							{/* Detalle de compra- products q recibo de context */}
							<div>
								{products.map((product) => (
									<CheckOutCart key={product.id} product={product} />
								))}
							</div>
							{/* Button comprar que genere mi Order, con un on click db.firestore.add() */}
							<div className='cart__items'>
								<h5 className='cart__items__title'>
									Total <span className='cart__buyTotal__title--bold'>${totalPrice()}</span>
								</h5>
							</div>
						</div>
						<Login submitForm={submitForm} />
					</>
				) : (
					<FormSuccess />
				)}
			</div>
		</div>
	);
};
