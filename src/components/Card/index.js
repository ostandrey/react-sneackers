import React, {useState} from 'react';
import classes from './Card.module.scss';


const Card = ({onAdd, onClickFavourite, name, price, imageUrl}) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickAdd = () => {
        onAdd({name, price, imageUrl});
        setIsAdded(!isAdded)
    }

    return (
        <div className={classes.card}>
            <div className={classes.favourite} onClick={onClickFavourite}>
                <img src="/assets/btn-heart-regular.svg" alt="Add to favourite"/>
            </div>
            <img height={112} src={imageUrl} alt="sneaker-1"/>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Cost: </span>
                    <b>{price}</b>
                </div>
                <img onClick={onClickAdd} className={classes.plus} src={isAdded ? "/assets/btn-checked.svg" : "/assets/btn-add.svg"} alt="add"/>
            </div>
        </div>
    );
};

export default Card;