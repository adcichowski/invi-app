import { getAccessToken } from "@auth0/nextjs-auth0";
import React from "react";

const Page = async () => {
  const { accessToken } = await getAccessToken();
  const getUser = await fetch("http://localhost:3000/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const users = await getUser.json();
  console.log(users);
  return (
    <div>
      <div>User</div>
    </div>
  );
};
export default Page;
