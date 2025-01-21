import { useEffect } from "react";
import "./home.css";

const HomePage = () => {
  useEffect(() => {
    document.title = "Thikkiiana City Theater";
  }, []);
  return (
    <div className={"home-contaniner"}>
    </div>
  );
};

export default HomePage;
