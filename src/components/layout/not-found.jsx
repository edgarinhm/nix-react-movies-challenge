import { useNavigate } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { homeRoute } from "../../routes";
import { PAGE_NOT_FOUND } from "../../common/constants/messages/error-messages";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  const handleGoHomeButton = () => {
    resetBoundary();
    navigate(homeRoute, { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "220px", fontWeight: "900" }}>{"404"}</h1>
      <h6 style={{ textAlign: "center", fontWeight: "500", padding: 1 }}>
        {PAGE_NOT_FOUND}
      </h6>
      <div
        style={{ display: "flex", gap: "1rem" }}
        aria-label="error actions group"
      >
        <button className="btn" onClick={resetBoundary}>
          {"Retry"}
        </button>
        <button className="btn" onClick={handleGoHomeButton}>
          {"Go Home"}
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
