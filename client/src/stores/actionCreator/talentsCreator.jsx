import { FETCH_DATA_BRANCHES, FETCH_DATA_FAVORITES_USER, FETCH_DATA_TALENTS } from "../actionType";

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

export function fetchFavorites() {
  return async(dispatch) => {
    try{
      const data = await fetch('http://localhost:3000/favorites/', {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        }
      })
      const convert = await data.json()

      dispatch({
        type: FETCH_DATA_FAVORITES_USER,
        payload: convert
      })
    } catch(err) {
      console.log(err)
    }
  }
}

export function deleteFavorite(id) {
  return async(dispatch) => {
    try{
      const data = await fetch(`http://localhost:3000/favorites/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        }
      })

      const convert = await data.json()
      dispatch(fetchFavorites())
      if(!data.ok) {
        throw convert
      }

      return convert.message
    } catch(err) {
      console.log(err)
    }
  }
}
