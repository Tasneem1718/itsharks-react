import { Link } from 'react-router-dom'
function Footer() {
    return(
        <footer id="footer">
        <div className="footerSocial">
          <div className="wrapper clear">
            <div className="footerSocialItem">
              <Link to="#" className="">
                <i className="fa fa-instagram"></i>
                Instagram <br/>
                10 537
              </Link>
            </div>
            <div className="footerSocialItem">
              <Link to="#" className="">
                <i className="fa fa-facebook"></i>
                facebook <br/>
                103 537
              </Link>
            </div>
            <div className="footerSocialItem">
              <Link to="#" className="">
                <i className="fa fa-twitter"></i>
                Twitter <br/>
                27 129
              </Link>
            </div>
            <div className="footerSocialItem">
              <Link to="#" className="">
                <i className="fa fa-heart"></i>
                bloglovin <br/>
                98 122
              </Link>
            </div>
            <div className="footerSocialItem">
              <Link to="#" className="">
                <i className="fa fa-pinterest"></i>
                Pinterest <br/>
                10 641
              </Link>
            </div>
            <div className="footerSocialItem">
              <Link to="#" className="">
                <i className="fa fa-google-plus"></i>
                google + <br/>
                17 324
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapper">
          
          <p className="copyright">Made With <i className="fa fa-heart footercign"></i> by Tasneem Saad</p>
        </div>	
        </footer>
    )
}

export default Footer;