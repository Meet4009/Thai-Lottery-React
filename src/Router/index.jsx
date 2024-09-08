import { createBrowserRouter } from "react-router-dom";
import { GetSingleUserDetails } from "../API/GetSingleUserData";
import { SingleUserData } from "../components/UI/ShowSingleUserData";
import { AllLotteries } from "../pages/AllLotteries";
import { AllWinner } from "../pages/AllWinner";
import { ChooseWinner } from "../pages/ChooseToWinner";
import { Dashboard } from "../pages/Dashboard";
// import { Login } from "../pages/Login";
import { User } from "../pages/User";
import { lotteryApiData } from "../services/get_all_lottery_data";
import { userApiData } from "../services/Get_User_Api_data";
import { contactData } from "../services/User_Contact_details";
// import { dashboard } from "../API/dashboard_user";

const Router = createBrowserRouter([
  {
    path: "/",
    // element: <Login />,
    children: [
      // {
      //   path: "/",
      //   element: <Login />,
      // },
      {
        path: "/",
        element: <Dashboard />,
        // loader: dashboard,
      },
      {
        path: "/user",
        element: <User />,
        loader: userApiData,
      },
      {
        path: "/user/:id",
        element: <SingleUserData />,
        loader: GetSingleUserDetails,
        action: contactData,
      },
      {
        path: "/alllotteries",
        element: <AllLotteries />,
        loader: lotteryApiData,
      },
      {
        path: "/allwinner",
        element: <AllWinner />,
      },
      {
        path: "/choosewinner",
        element: <ChooseWinner />,
      },
    ],
  },
]);
export default Router;
