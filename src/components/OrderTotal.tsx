import { useMemo } from 'react';
import type { IOrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalProps = {
	order: IOrderItem[];
	tip: number;
	placeOrder: () => void;
};

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
	const subtotalAmount = useMemo(
		() => order.reduce((total, item) => total + item.quantity * item.price, 0),
		[order]
	);
	const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);
	const totalAmount = useMemo(
		() => subtotalAmount + tipAmount,
		[tipAmount, subtotalAmount]
	);

	return (
		<>
			<div className='space-y-3'>
				<h2 className='font-black text-2xl'>Totales y Propina</h2>

				<p>
					Subtotal a pagar:
					<span className='font-bold'>{formatCurrency(subtotalAmount)}</span>
				</p>

				<p>
					Propina:
					<span className='font-bold'>{formatCurrency(tipAmount)}</span>
				</p>

				<p>
					Total a pagar:
					<span className='font-bold'>{formatCurrency(totalAmount)}</span>
				</p>
			</div>

			<button
				className='uppercase text-white font-bold bg-black disabled:opacity-10 w-full p-3 mt-10'
				disabled={totalAmount === 0}
				onClick={placeOrder}
			>
				Guardar Orden
			</button>
		</>
	);
}
