import { useState, useEffect,  } from "react"
import "./lastStories.css"
import axois from "axios"
import URL from "../../url"
import DefultImg from '../../assets/defult-image.jpg'

function LastStories(){
    const [stories, setStories] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const res = await axois.get(`${URL}api/stories`)
            const storiesRaw = res.data.storiesRaw
            setStories(storiesRaw)
            console.log(res.data.storiesRaw)
            
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
                    <div className="stories flex flex-col max-md:flex-col gap-4">
                        {stories.map((story, index) => (
                            <div className="card" key={index}>
                                <div className="content-card">
                                    <h2 className="title-card">{story.title}</h2>
                                    <p className="description-card">{story.content.length > 200? story.content.slice(0, 200)+ "..." : story.content}</p>
                                    <span className="">{story.surce}</span>
                                    <a href={`/stories/${story._id}`} className="read-more">اقرأ المزيد</a>
                                </div>
                                <div className="image-card">
                                    <img src={story.image ? story.image : DefultImg} alt={story.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastStories;