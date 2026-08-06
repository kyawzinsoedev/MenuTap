import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import AdminLayout from "./layouts/admin/AdminLayout";
import KitchenLayout from "./layouts/kitchen/KitchenLayout";

export const router = createBrowserRouter([
  // Customer
  {
    path: "/menu/:tableToken",
    element: <CustomerLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <MenuPage />,
    //   },
    //   {
    //     path: "cart",
    //     element: <CartPage />,
    //   },
    // ],
  },

  // Admin
  {
    path: "/admin",
    element: <AdminLayout />,
    // children: [
    //   {
    //     path: "dashboard",
    //     element: <DashboardPage />,
    //   },
    //   {
    //     path: "categories",
    //     element: <CategoryPage />,
    //   },
    //   {
    //     path: "menus",
    //     element: <MenuPage />,
    //   },
    // ],
  },

  // Kitchen
  {
    path: "/kitchen",
    element: <KitchenLayout />,
    // children: [
    //   {
    //     path: "orders",
    //     element: <KitchenBoardPage />,
    //   },
    // ],
  },
]);
