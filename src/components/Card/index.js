import React, { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Card.module.scss';
import { AppContext } from '../../context';

const Card = ({
  onAdd,
  onFavourite,
  id,
  name,
  price,
  imageUrl,
  favourited = false,
  added = false,
  loading = false,
}) => {
  const { isAddedItems } = useContext(AppContext);

  const [isFavourite, setIsFavourite] = useState(favourited);
  const itemObj = { id, parentId: id, name, imageUrl, price };

  const onClickAdd = () => {
    onAdd(itemObj);
  };

  const onClickFavourite = () => {
    onFavourite(itemObj);
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={classes.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="186" rx="5" ry="5" width="81" height="15" />
          <rect x="124" y="234" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="0" y="162" rx="5" ry="5" width="155" height="15" />
        </ContentLoader>
      ) : (
        <>
          {onFavourite && (
            <div className={classes.favourite} onClick={onClickFavourite}>
              <img
                src={isFavourite ? 'assets/btn-heart-active.svg' : 'assets/btn-heart-regular.svg'}
                alt="Add to favourite"
              />
            </div>
          )}
          <img width="100%" height={135} src={imageUrl} alt="sneakers" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Cost: </span>
              <b>{price}</b>
            </div>
            {onAdd && (
              <img
                onClick={onClickAdd}
                className={classes.plus}
                src={isAddedItems(id) ? 'assets/btn-checked.svg' : 'assets/btn-add.svg'}
                alt="add"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
