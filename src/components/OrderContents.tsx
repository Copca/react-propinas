import type { IMenuItem, IOrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderContentsProps = {
	order: IOrderItem[];
	removeItem: (id: IMenuItem['id']) => void;
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
	return (
		<div>
			<h2 className='font-black text-4xl'>Consumo</h2>

			<div className='space-y-3 mt-10'>
				{order.map((item) => (
					<div
						key={item.id}
						className='flex justify-between items-center border-t border-gray-200 last-of-type:border-b py-5'
					>
						<div>
							<p className='text-lg'>
								{item.name} - {formatCurrency(item.price)}
							</p>

							<p className='font-black'>
								Cantidad: {item.quantity} -{' '}
								{formatCurrency(item.price * item.quantity)}
							</p>
						</div>

						<button
							className='text-white bg-red-600 rounded-full h-8 w-8'
							onClick={() => removeItem(item.id)}
						>
							X
						</button>
					</div>
				))}
			</div>
		</div>
	);
}