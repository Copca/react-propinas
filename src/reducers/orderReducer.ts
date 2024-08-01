import type { IMenuItem, IOrderItem } from '../types/index';

/**
 * Acciones
 */
export type OrderActions =
	| { type: 'add-item'; payload: { item: IMenuItem } }
	| { type: 'remove-item'; payload: { id: IMenuItem['id'] } }
	| { type: 'place-order' }
	| { type: 'add-tip'; payload: { value: number } };

/**
 * State
 */
export type OrderState = {
	order: IOrderItem[];
	tip: number;
};

export const initialState: OrderState = {
	order: [],
	tip: 0
};

/**
 * Reducer
 */
export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {
	if (action.type === 'add-item') {
		const itemExist = state.order.find(
			(orderItem) => orderItem.id === action.payload.item.id
		); // true/false

		let order: IOrderItem[] = [];

		if (itemExist) {
			// Editar Orden
			order = state.order.map((orderItem) =>
				orderItem.id === action.payload.item.id
					? { ...orderItem, quantity: orderItem.quantity + 1 }
					: orderItem
			);
		} else {
			// Nueva Orden
			const newItem: IOrderItem = { ...action.payload.item, quantity: 1 };

			order = [...state.order, newItem];
		}

		return {
			...state,
			order
		};
	}

	if (action.type === 'remove-item') {
		return {
			...state,
			order: state.order.filter((stateItem) => stateItem.id !== action.payload.id)
		};
	}

	if (action.type === 'place-order') {
		return {
			...state,
			order: [],
			tip: 0
		};
	}

	if (action.type === 'add-tip') {
		return {
			...state,
			tip: action.payload.value
		};
	}

	return state;
};
