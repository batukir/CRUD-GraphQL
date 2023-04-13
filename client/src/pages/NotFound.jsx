import { Link } from "react-router-dom";
import WarningIcon from "@mui/icons-material/Warning";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <WarningIcon sx={{ fontSize: "5em", color: "#D0342C" }} />
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exist</p>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
}
