// pages/users.tsx
import React, { useEffect, useState } from "react";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";


const UsersPage = () => {
const [users, setUsers] = useState<UserProps[]>([]);


useEffect(() => {
const fetchUsers = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
setUsers(data);
};


fetchUsers();
}, []);


return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">Users</h1>
{users.map((user) => (
<UserCard key={user.id} user={user} />
))}
</div>
);
};


export default UsersPage;