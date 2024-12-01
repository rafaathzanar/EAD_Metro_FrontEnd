import React, { useEffect, useState } from "react";
import { format } from "date-fns";
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import { Button } from "../components/ui/button";
import { HashLoader } from "react-spinners";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "../components/ui/popover";
// import { Calendar } from "../components/ui/calendar";
import OrderService from "../services/OrderService";

export default function Sells() {
  // const [date, setDate] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalQuantity: 0,
  });

  useEffect(() => {
    const fetchOrdersWithUsers = async () => {
      try {
        setLoading(true);

        // Fetch orders
        const ordersResponse = await OrderService.getAllOrders();

        const ordersData = ordersResponse.data.body || [];

        // Fetch all products
        const productsResponse = await OrderService.getAllProducts();

        const productsData = Array.isArray(productsResponse)
          ? productsResponse
          : [];
        if (productsData.length === 0) {
          console.warn("No products found");
        }

        const enhancedOrders = await Promise.all(
          ordersData.map(async (order) => {
            try {
              // Fetch user data
              const userResponse = await OrderService.getUserById(order.userId);
              const userName = userResponse?.user?.name || "Unknown";

              // // Find product by SKU code (trim spaces for accurate matching)
              // const product = productsData.find(
              //   (prod) => prod.skuCode.trim() === order.skuCode.trim()
              // );

              // console.log("🚀 ~ ordersData.map ~ productsData:", productsData);
              // console.log("🚀 ~ ordersData.map ~ product:", product);

              // const productName = product ? product.name : "Unknown Product";

              // Find product by SKU code (normalize for matching)
              const product = productsData.find((prod) => {
                const normalizedProdSku = prod.skuCode.trim().toLowerCase();
                const normalizedOrderSku = order.skuCode.trim().toLowerCase();

                // Debugging logs
                console.log("Matching SKU:", {
                  normalizedProdSku,
                  normalizedOrderSku,
                });

                return normalizedProdSku === normalizedOrderSku;
              });

              console.log("🚀 ~ ordersData.map ~ product:", product);

              const productName = product ? product.name : "Unknown Product";

              // Format the date safely
              const createdAtFormatted = order.createdAt
                ? format(new Date(order.createdAt), "PPP") // e.g., Jan 1, 2024
                : "Unknown Date";

              // Return the enhanced order object
              return {
                ...order,
                userName,
                productName,
                createdAtFormatted,
              };
            } catch (error) {
              console.error("Error enhancing order:", error);

              // Handle errors gracefully by returning an order with fallback data
              return {
                ...order,
                userName: "Unknown",
                productName: "Unknown Product",
                createdAtFormatted: "Unknown Date",
              };
            }
          })
        );

        // Fetch user data and match product SKU codes
        // const enhancedOrders = await Promise.all(
        //   ordersData.map(async (order) => {
        //     try {
        //       // Fetch user data
        //       const userResponse = await OrderService.getUserById(order.userId);
        //       const userName = userResponse?.user?.name || "Unknown";

        //       // Find product by SKU code
        //       const product = productsData.find(
        //         (prod) => prod.skuCode === order.skuCode
        //       );
        //       console.log("🚀 ~ ordersData.map ~ productsData:", productsData);
        //       console.log("🚀 ~ ordersData.map ~ product:", product);

        //       const productName = product ? product.name : "Unknown Product";

        //       // Format date safely
        //       const createdAtFormatted = order.createdAt
        //         ? format(new Date(order.createdAt), "PPP")
        //         : "Unknown Date";

        //       // Return the enhanced order object
        //       return {
        //         ...order,
        //         userName,
        //         productName,
        //         createdAtFormatted,
        //       };
        //     } catch (error) {
        //       console.error("Error enhancing order:", error);
        //       return {
        //         ...order,
        //         userName: "Unknown",
        //         productName: "Unknown Product",
        //         createdAtFormatted: "Unknown Date",
        //       };
        //     }
        //   })
        // );

        setOrders(enhancedOrders);

        // Calculate summary
        const totalRevenue = enhancedOrders.reduce(
          (sum, order) => sum + order.price * order.quantity,
          0
        );
        const totalQuantity = enhancedOrders.reduce(
          (sum, order) => sum + order.quantity,
          0
        );
        const totalOrders = enhancedOrders.length;

        setSummary({ totalRevenue, totalOrders, totalQuantity });
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrdersWithUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color="#a78b47" loading size={50} speedMultiplier={2.5} />
      </div>
    );
  }

  const filteredOrders = orders.filter((order) => {
    return (
      searchTerm === "" ||
      order.skuCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto pl-16 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Record</h1>
          <p className="text-muted-foreground">
            Manage your store sales and transactions
          </p>
        </div>
        {/* <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                <span>{date ? format(date, "PPP") : "Pick a date"}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button>Generate Report</Button>
        </div> */}
      </div>

      {/* Summary Section */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              Rs.{summary.totalRevenue.toFixed(2)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.totalOrders}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Quantity Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.totalQuantity}</div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
            <Input
              placeholder="Search by SKU or Customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[300px]"
            />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.skuCode}</TableCell>
                    <TableCell>{order.userName}</TableCell>
                    <TableCell>${order.price.toFixed(2)}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.createdAtFormatted}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
