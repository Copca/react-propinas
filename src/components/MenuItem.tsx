import type { IMenuItem } from '../types';

type MenuItemProps = {
	item: IMenuItem;
	addItem: (item: IMenuItem) => void;
};

// Snippets "rfc"
export default function MenuItem({ item, addItem }: MenuItemProps) {
	return (
		<button
			className='flex justify-between border border-teal-400 hover:bg-teal-500 w-full p-3'
			onClick={() => addItem(item)}
		>
			<p>{item.name}</p>
			<p className='font-black'>${item.price} </p>
		</button>
	);
}
