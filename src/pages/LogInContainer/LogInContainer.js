import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import useAppContext from '../../context/useAppContext';
import { NavLink } from 'react-router-dom';
import { Button } from './../../components/index';
import './LoginContainer.scss';

export const LogInContainer = () => {
	const { uiConfig, isSignedIn } = useAppContext();

	if (!isSignedIn) {
		return (
			<div className='login container'>
				<p>Porfavor inicia sesión:</p>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</div>
		);
	}
	return (
		<div id='Login' className='login container'>
			<h1>Tu cuenta</h1>
			<p>
				Bienvenido {''}
				<span className='login__name'>{firebase.auth().currentUser.displayName}</span> ! Acabas de iniciar sesión en LA MAMMA!
				<NavLink to='/cart/'> Ir a mi carrito</NavLink>
			</p>
			<Button path='/' content='Comprar' className='button__red login__btn' />
			<NavLink to='/login' onClick={() => firebase.auth().signOut()}>
				Cerrar sesión
			</NavLink>
		</div>
	);
};
