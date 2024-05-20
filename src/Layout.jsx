import { NavLink, Outlet } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";
import footer from "./assets/footer.png";

function Layout() {
  return (
    <header>
      <nav className="nav-contianer">
        <div className="header">
          <NavLink className="nav-links" to="/">
            {" "}
            <FaRegNewspaper />
            Read Todays Edition
          </NavLink>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/The_Charlotte_Observer_logo.png/797px-The_Charlotte_Observer_logo.png"
            alt=""
          />
          <NavLink className="nav-links" to="gotcha">
            {" "}
            Login |<b>Subscribe</b>
          </NavLink>
        </div>
        <div className="border-nav">
          <MdManageSearch size={30} />
          <div className="nav-menu">
            <NavLink className="nav-links" to="gotcha">
              NEWS
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              SPORTS
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              ENTERTAINMENT
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              BUSINESS
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              OPINIONS
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              OBITUARIES
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              FINANCE
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              CHARLOTTES BEST
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              SHOPPING
            </NavLink>
            <NavLink className="nav-links" to="gotcha">
              BETTING
            </NavLink>
          </div>
          <p>77°</p>
        </div>
        <div className="orange">
          <h3>ENJOY UNLIMITED DIGITAL ACCESS FOR $1. LIMITED TIME ONLY.</h3>
          <button>SUBSCRIBE NOW</button>
        </div>
        <div className="ad">
          <img
            src="https://tpc.googlesyndication.com/simgad/1804504297921817047"
            alt=""
          />
        </div>
      </nav>
      <main>
        <Outlet />
        <img className="footer" src={footer} alt="poop" />
      </main>
    </header>
  );
}

export default Layout;
