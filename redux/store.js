/*
 * Copyright (c) 2023 Hoàng Trung Công <https://github.com/trungcong1999>
 *
 * Created Date: Tuesday, April 11th 2023, 11:06:19 pm
 * Author: Hoàng Trung Công
 *
 */

import { legacy_createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  const store = legacy_createStore(reducer, initialState);
  return store;
}
