import { useEffect, useState } from "react";

function SideEffects() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function getData() {

      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      setUsers(data);

      setLoading(false);
    }

    getData();

  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (

    <table className="border mx-auto">

      <thead>
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Username</th>
        </tr>
      </thead>

      <tbody>

        {users.map((user) => (
          <tr key={user.id}>
            <td className="border p-2">{user.id}</td>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.username}</td>
          </tr>
        ))}

      </tbody>

    </table>

  );
}

export default SideEffects;