import axios from "axios";
import * as apiroutes from "../apiroutes";

class UserService {
  registerUser = async (userData) => {
    try {
      const response = await axios.post(apiroutes.USER_REGISTER, {
        name: userData.name,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        password: userData.password,
        // role: "USER",
      });

      console.log("Registration successful:", response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      return { success: false, error: error.response?.data || error.message };
    }
  };

  signInUser = async (userData) => {
    try {
      const response = await axios.post(apiroutes.USER_LOGIN, {
        email: userData.email,
        password: userData.password,
      });

      const token = response.data.token; // Assuming token is returned in response
      localStorage.setItem("accessToken", token); // Save token for future use
      console.log("Login successful:", response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error(
        "Error logging in user:",
        error.response?.data || error.message
      );
      return { success: false, error: error.response?.data || error.message };
    }
  };

  getAllProduct = async () => {
    try {
      const response = await axios.get(apiroutes.GET_ALL_PRODUCTS);

      console.log("GetProduct successful:", response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error GetProduct:", error.response?.data || error.message);
      return { success: false, error: error.response?.data || error.message };
    }
  };

  getProductById = async (id) => {
    try {
      // Pass the `id` as a query parameter using `params`
      const response = await axios.get(apiroutes.GET_SINGLE_PRODUCT, {
        params: { id },
      });

      console.log("Get single Product successful:", response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error(
        "Error Get single Product:",
        error.response?.data || error.message
      );
      return { success: false, error: error.response?.data || error.message };
    }
  };

  getUserById = async (accessToken) => {
    try {
      const response = await axios.get(apiroutes.GET_LOGGED_IN_INFO, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Get single User successful:", response.data);
      return { success: true, data: response.data.user }; // Ensure `response.data.user` is the correct path
    } catch (error) {
      console.error(
        "Error fetching user:",
        error.response?.data || error.message
      );
      return { success: false, error: error.response?.data || error.message };
    }
  };

  updateProductById = async () => {
    try {
      const response = await axios.put(apiroutes.UPDATE_PRODUCT);

      console.log("product review is successful:", response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error review:", error.response?.data || error.message);
      return { success: false, error: error.response?.data || error.message };
    }
  };
}

export default new UserService();
