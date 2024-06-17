import React from "react";
import { Navigatepage } from "../../functtion/Navigatepage";
import { routes } from "../../routes/routes";

const EmptyBasket = () => {
  const goToHome = Navigatepage(routes.main);
  return (
    <div className="contenier_basket">
      <h2>Корзина</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/9018/9018927.png"
          alt=""
          style={{ paddingBottom: "20px", width: " 100px", height: "100px" }}
        />
        <h2 style={{ paddingBottom: "20px" }}>Ваша корзина пуста.</h2>
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          Перейдите на главную страницу и выберите <br /> продукты
        </div>
        <button
          onClick={goToHome}
          style={{
            cursor: "pointer",
            border: "none",
            padding: "15px 80px",
            color: "white",
            background: "rgb(0, 88, 160)",
            borderRadius: "30px",
          }}
        >
          Вернуться к покупкам
        </button>
      </div>
    </div>
  );
};

export default EmptyBasket;
