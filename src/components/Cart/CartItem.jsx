import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const nf = Intl.NumberFormat("id", {
    currency: "IDR",
    style: "currency",
    maximumFractionDigits: 0,
  });

  const price = `${nf.format(props.price)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
