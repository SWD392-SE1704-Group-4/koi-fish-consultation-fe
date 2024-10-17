import React, { useState, useEffect } from "react";
import { Table, Input, Button, message, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

interface Advertiser {
  id: string;
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  activeCampaigns: number;
  status: string;
}

const ViewAllAdvertisers: React.FC = () => {
  const [advertisers, setAdvertisers] = useState<Advertiser[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredAdvertisers, setFilteredAdvertisers] = useState<Advertiser[]>([]);

  useEffect(() => {
    fetchAdvertisers();
  }, []);

  const fetchAdvertisers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/advertisers");
      setAdvertisers(response.data);
      setFilteredAdvertisers(response.data);
    } catch (error) {
      message.error("Unable to retrieve advertiser data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    if (value === "") {
      setFilteredAdvertisers(advertisers);
    } else {
      const filtered = advertisers.filter((advertiser) =>
        advertiser.companyName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredAdvertisers(filtered);
    }
  };

  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      sorter: (a: Advertiser, b: Advertiser) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Contact Email",
      dataIndex: "contactEmail",
      key: "contactEmail",
    },
    {
      title: "Contact Phone",
      dataIndex: "contactPhone",
      key: "contactPhone",
    },
    {
      title: "Active Campaigns",
      dataIndex: "activeCampaigns",
      key: "activeCampaigns",
      sorter: (a: Advertiser, b: Advertiser) => a.activeCampaigns - b.activeCampaigns,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) =>
        status === "active" ? (
          <span style={{ color: "green" }}>Active</span>
        ) : (
          <span style={{ color: "red" }}>Inactive</span>
        ),
    },
  ];

  if (loading) {
    return (
      <div className="text-center p-5">
        <Spin size="large" />
      </div>
    );
  }

  if (advertisers.length === 0) {
    return (
      <div className="text-center p-5">
        <p>No advertisers found.</p>
        <Button onClick={fetchAdvertisers}>Reload</Button>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">All Advertisers</h1>

      <div className="mb-4">
        <Input
          placeholder="Search by company name"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          prefix={<SearchOutlined />}
        />
      </div>

      <Table
        dataSource={filteredAdvertisers}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ViewAllAdvertisers;