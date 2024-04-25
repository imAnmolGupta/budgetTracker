import "./navbar.css"

const navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Budget Tracker App</span>
            <div className="navItems">
                <button className="navButton">Login</button>
                <button className="navButton">Register</button>
                <button className="navButton">Darkmode</button>
            </div>
        </div>
    </div>
  )
}

export default navbar