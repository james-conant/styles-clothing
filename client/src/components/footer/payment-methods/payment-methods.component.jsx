import React from "react";
import "./payment-methods.styles.scss";

import { ReactComponent as Amex } from "../../../assets/payment-methods/amex-card.svg";
import { ReactComponent as Apple } from "../../../assets/payment-methods/applepay-card.svg";
import { ReactComponent as MasterCard } from "../../../assets/payment-methods/mastercard-card.svg";
import { ReactComponent as PayPal } from "../../../assets/payment-methods/paypal-card.svg";
import { ReactComponent as Visa } from "../../../assets/payment-methods/visa-card.svg";

const PaymentMethods = () => {
  return (
    <div className="payments">
      <Amex />
      <Apple />
      <MasterCard />
      <PayPal />
      <Visa />
    </div>
  );
};

export default PaymentMethods;
