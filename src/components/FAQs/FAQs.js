import './FAQs.scss';

export const FAQs = () => {
	return (
		<div className='FAQs container'>
			<h2>&iquest;Cómo hacer tu pedido?</h2>
			<div className='row'>
				<div className='FAQs__item col-12 col-md-6'>
					<div className=' container'>
						<div className='FAQs__item__1 FAQs__img'>
							<div className='FAQs__item__txt FAQs__item__txt--1 col-8'>
								<h3 className='FAQs__item__h3'>Elegí tu plato favorito</h3>
								<p className='FAQs__item__p'>Entra a nuestra carta y selecciona el plato que prefieras, La carta incluye platos tradicionales en los que se destacan la elaboración de pastas, postres y una amplia variedad de cortes de carne.</p>
							</div>
						</div>

						<div className='FAQs__item__2 FAQs__img'>
							<div className='FAQs__item__txt FAQs__item__txt--2'>
								<h3 className='FAQs__item__h3'>Revisa tus platos añadidos</h3>
								<p className='FAQs__item__p'>Dirigite al carrito de pedidos para poder controlar tu pedido final antes de ingresar tus datos.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='FAQs__item col-12 col-md-6'>
					<div className=' container'>
						<div className='FAQs__item__3 FAQs__img'>
							<div className='FAQs__item__txt FAQs__item__txt--3'>
								<h3 className='FAQs__item__h3'>Completa tu pedido</h3>
								<p className='FAQs__item__p'>Ingresa los datos solicitados para poder procesar tu pedido, elegi tu envio y forma de pago.</p>
							</div>
						</div>

						<div className='FAQs__item__4 FAQs__img'>
							<div className='FAQs__item__txt FAQs__item__txt--4'>
								<h3 className='FAQs__item__h3'>Listo! Tu comida esta en camino</h3>
								<p className='FAQs__item__p'>Una vez completo el paso anterior solo queda esperar unos pocos minutos para disfrutar lo mejor de la comida casera con La Mamma Pedidos.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
