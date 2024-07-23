import { menuItems } from './data/db';

import useOrder from './hooks/useOrder';
import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from './components/TipPercentageForm';

function App() {
	const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

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
							<MenuItem key={item.id} item={item} addItem={addItem} />
						))}
					</div>
				</div>

				<div className='border border-dashed border-slate-300 rounded-lg p-5 space-y-10'>
					{order.length ? (
						<>
							<OrderContents order={order} removeItem={removeItem} />

							<TipPercentageForm tip={tip} setTip={setTip} />

							<OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
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
