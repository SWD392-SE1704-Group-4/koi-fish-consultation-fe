import React, { useState, useEffect } from "react";
import { Descriptions, message, Spin, Card } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

interface StaffDetails {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  status: string;
  recentActivity: string[];
}

const ViewStaffDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [staffDetails, setStaffDetails] = useState<StaffDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStaffDetails();
  });

  const fetchStaffDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/staffs/${id}`);
      setStaffDetails(response.data);
    } catch (error) {
      message.error("Unable to retrieve staff details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center p-5">
        <Spin size="large" />
      </div>
    );
  }

  if (!staffDetails) {
    return (
      <div className="text-center p-5">
        <p>No details available for this staff member.</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Staff Details</h1>

      <Card>
        <Descriptions bordered title="Personal Information">
          <Descriptions.Item label="Name">{staffDetails.name}</Descriptions.Item>
          <Descriptions.Item label="Role">{staffDetails.role}</Descriptions.Item>
          <Descriptions.Item label="Email">{staffDetails.email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{staffDetails.phone}</Descriptions.Item>
          <Descriptions.Item label="Status">
            {staffDetails.status === "active" ? "Active" : "Inactive"}
          </Descriptions.Item>
        </Descriptions>

        <Descriptions bordered title="Activity Logs" style={{ marginTop: 20 }}>
          {staffDetails.recentActivity.length > 0 ? (
            staffDetails.recentActivity.map((activity, index) => (
              <Descriptions.Item label={`Log ${index + 1}`} key={index}>
                {activity}
              </Descriptions.Item>
            ))
          ) : (
            <Descriptions/>
          )}
        </Descriptions>
      </Card>
    </div>
  );
};

export default ViewStaffDetails;