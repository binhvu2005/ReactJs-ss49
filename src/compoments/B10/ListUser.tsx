import React from "react";
import { Link } from "react-router-dom";

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

const ListUser = () => {
  return (
    <div>
      <h1>Danh sách user</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        {users.map((user) => (
          <div key={user.id} className="user-list">
            <p>id: {user.id}</p>
            <p>UserName: {user.UserName}</p>
            <p>Email: {user.Email}</p>
            <p>Address: {user.Address}</p>
            <Link to={`/user/${user.id}`}>
              <button>Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
