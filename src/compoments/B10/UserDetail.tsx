import React from "react";
import { useParams } from "react-router-dom";

const users = [
  {
    id: 1,
    UserName: "Nguyễn Văn A",
    Email: "abcd@gmail.com",
    Address: "Hà Nội",
  },
  {
    id: 2,
    UserName: "Nguyễn Văn B",
    Email: "abcd@gmail.com",
    Address: "Hà Nội",
  },
  {
    id: 3,
    UserName: "Nguyễn Văn C",
    Email: "abcd@gmail.com",
    Address: "Hà Nội",
  },
];

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>ID is not found</p>;
  }

  const user = users.find((user) => user.id === parseInt(id, 10));

  return (
    <div>
      {user ? (
        <>
          <h1>Chi tiết người dùng</h1>
          <p>id: {user.id}</p>
          <p>UserName: {user.UserName}</p>
          <p>Email: {user.Email}</p>
          <p>Address: {user.Address}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
