export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
  };
};


