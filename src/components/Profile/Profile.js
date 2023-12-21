import React from "react";
import { useAuth } from "../../authentication/Auth";

export const Profile = () => {
  const auth = useAuth();

  return (
    <div>
      <h3>Welcome @{auth.user.username}!</h3>
    </div>
  );
};
