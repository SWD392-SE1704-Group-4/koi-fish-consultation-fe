import { useState, useEffect } from "react";
import { Card, Descriptions, Button, message } from "antd";
import axios from "axios";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  membershipLevel: string;
}

const ViewProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/user/profile");
      setProfile(response.data);
    } catch (error) {
      message.error("Failed to load profile details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!profile) {
    return <p>Profile information not found. Please contact support.</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Your Profile</h1>

      <Card>
        <Descriptions
          title="Profile Information"
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label="Name">{profile.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{profile.email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{profile.phone}</Descriptions.Item>
          <Descriptions.Item label="Membership Level">
            {profile.membershipLevel}
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Button type="primary" onClick={fetchProfile} className="mt-4">
        Refresh Profile
      </Button>
    </div>
  );
};

export default ViewProfile;