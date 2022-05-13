import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useNavigate, Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <nav className="menu-dashboard">
      <div className="dashboard">
        <ul className="dashboard-df">
          <span className="dashboard-user">Dashboard</span>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/home">
                <AccessTimeOutlinedIcon className="home-link" />
                <div className="default">Default</div>
              </Link>
            </div>
          </div>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/home">
                <BrokenImageOutlinedIcon className="home-link" />
                <div className="default">Schedule</div>
              </Link>
            </div>
          </div>
        </ul>
        <hr className="line-style" />
        <ul className="dashboard-df">
          <span className="dashboard-user">Widget</span>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/user">
                <PeopleAltOutlinedIcon className="home-link" />
                <div className="default">Profile</div>
              </Link>
            </div>
          </div>
          <div className="default-group">
            <div>
              <Link className="a-link" to="/home">
                <AppsOutlinedIcon className="home-link" />
                <div className="default">Personnel</div>
              </Link>
            </div>
          </div>
        </ul>
        <ul className="dashboard-df">
        <div className="default-group">
            <div>
              <Link className="a-link" to="/home">
                <RateReviewOutlinedIcon className="home-link" />
                <div className="default">Feedback</div>
              </Link>
            </div>
          </div>
        </ul>
        <hr className="line-style" />
      </div>
    </nav>
  );
}
export default Footer;
