export const USER_ENDPOINT = "http://213.35.109.133:8089/";
export const PRODUCT_ENDPOINT = "http://213.35.109.133:8080/";
export const ORDER_ENDPOINT = "http://213.35.109.133:8091/";
export const INVENTORY_ENDPOINT = "http://213.35.109.133:8082/";

//user management endpoints
export const USER_LOGIN = USER_ENDPOINT + "auth/login";
export const USER_REGISTER = USER_ENDPOINT + "auth/register";
export const GET_SINGLE_USER = USER_ENDPOINT + "auth/retriveByUserId";
export const GET_All_USERS = USER_ENDPOINT + "users/all";

export const GET_LOGGED_IN_INFO =
  USER_ENDPOINT + "users/get-logged-in-profile-info";
export const GET_SINGLE_USER_BY_ID = USER_ENDPOINT + "users/get-by-id/:id";
export const GET_ALL_USERS = USER_ENDPOINT + "users/all";
export const DELETE_SINGLE_USER = USER_ENDPOINT + "users/delete/:id";

//product endpoints
export const GET_ALL_PRODUCTS = PRODUCT_ENDPOINT + "api/product/retrieveAll";
export const GET_SINGLE_PRODUCT = PRODUCT_ENDPOINT + "api/product/getById/";
export const ADD_NEW_PRODUCT = PRODUCT_ENDPOINT + "api/product/addProduct/";
export const UPDATE_PRODUCT = PRODUCT_ENDPOINT + "api/product/updateProduct/";
export const DELETE_PRODUCT = PRODUCT_ENDPOINT + "api/product/deleteProduct/";

//order endpoints
export const GET_ALL_ORDERS = ORDER_ENDPOINT + "api/order/getOrders";
