import React, { useState, useEffect } from "react";
import { Button, Modal, message, Spin, List, Card } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Staff {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
}

const DisableStaff: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [staff, setStaff] = useState<Staff | null>(null);
  const [loading, setLoading] = useState(false);
  const [disableLoading, setDisableLoading] = useState(false);

  useEffect(() => {
    fetchStaffDetails();
  });

  const fetchStaffDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/staffs/${id}`);
      setStaff(response.data);
    } catch (error) {
      message.error("Unable to retrieve staff details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDisableStaff = async () => {
    if (staff?.status === "disabled") {
      message.info("This staff member’s account is already disabled.");
      return;
    }

    Modal.confirm({
      title: "Disable Staff",
      content: "Are you sure you want to disable this staff member?",
      onOk: async () => {
        setDisableLoading(true);
        try {
          await axios.post(`/api/staffs/${id}/disable`);
          message.success("Staff member disabled successfully.");
        } catch (error) {
          message.error("Unable to disable staff member. Please try again later.");
        } finally {
          setDisableLoading(false);
        }
      },
    });
  };

  if (loading) {
    return (
      <div className="text-center p-5">
        <Spin size="large" />
      </div>
    );
  }

  if (!staff) {
    return (
      <div className="text-center p-5">
        <p>No details available for this staff member.</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Disable Staff Member</h1>

      <Card>
        <List.Item>
          <List.Item.Meta
            title={staff.name}
            description={`Role: ${staff.role} | Email: ${staff.email}`}
          />
          <div>Status: {staff.status === "active" ? "Active" : "Disabled"}</div>
        </List.Item>

        <div className="mt-5">
          <Button
            type="primary"
            danger
            onClick={handleDisableStaff}
            loading={disableLoading}
            disabled={staff.status === "disabled"}
          >
            Disable Staff Account
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DisableStaff;