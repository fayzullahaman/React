import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/login");
    }
  });
  return (
    <>
      <h1>Welcome {sessionStorage.getItem("fullname")} Dashboard</h1>
    </>
  );
}
