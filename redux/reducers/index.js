/*
 * Copyright (c) 2023 Hoàng Trung Công <https://github.com/trungcong1999>
 *
 * Created Date: Tuesday, April 11th 2023, 11:05:59 pm
 * Author: Hoàng Trung Công
 *
 */

import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
  cartReducer: cartReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;

