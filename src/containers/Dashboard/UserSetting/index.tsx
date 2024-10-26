import React from "react";
import UserInfo from "./UserInfo";
import DashboardBoard from "../../../components/organism/BoardLayout";
import ChangePassword from "./ChangePassword";
import EmailVerify from "./EmailVerify";

const UserSettingDashboard: React.FC = (): JSX.Element => {
    const [collapsed, setCollapsed] = React.useState(false);
    const handleItemsChange = (updatedItems) => {
        setItems(updatedItems);
      };
    const [items, setItems] = React.useState([
        {
          id: "1",
          rowSpan: 6,
          columnSpan: 3,
          data: { title: "User information", content: <UserInfo /> }
        },
        {
          id: "2",
          rowSpan: 3,
          columnSpan: 1,
          data: { title: "Change password", content: <ChangePassword /> }
        },
        {
          id: "3",
          rowSpan: 3,
          columnSpan: 1,
          data: { title: "Email verification", content:  <EmailVerify /> }
        }
      ]);
    return (
         <DashboardBoard items={items} onItemsChange={handleItemsChange} /> 
    );
}

export default UserSettingDashboard;