import { useState, useEffect,  } from "react"
import "./lastStories.css"
import axois from "axios"
import URL from "../../url"
import DefultImg from '../../assets/defult-image.jpg'
import { Link } from "react-router-dom"
function LastStories(){
    const [stories, setStories] = useState([])

    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false);
    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try {
                const res = await axois.get(`${URL}api/stories`)
                const storiesRaw = res.data.storiesRaw
                setStories(storiesRaw)
                setLoading(false)
                
            } catch (error) {
                
            }
            
        }
        fetchData()
    }, [])
    return(
        <section className=" w-full" id="last_stories">
            <div className="container flex max-md:gap-6 !flex-col items-center justify-center">
                <div className="title">
                    <h1>أحدث القصص</h1>
                </div>

                <div className="content">
                    <div className="stories flex items-center justify-center flex-col max-md:flex-col gap-4">
                        {stories.map((story, index) => (
                            <div className="card" key={index}>
                                <div className="content-card">
                                    <h2 className="title-card">{story.title}</h2>
                                    <p className="description-card">{story.content.length > 200? story.content.slice(0, 200)+ "..." : story.content}</p>
                                    <span className="">{story.surce}</span>
                                    <Link to={`/stories/${story._id}`} className="read-more">اقرأ المزيد</Link>
                                </div>
                                <div className="image-card">
                                    <img src={story.image ? story.image : DefultImg} alt={story.title} />
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-center items-center">
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            </div>
                        )}
                        <Link to="/stories" className={`btn ${loading? "hidden-important": ""}`} >المزيد من القصص</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastStories;