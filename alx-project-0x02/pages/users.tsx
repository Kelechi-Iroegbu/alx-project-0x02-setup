// pages/users.tsx
import React from "react";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";


interface UsersPageProps {
users: UserProps[];
}


const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">Users</h1>
{users.map((user) => (
<UserCard key={user.id} user={user} />
))}
</div>
);
};


export const getStaticProps() = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await response.json();


return {
props: {
users,
},
};
};


export default UsersPage;
