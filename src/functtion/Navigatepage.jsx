import React from "react";
import { useNavigate } from "react-router-dom";

export const Navigatepage = (page) => {
  const navigate = useNavigate();
  return () => navigate(page);
};
