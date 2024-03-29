import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/cart-contest';

export default function MealItem(props) {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const onAddToCartHandler = amount => {
        console.log(props.name+" "+props.id+" "+amount+" "+props.price);
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
        console.log(cartCtx.items);
    }

    return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={onAddToCartHandler}/>
        </div>
    </li>
  )
}
