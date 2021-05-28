import React, { createContext, useState, useEffect } from "react";

import { products } from "../mock.js";

export const ParseContext = createContext();

export default function ParseProvider({ children }) {
  const [selection, setSelection] = useState([]);
  const [data, setdata] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [start, setStart] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let data = products;
    data.forEach(p => {
      p.quantity = 0;
      p.totalValue = 0;
    });
    setdata(data);
  }, []);

  useEffect(() => {
    if (start && selection.length > 0) {
      const countDownFrom = new Date().getTime() + 900000;
      let interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownFrom - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance <= 0) {
          clearInterval(interval);
          clear();
        } else {
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);

      setIntervalId(interval);
    }
  }, [selection, start]);

  function stopTimer() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  function clear() {
    let data = products;
    data.forEach(p => {
      p.quantity = 0;
      p.totalValue = 0;
    });

    setdata(data);
    setSelection([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  }

  function selectItem(productId) {
    const index = data.map(p => p.id).indexOf(productId);
    let update = data;
    let counter = 0;
    let totalPrice = 0;

    update[index].quantity = update[index].quantity + 1;
    update[index].totalValue = update[index].quantity * +update[index].price;
    const selected = update.filter(p => p.quantity > 0);
    setSelection(selected);

    selected.forEach(p => (counter += p.quantity));
    setTotalQuantity(counter);

    selected.forEach(p => (totalPrice += p.totalValue));
    setTotalPrice(totalPrice);
  }

  function removeItem(productId) {
    const index = data.map(p => p.id).indexOf(productId);
    let update = data;
    let counter = 0;
    let totalPrice = 0;

    update[index].quantity = update[index].quantity - 1;
    update[index].totalValue = update[index].quantity * +update[index].price;
    const selected = update.filter(p => p.quantity > 0);
    setSelection(selected);

    selected.forEach(p => (counter += p.quantity));
    setTotalQuantity(counter);

    selected.forEach(p => (totalPrice += p.totalValue));
    setTotalPrice(totalPrice);
  }

  return (
    <ParseContext.Provider
      value={{
        selection,
        setSelection,
        selectItem,
        totalQuantity,
        removeItem,
        totalPrice,
        clear,
        minutes,
        seconds,
        setStart,
        stopTimer,
      }}
    >
      {children}
    </ParseContext.Provider>
  );
}
