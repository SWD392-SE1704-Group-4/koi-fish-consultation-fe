import { useState, useEffect } from "react";
import { Form, Input, Button, message, Modal } from "antd";
import axios from "axios";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  password?: string;
}

const UpdateProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("/api/user/profile");
      setProfile(response.data);
    } catch (error) {
      message.error("Failed to load profile details.");
    }
  };

  const handleProfileUpdate = async (values: UserProfile) => {
    setLoading(true);
    try {
      await axios.put("/api/user/profile", values);
      message.success("Profile updated successfully.");
    } catch (error) {
      message.error("Profile update failed.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await axios.put("/api/user/change-password", { password });
      message.success("Password changed successfully.");
      setPassword("");
      setConfirmPassword("");
      setPasswordModalVisible(false);
    } catch (error) {
      message.error("Password change failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Update Profile</h1>

      <Form
        layout="vertical"
        initialValues={profile}
        onFinish={handleProfileUpdate}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please enter your phone number" }]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <div className="mb-4">
          <Button type="link" onClick={() => setPasswordModalVisible(true)}>
            Change Password
          </Button>
        </div>

        <Button type="primary" htmlType="submit" loading={loading}>
          Update Profile
        </Button>
      </Form>

      <Modal
        title="Change Password"
        visible={passwordModalVisible}
        onCancel={() => setPasswordModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handlePasswordChange}>
          <Form.Item
            label="New Password"
            rules={[
              { required: true, message: "Please enter your new password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            rules={[
              { required: true, message: "Please confirm your new password" },
            ]}
          >
            <Input.Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={loading}>
            Change Password
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateProfile;