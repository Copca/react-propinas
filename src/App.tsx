import { useReducer } from 'react';
import { menuItems } from './data/db';

import { initialState, orderReducer } from './reducers/orderReducer';

import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from './components/TipPercentageForm';

function App() {
	const [state, dispatch] = useReducer(orderReducer, initialState);

	return (
		<>
			<header className='bg-teal-400 py-5'>
				<h1 className='text-center text-4xl font-black'>
					Calculuadora de Propinas y Consumos
				</h1>
			</header>

			<main className='container grid md:grid-cols-2 mx-auto my-20'>
				<div className='p-5'>
					<h2 className='text-4xl font-black mb-10'>Menú</h2>

					<div className='space-y-3'>
						{menuItems.map((item) => (
							<MenuItem key={item.id} item={item} dispatch={dispatch} />
						))}
					</div>
				</div>

				<div className='border border-dashed border-slate-300 rounded-lg p-5 space-y-10'>
					{state.order.length ? (
						<>
							<OrderContents order={state.order} dispatch={dispatch} />

							<TipPercentageForm tip={state.tip} dispatch={dispatch} />

							<OrderTotal order={state.order} tip={state.tip} dispatch={dispatch} />
						</>
					) : (
						<p className='text-center'>La orden esta vacia</p>
					)}
				</div>
			</main>
		</>
	);
}

export default App;
