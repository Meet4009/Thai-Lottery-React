import { createBrowserRouter } from "react-router-dom";
import { getSingleUserDetails } from "../API/lottery";
import { SingleUserData } from "../components/UI/ShowSingleUserData";
import { AllLotteries } from "../pages/AllLotteries";
import { AllWinner } from "../pages/AllWinner";
import { ChooseWinner } from "../pages/ChooseToWinner";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { User } from "../pages/User";
// import { lotteryApiData } from "../services/get_all_lottery_data";
// import { userApiData } from "../services/Get_User_Api_data";
import { contactData } from "../services/User_Contact_details";
// import { dashboard } from "../API/lottery";
import ProtectedRoute from "./ProtectedRoute";
import { PendingDeposite } from "../pages/PendingDeposite";
import { Header } from "../components/layout/Header";
import { ApprovedDeposite } from "../pages/ApprovedDeposite";
import { RejectedDeposits } from "../pages/RejectedDeposits";
import { AllDeposits } from "../pages/AllDeposits";

const Router = createBrowserRouter([
  {
    path: "/",
    // element: <Login />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Header name="Dashboard" />
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <Header name="User With Balance" />
            <User />
          </ProtectedRoute>
        ),
        // loader: userApiData,
      },
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute>
            <Header name="User Profile" />
            <SingleUserData />
          </ProtectedRoute>
        ),
        loader: getSingleUserDetails,
        action: contactData,
      },
      {
        path: "/alllotteries",
        element: (
          <ProtectedRoute>
            <Header name="All Lotteries" />
            <AllLotteries />
          </ProtectedRoute>
        ),
        // loader: lotteryApiData,
      },
      {
        path: "/allwinner",
        element: (
          <ProtectedRoute>
            <Header name="All Winners" />
            <AllWinner />
          </ProtectedRoute>
        ),
      },
      {
        path: "/choosewinner",
        element: (
          <ProtectedRoute>
            <Header name="Choose to Winner" />
            <ChooseWinner />
          </ProtectedRoute>
        ),
      },
      // Dropdown menu "DEPOSITE"
      {
        path: "/pendingdeposite",
        element: (
          <ProtectedRoute>
            <Header name="Pending deposits" />
            <PendingDeposite />
          </ProtectedRoute>
        ),
      },
      {
        path: "/approveddeposite",
        element: (
          <ProtectedRoute>
            <Header name="Approved Deposits" />
            <ApprovedDeposite />
          </ProtectedRoute>
        ),
      },
      {
        path: "/rejecteddeposite",
        element: (
          <ProtectedRoute>
            <Header name="Rejected Deposits" />
            <RejectedDeposits />
          </ProtectedRoute>
        ),
      },
      {
        path: "/alldeposits",
        element: (
          <ProtectedRoute>
            <Header name="All Deposits" />
            <AllDeposits />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default Router;
