import { FETCH_DATA_BRANCHES, FETCH_DATA_TALENTS } from "../actionType";

export const actionSetTalents = (payload) => {
  return {
    type: FETCH_DATA_TALENTS,
    payload,
  };
};

export const fetchDataTalents = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/idols", {
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
        dispatch(actionSetTalents(data));
      });
  };
};

export const actionSetBranches = (payload) => {
  return {
    type: FETCH_DATA_BRANCHES,
    payload,
  };
};

export const fetchDataBranches = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/idols/branches", {
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
        dispatch(actionSetBranches(data));
      });
  };
};

export const addFavorite = (IdolId) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/favorites/${IdolId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("notOk");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
};
