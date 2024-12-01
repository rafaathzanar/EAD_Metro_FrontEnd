import axios from "axios";
import * as apiroutes from "../apiroutes";

class OrderService {
  getAllOrders = async () => {
    try {
      const response = await axios.get(apiroutes.GET_ALL_ORDERS);

      console.log("GetProduct successful:", response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error GetProduct:", error.response?.data || error.message);
      return { success: false, error: error.response?.data || error.message };
    }
  };

  async createOrder(orderData) {
    try {
      const response = await axios.post(apiroutes.ADD_NEW_ORDER, orderData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getOrders() {
    try {
      const response = await axios.get(apiroutes.GET_ALL_ORDERS);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getOrder(orderId) {
    try {
      const response = await axios.get(apiroutes.GET_SINGLE_PRODUCT(orderId));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async updateOrder(orderId, orderData) {
    try {
      const response = await axios.put(
        apiroutes.UPDATE_PRODUCT(orderId),
        orderData
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteOrder(orderId) {
    try {
      const response = await axios.delete(apiroutes.DELETE_PRODUCT(orderId));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getOrdersByUser(userId) {
    try {
      const response = await axios.get(apiroutes.GET_ORDERS_BY_USER(userId));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserInfoById(userId) {
    try {
      const response = await axios.get(apiroutes.GET_SINGLE_USER(userId));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getAllProducts() {
    try {
      const response = await axios.get(apiroutes.GET_ALL_PRODUCTS);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(userId) {
    try {
      //   const token = localStorage.getItem("accessToken");
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcmthbWJpc3J1bGVhZEBnbWFpbC5jb20iLCJpYXQiOjE3MzMwMzAzNjcsImV4cCI6MTczMzA0MDQ0N30.dL85jS0AZ7TqZICdxMSBy3mTNov-_NdFy2CvZfJ1_nk";

      console.log("🚀 ~ OrderService ~ getUserById ~ token:", token);
      const response = await axios.get(
        apiroutes.GET_SINGLE_USER_BY_ID(userId),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("🚀 ~ OrderService ~ getUserById ~ response:", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  // async getOrdersByProduct(productId) {
  //     try {
  //     const response = await axios.get(apiroutes.GET_ORDERS_BY_PRODUCT(productId));
  //     return response.data;
  //     } catch (error) {
  //     console.error(error);
  //     }
  // }

  // async getOrdersByStatus(status) {
  //     try {
  //     const response = await axios.get(apiroutes.GET_ORDERS_BY_STATUS(status));
  //     return response.data;
  //     } catch (error) {
  //     console.error(error);
  //     }
  // }
}

export default new OrderService();
