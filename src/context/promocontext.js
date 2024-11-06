import React, { createContext, useState } from "react";

export const PromotionalContext = createContext();

export const PromotionalProvider = ({ children }) => {
  const [promoMessage, setPromoMessage] = useState(
    "Casetify Covers offer for Christmas - OFF 50%!"
  );
  const [promoLink, setPromoLink] = useState("#");

  return (
    <PromotionalContext.Provider
      value={{ promoMessage, setPromoMessage, promoLink, setPromoLink }}
    >
      {children}
    </PromotionalContext.Provider>
  );
};
