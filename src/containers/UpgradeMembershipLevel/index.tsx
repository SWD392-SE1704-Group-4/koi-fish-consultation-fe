import React, { useState, useEffect } from "react";
import { Select, Button, Table, message, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

interface Member {
  id: string;
  name: string;
  membershipLevel: string;
}

interface MembershipLevel {
  id: string;
  level: string;
}

const UpgradeMembership = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [membershipLevels, setMembershipLevels] = useState<MembershipLevel[]>(
    []
  );
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMembers();
    fetchMembershipLevels();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get("/api/members");
      setMembers(response.data);
    } catch (error) {
      message.error("Failed to load members.");
    }
  };

  const fetchMembershipLevels = async () => {
    try {
      const response = await axios.get("/api/membershipLevels");
      setMembershipLevels(response.data);
    } catch (error) {
      message.error("Failed to load membership levels.");
    }
  };

  const handleMemberSelect = (memberId: string) => {
    const member = members.find((m) => m.id === memberId) || null;
    setSelectedMember(member);
  };

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
  };

  const handleUpgrade = async () => {
    if (!selectedMember || !selectedLevel) {
      message.error("Please select both a member and a new membership level.");
      return;
    }

    setIsLoading(true);

    try {
      await axios.put(`/api/members/${selectedMember.id}/upgrade`, {
        membershipLevelId: selectedLevel,
      });
      message.success("Membership upgraded successfully.");
      setSelectedMember(null);
      setSelectedLevel(null);
      fetchMembers();
    } catch (error) {
      message.error("Membership upgrade failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const columns: ColumnsType<Member> = [
    {
      title: "Member Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Current Membership Level",
      dataIndex: "membershipLevel",
      key: "membershipLevel",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => handleMemberSelect(record.id)}>
          Select
        </Button>
      ),
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Upgrade Membership Level</h1>

      <Table
        columns={columns}
        dataSource={members}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        className="mb-4"
      />

      {selectedMember && (
        <div className="mb-4">
          <h2>
            Selected Member: <strong>{selectedMember.name}</strong>
          </h2>
          <h3>Current Membership Level: {selectedMember.membershipLevel}</h3>

          <Select
            placeholder="Select New Membership Level"
            className="mb-4"
            onChange={handleLevelSelect}
            value={selectedLevel || undefined}
            style={{ width: 300 }}
          >
            {membershipLevels.map((level) => (
              <Select.Option key={level.id} value={level.id}>
                {level.level}
              </Select.Option>
            ))}
          </Select>

          <div>
            <Button
              type="primary"
              onClick={handleUpgrade}
              loading={isLoading}
              disabled={!selectedLevel}
            >
              Upgrade Membership
            </Button>
          </div>
        </div>
      )}

      <Modal
        title="Confirmation"
        visible={isLoading}
        footer={null}
        onCancel={() => setIsLoading(false)}
      >
        <p>Processing the membership upgrade...</p>
      </Modal>
    </div>
  );
};

export default UpgradeMembership;