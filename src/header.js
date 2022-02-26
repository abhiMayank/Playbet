import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#6082B6",
      }}
    >
      <h1 style={styles.headerTitle}>PlayBet</h1>
      <div
        style={{
          flexDirection: "column",
        }}
      >
        <nav>
          <Link
            className="nav-link nav-link-ltr"
            style={styles.headerLink}
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-link nav-link-ltr"
            style={styles.headerLink}
            to="/allBets"
          >
            All Bets
          </Link>
          <Link
            className="nav-link nav-link-ltr"
            style={styles.headerLink}
            to="/contactUs"
          >
            Contact Us
          </Link>
          <Link
            className="nav-link nav-link-ltr"
            style={styles.headerLink}
            to="/login"
          >
            Login/Register
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;

const styles = {
  headerTitle: {
    color: "#fff",
    marginLeft: 50,
    marginTop: 20,
    fontSize: 50,
  },
  headerLink: {
    color: "#fff",
    marginLeft: 15,
    marginRight: 30,
    textDecoration: "none",
  },
  // navLink: {
  //   fontWeight: "bold",
  //   fontSize: 14,
  //   textTransform: "uppercase",
  //   textDecoration: "none",
  //   color: "#031D44",
  //   padding: 20,
  //   margin: 0,
  //   display: "inline-block",
  //   position: "relative",
  //   opacity: 0.75,
  // },
  // navLink:hover: {
  //   opacity: 1;
  // }
};
