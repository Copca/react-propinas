import { useState } from 'react';

import type { IMenuItem, IOrderItem } from '../types';

export default function useOrder() {
	const [order, setOrder] = useState<IOrderItem[]>([]);
	const [tip, setTip] = useState(0);

	// Agregamos un articulo a la Orden[]
	const addItem = (item: IMenuItem) => {
		const itemExist = order.find((orderItem) => orderItem.id === item.id); // true/false

		if (itemExist) {
			const updatedOrder = order.map((orderItem) =>
				orderItem.id === item.id
					? { ...orderItem, quantity: orderItem.quantity + 1 }
					: orderItem
			);

			setOrder(updatedOrder);
		} else {
			const newItem = { ...item, quantity: 1 };
			setOrder([...order, newItem]);
		}
	};

	// Quitamos un elemento a la Orden[]
	const removeItem = (id: IMenuItem['id']) => {
		setOrder(order.filter((item) => item.id !== id));
	};

	// Registrar orden
	const placeOrder = () => {
		setOrder([]);
		setTip(0);
	};

	return {
		order,
		tip,
		setTip,
		addItem,
		removeItem,
		placeOrder
	};
}
