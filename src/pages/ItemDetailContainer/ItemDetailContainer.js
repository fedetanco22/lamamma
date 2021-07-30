import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail, Spinner } from '../../components/index';

import getProductById from '../../backend/item';

export const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState({});

	const { id } = useParams();

	useEffect(() => {
		setTimeout(() => {
			getProductById(id).then((result) => {
				setProduct(result);
				setLoading(false); // aca recibimos los resultados por eso sacamos el loading
			});
		}, 1000);
	}, [id]);

	return (
		<div id='Item' className='detailContainer'>
			{loading ? (
				<Spinner />
			) : (
				<div>
					<ItemDetail product={product} />
				</div>
			)}
		</div>
	);
};
