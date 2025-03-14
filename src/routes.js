/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.js";
import Notifications from "./views/Notifications.js";
import Settings from "./views/Settings.js";
import Icons from "./views/Icons.js";
import TableList from "./views/Tables.js";
import Maps from "./views/Map.js";
import UserPage from "./views/User.js";
import UpgradeToPro from "./views/Upgrade.js";
import spreadsheetIcon from "./assets/img/spreadsheet-icon.svg";

var routes = [
  {
    path: "/dashboard",
    name: "Summary",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Spreadsheet",
    icon: spreadsheetIcon,
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "nc-icon nc-settings-gear-65",
    component: <Settings />,
    layout: "/admin",
  }
];

export default routes;
