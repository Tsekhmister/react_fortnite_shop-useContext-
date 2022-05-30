import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from "../config";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";

export const Shop = () => {
  const { setGoods, loading, order, isCartShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.achievements);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isCartShow && <CartList />}
      {alertName && <Alert />}
    </main>
  );
};
