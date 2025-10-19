import styles from "./Item.module.css";

const Items = ({ fooditems, brought, handleBuyButton }) => {

    return (
        <li className={ `${styles["items-info"]} list-group-item ${brought && "active"}`}>
            <span className={styles["items-span"]}> {fooditems} </span>
            <button className={`${styles["button"]} btn btn-info`}
            onClick={ handleBuyButton }
            > 
            Buy </button>
        </li>
    );
};

export default Items;
