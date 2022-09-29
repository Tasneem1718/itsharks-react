import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {
    const [posts, setposts] = useState([])
    const [recent, setrecent] = useState([])
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getposts.php')
            .then(res => res.json())
            .then(data => {
                setposts(data)
            })
    },[])
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getrecentpost.php')
            .then(res => res.json())
            .then(data => {
                setrecent(data)
            })
    },[])
    return(
    
    <section className="container mt-5">
        <div className="wrapper clear">
        
        <div className="clear"></div>
        <div className="contentLeft">

            <div className="blogPostListWrap">
                {
                    posts.map(i =>{
                        return(
                        <div className="blogPostListItem clear" key={i.id}>
                            <Link to ={'/single/'+i.id+'/'+i.category} className="blogPostListImg">
                            <img src={'https://webeetec.com/itsharks24/blog/admin/'+i.image} alt="Francoise img" />
                            </Link>
                            <div className="blogPostListText">
                            <div className="blogPostListTime">{i.date}</div>
                            <h3><Link to ={'/single/'+i.id+'/'+i.category} >{i.title}</Link></h3>
                            <p>{i.description}</p>
                            </div>
                        </div>
                        )
                    })
                }

            </div>

            <div className="postPagination">
            <ul className="clear">
                <li className="newPosts"><Link to="#">New posts</Link></li>
                <li className="olderPosts"><Link to="#">Older posts</Link></li>
            </ul>
            </div>
            
        </div>
        <div className="sidebarRight">
            <div className="sidebar-widget">
            <h3>About us</h3>
            <div className="aboutMeWidget">
                <img src="images/ourlogo.png" alt="Francoise img"/>
                <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
            </div>
            </div>
            <div className="sidebar-widget">
            <h3>follow me</h3>
            <div className="followMeSocialLinks">
                <Link to="#"><i className="fa fa-instagram"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-facebook"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-twitter"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-heart"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-pinterest"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-google-plus"></i></Link>
            </div>
            </div>
            
            <div className="sidebar-widget">
            <h3>Recent post</h3>
            <div className="popularPostsWidget">
                {
                    recent.map( i => {
                        return(

                            <div className="popularPostsWidgetItem" key={i.id}>
                                <Link to="#" className="popularPostsItemImg">
                                    <img src={'https://webeetec.com/itsharks24/blog/admin/'+i.image} alt="Francoise img"/></Link>
                                <time datetime="2015-05-15">{i.date}</time>
                                <h4><Link to="#">{i.title}</Link></h4>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            
            
        </div>

        </div>
        <div className="clear"></div>
        
    </section>
     
    )
}

export default Home;