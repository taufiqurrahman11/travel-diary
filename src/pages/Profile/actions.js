import { GET_USER_ID, GET_USER_SUCCESS } from "./constants";

export const getUserById = (userId) => ({
    type: GET_USER_ID,
    payload: userId,
})

export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
  });