// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";


const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
return (
<div className="border p-4 rounded shadow mb-4">
<h2 className="font-bold text-lg">{user.name}</h2>
<p>Email: {user.email}</p>
<p>
Address: {user.address.street}, {user.address.suite}, {user.address.city} {user.address.zipcode}
</p>
</div>
);
};


export default UserCard;