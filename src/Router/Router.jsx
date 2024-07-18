import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import Login from "../Authentication/Login/Login";
import Registration from "../Authentication/Registration/Registration";
import Dashboard from "../Dashbord/Dashboard";
import UserManagement from "../Dashbord/Admin/UserManagement";
import BalanceDetails from "../Components/UserComponent/BalanceDetails";
import UserHistory from "../Components/UserComponent/UserHistory";
import CashIn from "../Components/UserComponent/CashIn";
import CashOut from "../Components/UserComponent/CashOut";
import SendMoney from "../Components/UserComponent/SendMoney";
import AgentHistory from "../Components/AgentComponent/AgentHistory";
import SystemMonitoring from "../Dashbord/Admin/SystemMonitoring";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      // Admin
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "monitoring",
        element: <SystemMonitoring />,
      },

      // user
      {
        path: "balance",
        element: <BalanceDetails />,
      },
      {
        path: "user-history",
        element: <UserHistory />,
      },
      {
        path: "cash-in",
        element: <CashIn />,
      },
      {
        path: "cash-out",
        element: <CashOut />,
      },
      {
        path: "send-money",
        element: <SendMoney />,
      },

      // Agent
      {
        path: "agent-history",
        element: <AgentHistory />,
      },
    ],
  },
]);

export default router;
