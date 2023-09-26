import { Link, useLocation } from 'react-router-dom';


function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs" style={{float: "right", fontFamily: "helvetica", fontWeight: "bold", marginRight:"5rem", marginTop:"5px"}}>
            <li className="nav-item" >
                <Link
                    to="/"
                   //check to see if you are on homepage
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    style={{textDecoration: "none", color: "#7C8D85"}}
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/About"
                    //check to see if you are on homepage
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                    style={{textDecoration: "none", color: "#7C8D85"}}
                >
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Portfolio"
                    //check to see if you are on homepage
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    style={{textDecoration: "none", color: "#7C8D85"}}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Resume"
                    //check to see if you are on Contact page
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    style={{textDecoration: "none", color: "#7C8D85"}}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}
export default Navigation