import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
// import AppLayout from "./components/layout/AppLayout";
import { User } from "./pages/User";
import { dashboardApiData } from "./services/Get_Dashboard_Api_Data";
import { userApiData } from "./services/Get_User_Api_data";
import { GetSingleUserDetails } from "./API/GetSingleUserData";
import { SingleUserData } from "./components/UI/ShowSingleUserData";
import { contactData } from "./services/User_Contact_details";
import { AllLotteries } from "./pages/AllLotteries";
import { lotteryApiData } from "./services/get_all_lottery_data";
import { AllWinner } from "./pages/AllWinner";
import { ChooseWinner } from "./pages/ChooseToWinner";
// import { Login } from "./pages/Login";
// import { LoginUser } from "./services/Login_user";
// import { Login } from "./pages/Login";

export const App = () => {
  const router = createBrowserRouter([
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
          loader: dashboardApiData,
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
  return <RouterProvider router={router} />;
};
