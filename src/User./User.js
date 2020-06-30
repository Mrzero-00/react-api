import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setuser(null);
        seterror(null);
        setloading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setuser(response.data);
      } catch (e) {
        seterror(e);
      }
    };
    fetchUsers();
    setloading(false);
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;

  return (
    <>
      <ul>
        {user.map((users) => (
          <li key={users.userId}>
            {users.userId}({users.id})
          </li>
        ))}
      </ul>
    </>
  );
}

export default User;
