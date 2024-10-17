import { useState, useEffect } from "react";
import { Table, Button, Modal, message } from "antd";
import axios from "axios";

interface Member {
  id: string;
  name: string;
  email: string;
  status: string;
}

const DisableMemberAccount = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/members");
      setMembers(response.data);
    } catch (error) {
      message.error("Failed to load members.");
    } finally {
      setLoading(false);
    }
  };

  const handleDisableClick = (member: Member) => {
    if (member.status === "disabled") {
      message.warning("This account is already disabled.");
      return;
    }
    setSelectedMember(member);
    setIsModalVisible(true);
  };

  const handleConfirmDisable = async () => {
    if (!selectedMember) return;

    try {
      await axios.post(`/api/members/${selectedMember.id}/disable`);
      message.success("Account disabled successfully.");
      setMembers((prev) =>
        prev.map((m) =>
          m.id === selectedMember.id ? { ...m, status: "disabled" } : m
        )
      );
    } catch (error) {
      message.error("Failed to disable the account. Please try again.");
    } finally {
      setIsModalVisible(false);
      setSelectedMember(null);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (status === "active" ? "Active" : "Disabled"),
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: Member) => (
        <Button
          type="primary"
          danger
          onClick={() => handleDisableClick(record)}
        >
          Disable Account
        </Button>
      ),
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Member Management</h1>

      <Table
        dataSource={members}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Confirm Disable Account"
        visible={isModalVisible}
        onOk={handleConfirmDisable}
        onCancel={() => setIsModalVisible(false)}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>
          Are you sure you want to disable the account of{" "}
          {selectedMember?.name}?
        </p>
      </Modal>
    </div>
  );
};

export default DisableMemberAccount;