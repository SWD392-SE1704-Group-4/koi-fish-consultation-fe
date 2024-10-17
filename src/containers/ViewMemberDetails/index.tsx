import React, { useState, useEffect } from "react";
import { Descriptions, message, Spin, Card } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

interface MemberDetails {
  id: string;
  name: string;
  email: string;
  membershipLevel: string;
  status: string;
  contactInfo: string;
  accountHistory: string[];
  activityLogs: string[];
}

const ViewMemberDetails: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const [memberDetails, setMemberDetails] = useState<MemberDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMemberDetails();
  });

  const fetchMemberDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/members/${memberId}`);
      setMemberDetails(response.data);
    } catch (error) {
      message.error("Failed to load member details.");
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

  if (!memberDetails) {
    return (
      <div className="text-center p-5">
        <p>No details available for this member.</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <Card>
        <h1 className="text-2xl mb-4">Member Details</h1>

        <Descriptions bordered>
          <Descriptions.Item label="Name">{memberDetails.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{memberDetails.email}</Descriptions.Item>
          <Descriptions.Item label="Membership Level">{memberDetails.membershipLevel}</Descriptions.Item>
          <Descriptions.Item label="Status">{memberDetails.status === "active" ? "Active" : "Disabled"}</Descriptions.Item>
          <Descriptions.Item label="Contact Information">{memberDetails.contactInfo}</Descriptions.Item>
        </Descriptions>

        <h2 className="mt-5">Account History</h2>
        <Card>
          <ul>
            {memberDetails.accountHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </Card>

        <h2 className="mt-5">Activity Logs</h2>
        <Card>
          <ul>
            {memberDetails.activityLogs.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        </Card>
      </Card>
    </div>
  );
};

export default ViewMemberDetails;