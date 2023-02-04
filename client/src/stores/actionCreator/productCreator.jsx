import { FETCH_DATA_MERCH, FETCH_DATA_MERCH_DETAIL } from "../actionType";

export const actionSetProduct = (payload) => {
  return {
    type: FETCH_DATA_MERCH,
    payload,
  };
};

export const fetchDataProduct = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/products", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(actionSetProduct(data));
      });
  };
};

export const actionSetProductDetail = (payload) => {
  return {
    type: FETCH_DATA_MERCH_DETAIL,
    payload,
  };
};

export const fetchDetailProduct = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(actionSetProductDetail(data));
      });
  };
};
