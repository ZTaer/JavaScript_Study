import CartActionsType from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionsType.TOGGLE_CART_HIDDEN,
});

export const addCartItem = items => ({
    type: CartActionsType.ADD_CART_ITEMS,
    payload: items,
});