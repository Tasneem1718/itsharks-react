import { Link } from 'react-router-dom'
function Error404() {
    return(
        <div className="error404">
        
            <section class="container">
                <div class="page404Wrap">
                    <img src="err-404.jpg" alt="Francoise img"/>
                    <p>The requested page has <br/> not been found</p>
                    <Link to="/home" class="homePageLink">homepage</Link>
                </div>
                <div class="clear"></div>
                <div class="ourInstagram">
                    <div id="sb_instagram">
                        <div class="sb_instagram_header">
                            <Link to="#" class="sbi_header_link">Follow on instagram</Link>
                        </div>
                        <div id="sbi_images">
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="images/content/inst.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="images/content/inst2.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="images/content/inst3.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="images/content/inst4.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="images/content/inst5.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
	
        </div>
    )
}

export default Error404;