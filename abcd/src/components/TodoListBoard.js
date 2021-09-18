import React, { useState } from 'react';
import './TodoListBoard.scss';

function TodoListBoard(){
	
	let [listItems, setListItems] = useState([]);	
	let [listAmount, setListAmount] = useState(0);

	function addList(){
		setListItems([...listItems, {id:listAmount, description:'계획 '+listAmount + "번"}]);
		setListAmount(listAmount+1);
	}
	
	function deleteList(key){
		let arr = [...listItems];
		let i = arr.findIndex((item)=>{return item.id == key});
		arr.splice(i,1);
		setListItems(arr);
	}
	
	return(
		<div className={'todolist-board'}>
			<ul className={'todolist'}>
				<div className={'add-list-button'} style={{fontSize:'30px'}} onClick={addList}>+</div>
				{
					listItems.map(({id, description})=>{
						return (
							<li className={'todoline'}>
								<input type="checkbox" id={id} />
								<label className={'my-checkbox'} htmlFor={id}><span className={'my-checkmark'} /></label>
								<span className={'todoline-desecription'}>{description}</span>
								<span className={'delete-todoline'} onClick={()=>{deleteList(id)}}>-</span>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default TodoListBoard;