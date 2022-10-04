import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
function Nav() {
    const [cat, setcat] = useState([])
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getcategory.php')
            .then(res => res.json())
            .then(data => {
                setcat(data)
            })
    })
    return(
    <>
        <header id="header">
            <div className="siteHeader">
                <div className="wrapper clear">
                    <Link to="/home" className="mobile-logo">
                    </Link>
                    <ul className="mainMenu clear">
                        <li>
                            <Link to='/home' className="navLinnks">Home</Link>
                        </li>
                        <li>
                            <p className="navLinnks curs">Category</p>
                            <ul className="scrooll">
                            {
                                //[---- MAPing category database ----]
                                cat.map(i=>{
                                    return(
                                        <li  key={i.id}>
                                        <Link to={'/'+i.name} className="navLinnks ">{i.name}</Link>
                                        </li>
                                    )
                                    })
                            }
                            </ul>
                        </li>
                        
                    </ul>
                    <div className="pull-right clear">
                        <div className="headerSocialLinks clear">
                            <Link to="#"><i className="fa fa-instagram"></i></Link>
                            <Link to="#"><i className="fa fa-facebook"></i></Link>
                            <Link to="#"><i className="fa fa-twitter"></i></Link>
                            <Link to="#"><i className="fa fa-heart"></i></Link>
                            <Link to="#"><i className="fa fa-pinterest"></i></Link>
                            <Link to="#"><i className="fa fa-google-plus"></i></Link>
                        </div>
                        <div className="searchIcon"></div>
                    </div>
                    <span className="showMobileMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>      
            </div>
            <Link to="/home" className="logo">Francoise - Home list</Link>
        </header>
        <div class="searchPopup">
            <span class="closeBtn"></span>
            <div class="wrapper">
            <form action="https://highseastudio.com/demo/francoise-html/index.html">
                <input class="" type="text" name="" size="32" value="" placeholder="Search"/>
            </form>
            </div>
        </div>
    </>
    )
}
export default Nav;
