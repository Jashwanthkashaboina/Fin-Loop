import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

function Home() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:8000/me", {
          withCredentials: true,
        });

        if (!res.data.loggedIn) {
          window.location.href = "http://localhost:5173/login";
        } else {
          setChecking(false); // allow dashboard to render
        }
      } catch (err) {
        window.location.href = "http://localhost:5173/login";
      }
    };

    checkAuth();
  }, []);

  if (checking) {
    return <h3 style={{ padding: "20px" }}>Loading dashboard...</h3>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
}

export default Home;
