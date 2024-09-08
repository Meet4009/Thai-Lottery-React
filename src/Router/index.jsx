import { createBrowserRouter } from "react-router-dom";
import { getSingleUserDetails } from "../API/lottery";
import { SingleUserData } from "../components/UI/ShowSingleUserData";
import { AllLotteries } from "../pages/AllLotteries";
import { AllWinner } from "../pages/AllWinner";
import { ChooseWinner } from "../pages/ChooseToWinner";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { User } from "../pages/User";
import { lotteryApiData } from "../services/get_all_lottery_data";
import { userApiData } from "../services/Get_User_Api_data";
import { contactData } from "../services/User_Contact_details";
import { dashboard } from "../API/lottery";
import ProtectedRoute from "./ProtectedRoute";


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
            <Dashboard />
          </ProtectedRoute>
        ),
        loader: dashboard,
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
        loader: userApiData,
      },
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute>
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
            <AllLotteries />
          </ProtectedRoute>
        ),
        loader: lotteryApiData,
      },
      {
        path: "/allwinner",
        element: (
          <ProtectedRoute>
            <AllWinner />
          </ProtectedRoute>
        ),
      },
      {
        path: "/choosewinner",
        element: (
          <ProtectedRoute>
            <ChooseWinner />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default Router;
