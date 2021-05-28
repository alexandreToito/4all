import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";

const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
  },
  {
    path: "/checkout",
    name: "Checkout",
    exact: false,
    component: Cart,
  },
];

export default routes;
