import React from "react";
import { image } from "../../image/image";
import { useRemoveToFavoritesMutation } from "../../api/favorites";

const DeleteProductFavorites = ({ id }) => {
  const [rempvetofavorites] = useRemoveToFavoritesMutation();
  const deleteProduct = () => {
    rempvetofavorites(id);
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
        onClick={() => deleteProduct()}
        src={image.favorites_true}
        alt=""
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  );
};

export default DeleteProductFavorites;
