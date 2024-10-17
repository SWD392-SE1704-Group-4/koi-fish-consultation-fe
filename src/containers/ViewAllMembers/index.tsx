import React, { useState, useEffect } from "react";
import { Table, Input, message } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";

interface Member {
  id: string;
  name: string;
  email: string;
  membershipLevel: string;
  status: string;
}

const ViewAllMembers: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/members");
      setMembers(response.data);
      setFilteredMembers(response.data);
    } catch (error) {
      message.error("Failed to load members.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filtered = members.filter(
      (member) =>
        member.name.toLowerCase().includes(value) ||
        member.email.toLowerCase().includes(value) ||
        member.membershipLevel.toLowerCase().includes(value) ||
        member.status.toLowerCase().includes(value)
    );
    setFilteredMembers(filtered);
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
      title: "Membership Level",
      dataIndex: "membershipLevel",
      key: "membershipLevel",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) =>
        status === "active" ? "Active" : "Disabled",
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">View All Members</h1>

      <div className="mb-4">
        <Input
          placeholder="Search by name, email, membership level, or status"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
          allowClear
        />
      </div>

      <Table
        dataSource={filteredMembers}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ViewAllMembers;