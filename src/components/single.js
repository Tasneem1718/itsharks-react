import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
function Single() {
    const [single, setsingle] = useState([])
    const [recent, setrecent] = useState([])
    const [relate, setrelate] = useState([])
    
    const Allparam = useParams();

    useEffect(()=>{
        //[---- fetching recent API ----]
        fetch('https://webeetec.com/itsharks24/blog/api/getrecentpost.php')
            .then(res => res.json())
            .then(data => {
                setrecent(data)
            })
        
        //[---- fetching singlePost API ----]
        fetch(`https://webeetec.com/itsharks24/blog/api/singlepost.php?id=${Allparam.id}`)
            .then(res => res.json())
            .then(data => {
                setsingle(data)
            })

        //[---- fetching GETCategory API ----]
        fetch(`https://webeetec.com/itsharks24/blog/api/getrelated.php?category=${Allparam.name}&id=${Allparam.id}`)
            .then(res => res.json())
            .then(data => {
                setrelate(data)
                console.log(data)
            })
            .catch(err => console.log(err))
   
    },[Allparam.id, Allparam.name])

    
    return(
        <div class="single-post">
            <section class="container">
                <div class="wrapper clear">
                    <div class="contentLeft">
                        {  
                            //[---- Mapping singlepost database ----]
                            single.map( i => {

                                return(
                                    
                                <div key={i.id}>
                                    <div class="singlePostMeta">
                                        <div class="singlePostTime">{i.date}</div>
                                        <h1>{i.title}</h1>
                                        <Link to={'/'+i.category} class="singlePostCategory">
                                            {i.category}
                                        </Link>
                                    </div>
                                    <div class="singlePostWrap">
                                        <div class="singlePostImg">
                                            <img src={'https://webeetec.com/itsharks24/blog/admin/'+i.image} alt="Francoise img"/>
                                        </div>
                                        <p>{i.description}</p>
                                        
                                    </div>
                                </div>
                                )
                            })
                        }
                        
                        <div class="pageSocial">
                            <div class="pageSocialWrapper">
                                <Link to="#"><i class="fa fa-facebook"></i></Link>
                                <Link to="#"><i class="fa fa-twitter"></i></Link>
                                <Link to="#"><i class="fa fa-pinterest"></i></Link>
                            </div>
                        </div>
                        
                <div class="relatedPostsBox ">
					<h3>related posts</h3>
                    <div className='row'>
                    {
                      //[---- Mapping relatedposts database ----]
                        relate.map(i => {
                            return(
                            <div className='col-sm col-md-4' key={i.id}>
                                <div class="relatedPostsWrap clear">
                                    <Link 
                                    to ={'/'+i.category +'/'+i.id}
                                    class="relatedPostItem flexdivedit"
                                    >
                                        <img src={'https://webeetec.com/itsharks24/blog/admin/'+i.image} className="img-fluid related-img" alt="Francoise img"/>
                                        <div class="overlayBox">
                                            <div class="relatedPostDesc">
                                                <div class="postTime">{i.date}</div>
                                                <h4>{i.title}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            )
                        })

                        
                    }
                    </div>
				</div>
                        
                    </div>
                    <div class="sidebarRight">
                        <div class="sidebar-widget">
                            <h3>About us</h3>
                            <div class="aboutMeWidget">
                                <img src="/images/ourlogo.png" alt="Francoise img"/>
                                <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
                            </div>
                        </div>
                        <div class="sidebar-widget">
                            <h3>follow me</h3>
                            <div class="followMeSocialLinks">
                                <Link to="#"><i class="fa fa-instagram"></i></Link>
                                <span></span>
                                <Link to="#"><i class="fa fa-facebook"></i></Link>
                                <span></span>
                                <Link to="#"><i class="fa fa-twitter"></i></Link>
                                <span></span>
                                <Link to="#"><i class="fa fa-heart"></i></Link>
                                <span></span>
                                <Link to="#"><i class="fa fa-pinterest"></i></Link>
                                <span></span>
                                <Link to="#"><i class="fa fa-google-plus"></i></Link>
                            </div>
                        </div>
                        
                        <div class="sidebar-widget">
                            <h3>Recent post</h3>
                            <div class="popularPostsWidget">
                                {
                                    //[---- Mapping recentpost database ----]
                                    recent.map(i => {
                                        return(

                                            <div class="popularPostsWidgetItem" key={i.id}>
                                                <Link to ={'/'+i.category+'/'+i.id} class="popularPostsItemImg">
                                                    <img src={'https://webeetec.com/itsharks24/blog/admin/'+i.image}  alt="Francoise img"/>
                                                </Link>
                                                <time datetime="2015-05-15">{i.date}</time>
                                                <h4><Link to ={'/'+i.category+'/'+i.id}>{i.title}</Link></h4>
                                            </div>
                                        )
                                    })
                                }
                            
                            </div>
				        </div>
                        
                        
                    </div>
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
                                        <img src="/images/content/inst.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="/images/content/inst2.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="/images/content/inst3.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="/images/content/inst4.jpg" alt="Francoise img"/>
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="#" class="sbi_photo">
                                        <img src="/images/content/inst5.jpg" alt="Francoise img"/>
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

export default Single;