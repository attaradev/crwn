export const Types = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

export const setCurrentUser = user => ({
  type: Types.SET_CURRENT_USER,
  payload: user
});