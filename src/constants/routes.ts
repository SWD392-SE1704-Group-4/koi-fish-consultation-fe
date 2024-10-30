import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalculateIcon from "@mui/icons-material/Calculate";
import BookIcon from "@mui/icons-material/Book";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
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
import FengShuiForm from "../containers/FengShuiGenerator/HomeGenerator";
import BlogPosting from "../containers/Advertiser/BlogPosting/BlogPosting";
import KoiFishDetail from "../containers/KoiFishDetail";
import FengShuiElement from "../containers/FengShuiElement/FengShuiElement";
import PostAdvertisement from "../containers/PostAdvertisement";
import AdvertisementList from "../containers/Dashboard/ManageAdvertisement/AdvertisementList";
import AdvertisementPage from "../containers/AdvertisementList";

import CastleIcon from '@mui/icons-material/Castle';
import AdvertisementDetail from "../containers/AdvertisementDetail";
import ManageTransaction from "../containers/Dashboard/ManageBlog";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MyFishPond from "../containers/Dashboard/MyFishPond";
import MyAdvertisement from "../containers/Dashboard/MyAdvertisement";


export const privateRoutes = [{ path: "/me/*", container: Dashboard }];

export const publicRoutes = [
  { path: "/login", container: Login },
  { path: "/register", container: SignUp },
  { path: "/", container: Home },
  { path: "/home", container: Home },
  { path: "/post/advertisement", container: PostAdvertisement },
  { path: "/information/koi-fish", container: KoiFishPage },
  { path: "/information/advertisement", container: AdvertisementPage },
  { path: "/information/advertisement/:advertisementId", container: AdvertisementDetail},
  { path: "/annual-feng-shui", container: Annual },
  { path: "/about-us", container: AboutUsSection },
  { path: "/blog/koi-color-meaning", container: ColorMeaning },
  { path: "/blog/symbolism", container: Symbolism },
  { path: "/blog/home-decor", container: FengShuiKoiFishBlog },
  { path: "/blog/meaning-and-benefits", container: KoiFishMeaningBenefits },
  { path: "/blog/seasonal-koi", container: SeasonalKoiPondCare },
  { path: "/blog/koi-care-for-feng-shui", container: KoiCareForGoodFengShui },
  { path: "/information/fengshui-consultation", container: FengShuiForm },
  { path: "/information/fengshui-element", container: FengShuiElement },

  // test
  { path: "/blog-posting", container: BlogPosting },
  { path: "/details", container: KoiFishDetail },
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
    path: "/my-fish-pond",
    title: "My fish pond",
    icon: AutoAwesomeIcon,
    container: MyFishPond,
    href: "/me/my-fish-pond",
  },
  {
    path: "/my-advertisement",
    title: "My advertisement",
    icon: AutoAwesomeIcon,
    container: MyAdvertisement,
    href: "/me/my-advertisement",
  },
  {
    path: "/my-favourite",
    title: "My favourite",
    icon: FavoriteIcon,
    container: Favourite,
    href: "/me/my-favourite",
  },
];

//Route for advertisement
export const advertisementDashboardSubRoutes = [
  {
    path: "/profile",
    title: "My profile",
    icon: AccountCircleIcon,
    container: UserSettingDashboard,
    href: "/me/profile",
  },
  {
    path: "/manage-fish-pond",
    title: "Manage fish pond",
    container: ManageFengshuiDataDashboard,
    icon: CastleIcon,
    href: "/me/manage-fish-pond",
  },
  {
    path: "/manage-advertisement",
    title: "Manage advertisement",
    icon: AutoAwesomeIcon,
    container: ManageAdvertisement,
    href: "/me/manage-advertisement",
  },
  {
    path: "/manage-transaction",
    title: "Manage transaction",
    icon: AutoAwesomeIcon,
    container: ManageAdvertisement,
    href: "/me/manage-transaction",
  }
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
    icon: LocalFireDepartmentIcon,
    href: "/me/manage-fengshui-data",
  },
  {
    path: "/manage-advertisement",
    title: "Manage advertisement",
    container: ManageAdvertisement,
    icon: AutoAwesomeIcon,
    href: "/me/manage-advertisement",
  },
  {
    path: "/manage-transaction",
    title: "Manage transaction",
    container: ManageTransaction,
    icon: AccountBalanceIcon,
    href: "/me/manage-transaction",
  },
];


export const adminDashboardSubRoutes = [
  {
    path: "/profile",
    title: "My profile",
    container: UserSettingDashboard,
    icon: AccountCircleIcon,
    href: "/me/profile",
  },
  {
    path: "/manage/account",
    title: "Manage account",
    container: UserSettingDashboard,
    icon: AccountCircleIcon,
    href: "/manage/account",
  }
]