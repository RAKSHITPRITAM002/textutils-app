import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
  abouttext: ReactNode;
  title: string;
  mode: 'light' | 'dark';
  toggleMode: () => void;
  palette: 'red' | 'green' | 'blue' | 'purple';
  onPaletteChange: (palette: 'red' | 'green' | 'blue' | 'purple') => void;
};

export default function Navbar(props: NavbarProps) {
  const isDarkMode = props.mode === 'dark';
  const palettes = ['red', 'green', 'blue', 'purple'] as const;

  return (
    <div>
      {props.title}
      {props.abouttext}
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} palette-${props.palette} px-3`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">TextUtils</Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>

          <form className="d-flex navbar-search align-items-center" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">Search</button>

            <div className="d-flex align-items-center gap-3 ms-3">
              <div className="form-check form-switch mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="themeToggle"
                  checked={isDarkMode}
                  onChange={props.toggleMode}
                />
                <label className={`form-check-label ${isDarkMode ? 'text-light' : 'text-dark'}`} htmlFor="themeToggle">
                  {isDarkMode ? 'Dark' : 'Light'}
                </label>
              </div>
              <div className="palette-selector" role="group" aria-label="Navbar color palette">
                {palettes.map((palette) => (
                  <button
                    key={palette}
                    type="button"
                    className={`btn btn-sm palette-button palette-button-${palette}`}
                    aria-label={`${palette} palette`}
                    aria-pressed={props.palette === palette}
                    onClick={() => props.onPaletteChange(palette)}
                  >
                    {palette[0].toUpperCase() + palette.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
