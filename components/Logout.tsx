import React from "react";
import {signOut} from "@/auth";
const Logout = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mb-10"
      >
        Logout
      </form>
    </>
  );
};

export default Logout;
