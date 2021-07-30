import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './context/useAppContext';
import { ScrollToTop, WhatsApp, Footer, NavBar, Error404 } from './components/index';
import { Home, CartContainer, CheckOutContainer, LogInContainer, ItemDetailContainer } from './pages/index';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<AppProvider>
				<Router>
					<ScrollToTop />
					<NavBar />

					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						{/* Login */}
						<Route exact path='/login/'>
							<LogInContainer />
						</Route>
						{/* Item Detail */}
						<Route exact path='/:title/:id'>
							<ItemDetailContainer />
						</Route>
						{/* Category Items */}
						{/* <Route exact path="/carta/">
              <CategoriesContainer />
            </Route> */}
						{/* <Route exact path="/carta/:categoryId">
              <CategoriesDetailContainer />
            </Route> */}
						{/* Cart */}
						<Route exact path='/cart/'>
							<CartContainer />
						</Route>
						{/* CheckOut */}
						<Route exact path='/checkout/'>
							<CheckOutContainer />
						</Route>
						{/* <Route exact path="/order/">
              <FormuSucess />
           /*  </Route> */}
						<Route path='*' component={Error404} />
					</Switch>

					<WhatsApp />
					<Footer />
				</Router>
			</AppProvider>
		</div>
	);
}

export default App;
