import React , {useRef , useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [invalidAmount,setInvalidAmount] = useState(false);
  const amountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const amount = +enteredAmount;
    if(enteredAmount.trim().length===0 || amount < 1 || amount > 5){
      setInvalidAmount(true);
      return;
    }
    props.onAddToCart(amount);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {invalidAmount && <p>Please enter Valid Amount (1-5).</p>}
    </form>
  );
}
