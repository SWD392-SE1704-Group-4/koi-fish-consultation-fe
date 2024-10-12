import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalculateIcon from "@mui/icons-material/Calculate";
import BookIcon from "@mui/icons-material/Book";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";

import UserSettingDashboard from "../containers/Dashboard/UserSetting";
import Home from "../containers/Home";
import Dashboard from "../containers/Dashboard";
import Login from "../containers/LoginPage";
import SignUp from "../containers/SignUpPage";
import UserInfo from "../containers/Dashboard/UserSetting/UserInfo";
import ManageBlog from "../containers/Dashboard/ManageBlog";
import ManageAdvertisement from "../containers/Dashboard/ManageAdvertisement";
import Favourite from "../containers/Dashboard/Favourite";
import Consultation from "../containers/Dashboard/Consultation";
import KoiFishPage from "../containers/KoiFishPage";
import Annual from "../containers/AnnualFengShui/Annual";
import AboutUsSection from "../containers/AboutUs/AboutUs";
import path from "path";
import ColorMeaning from "../containers/HardBlogs/ColorMeaning";
import Symbolism from "../containers/HardBlogs/Symbolism";
import FengShuiKoiFishBlog from "../containers/HardBlogs/HomeDecor";
import KoiFishMeaningBenefits from "../containers/HardBlogs/MeaningAndBenefits";
import SeasonalKoiPondCare from "../containers/HardBlogs/Seasonal";
import KoiCareForGoodFengShui from "../containers/HardBlogs/KoiCare";
import ManageFengshuiDataDashboard from "../containers/Dashboard/ManageFengshuiData";

export const privateRoutes = [{ path: "/me/*", container: Dashboard }];

export const publicRoutes = [
  { path: "/login", container: Login },
  { path: "/register", container: SignUp },
  { path: "/", container: Home },
  { path: "/home", container: Home },
  { path: "/information/koi-fish", container: KoiFishPage },
  { path: "/annual-feng-shui", container: Annual },
  { path: "/about-us", container: AboutUsSection },
  { path: "/blog/koi-color-meaning", container: ColorMeaning },
  { path: "/blog/symbolism", container: Symbolism },
  { path: "/blog/home-decor", container: FengShuiKoiFishBlog },
  { path: "/blog/meaning-and-benefits", container: KoiFishMeaningBenefits },
  { path: "/blog/seasonal-koi", container: SeasonalKoiPondCare },
  { path: "/blog/koi-care-for-feng-shui", container: KoiCareForGoodFengShui },
];

//Route for member
export const memberDashboardSubRoutes = [
  {
    path: "/profile",
    title: "My profile",
    icon: AccountCircleIcon,
    container: UserSettingDashboard,
    href: "/me/profile",
  },
  {
    path: "/fengshui-consultation",
    title: "Consultation",
    icon: CalculateIcon,
    container: Consultation,
    href: "/me/fengshui-consultation",
  },
  {
    path: "/manage-blog",
    title: "Manage blog",
    icon: BookIcon,
    container: ManageBlog,
    href: "/me/manage-blog",
  },
  {
    path: "/manage-advertisement",
    title: "Manage advertisement",
    icon: AutoAwesomeIcon,
    container: ManageAdvertisement,
    href: "/me/manage-advertisement",
  },
  {
    path: "/favourite",
    title: "Favourite",
    icon: FavoriteIcon,
    container: Favourite,
    href: "/me/favourite",
  },

];

//Route for staff
export const staffDashboardSubRoutes = [
  {
    path: "/profile",
    title: "My profile",
    container: UserSettingDashboard,
    icon: AccountCircleIcon,
    href: "/me/profile",
  },
  {
    path: "/manage-fengshui-data",
    title: "Manage fengshui data",
    container: ManageFengshuiDataDashboard,
    icon: AutoAwesomeIcon,
    href: "/me/manage-fengshui-data",
  },
  {
    path: "/manage-blog",
    title: "Manage blog",
    container: ManageBlog,
    icon: BookIcon,
    href: "/me/manage-blog",
  },
  {
    path: "/manage-advertisement",
    title: "Manage advertisement",
    container: ManageAdvertisement,
    icon: AutoAwesomeIcon,
    href: "/me/manage-advertisement",
  },
];
