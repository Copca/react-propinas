import { Dispatch } from 'react';

import type { IMenuItem } from '../types';
import type { OrderActions } from '../reducers/orderReducer';

type MenuItemProps = {
	item: IMenuItem;
	dispatch: Dispatch<OrderActions>;
};

// Snippets "rfc"
export default function MenuItem({ item, dispatch }: MenuItemProps) {
	return (
		<button
			className='flex justify-between border border-teal-400 hover:bg-teal-500 w-full p-3'
			onClick={() => dispatch({ type: 'add-item', payload: { item } })}
		>
			<p>{item.name}</p>
			<p className='font-black'>${item.price} </p>
		</button>
	);
}
