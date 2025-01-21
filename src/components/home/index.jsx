import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        document.title = "Thikkiiana City Theater";
      }, []);
  return (
    <div>Home</div>
  )
}

export default HomePage