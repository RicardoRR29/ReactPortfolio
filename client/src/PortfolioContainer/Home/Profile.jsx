import Typical from "react-typical";
import './Profile.css'

export function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
                <a href="#">
                <i className="fa fa-facebook-square"></i>
                </a>
                <a href="#">
                <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="#">
                <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                <i className="fa fa-youtube-square"></i>
                </a>
                <a href="#">
                <i className="fa fa-twitter"></i>
                </a>
              </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ricardo</span>
            </span>
          </div>
          <div className="profile-details-role">
            {" "}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Ricardo Rocha Ribeiro",
                  3000,
                  "Front End Developer",
                  3000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
                Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
                <button className="btn primary-btn">
                    {""}
                    Hire Me{" "}
                </button>
                <a href="#">Get Resume</a> {/* link para baixar currículo */}
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
