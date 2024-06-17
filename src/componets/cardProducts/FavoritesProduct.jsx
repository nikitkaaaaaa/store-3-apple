import React, { useState } from "react";
import { image } from "../../image/image";
import { useAddFavoritesMutation } from "../../api/favorites";

const FavoritesProduct = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addInFavorites] = useAddFavoritesMutation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = () => {
    if (!isFavorite) {
      addInFavorites({
        name: item.name,
        price: item.price,
        mainImage: item.mainImage,
        rating: item.rating,
      });
      setIsFavorite(true);
    }
  };

  const getImageSource = () => {
    if (isFavorite) {
      return image.favorites_true;
    } else if (isHovered) {
      return image.favorites_hover;
    } else {
      return image.favorites;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        padding: "0px 20px",
      }}
    >
      <img
        src={getImageSource()}
        alt=""
        style={{ width: "25px", height: "25px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default FavoritesProduct;
