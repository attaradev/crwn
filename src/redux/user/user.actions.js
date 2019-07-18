export const UserTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

export const setCurrentUser = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
});