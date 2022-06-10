import { createContext } from 'react';
const CartContext = createContext({
  items: {},
  setItems: (props) => {},
});
export default CartContext;
