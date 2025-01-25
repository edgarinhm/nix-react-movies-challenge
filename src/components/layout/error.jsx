import { useNavigate } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { homeRoute } from "../../routes";
import { SERVER_SIDE_ERROR } from "../../common/constants/messages/error-messages";

const ErrorPage = () => {
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
      }}
    >
      <h1 style={{ fontSize: "220px", fontWeight: "900" }}>{"500"}</h1>
      <h6 style={{ textAlign: "center", fontWeight: "500", padding: 1 }}>
        {SERVER_SIDE_ERROR}
      </h6>
      <div aria-label="error actions group">
        <button onClick={resetBoundary}>{"Retry"}</button>
        <button onClick={handleGoHomeButton}>{"Go Home"}</button>
      </div>
    </div>
  );
};

export default ErrorPage;
