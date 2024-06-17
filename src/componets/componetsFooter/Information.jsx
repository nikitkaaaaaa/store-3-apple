import React from "react";

const Information = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="text_footer_main">Информация</div>
      <div className="text_footer">О нас</div>
      <div className="text_footer">Как заказать?</div>
      <div className="text_footer">Оплата и доставка</div>
      <div className="text_footer">Кредит</div>
      <div className="text_footer">Гарантия</div>
      <div className="text_footer">Политика конфиденциальности</div>
      <div className="text_footer">Наши вакансии</div>
    </div>
  );
};

export default Information;
