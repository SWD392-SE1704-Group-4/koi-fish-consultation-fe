import React, { useState, useEffect } from "react";
import { Table, Input, message, Spin } from "antd";
import axios from "axios";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
}

const ViewAllStaffs: React.FC = () => {
  const [staffList, setStaffList] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/staffs");
      setStaffList(response.data);
    } catch (error) {
      message.error("Failed to load staff data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredStaffList = staffList.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchValue.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
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
      render: (status: string) => (status === "active" ? "Active" : "Inactive"),
    },
  ];

  if (loading) {
    return (
      <div className="text-center p-5">
        <Spin size="large" />
      </div>
    );
  }

  if (staffList.length === 0) {
    return (
      <div className="text-center p-5">
        <p>No staff members found.</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">All Staff Members</h1>

      <Input.Search
        placeholder="Search staff by name, role, or email"
        onChange={handleSearch}
        value={searchValue}
        style={{ marginBottom: 20, maxWidth: 400 }}
      />

      <Table
        columns={columns}
        dataSource={filteredStaffList}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ViewAllStaffs;