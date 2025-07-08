import { useState, useEffect, } from "react"
import { TfiBackRight } from "react-icons/tfi";
import axois from "axios"
import URL from "../url"
import DefultImg from '../assets/defult-image.jpg'
import { Link } from "react-router-dom"
import '../components/last_sotries/lastStories.css'
import Loading from "../components/Loading";
import ErrorLoading from "../components/ErrorLoading";
const stories = () => {
    const [stories, setStories] = useState([])

    const [limit] = useState(5)
    const [page, setPage] = useState(1)

    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false);

    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (loading || !hasMore) return;
            console.log("running")
            setLoading(true)
            setReload(false)
            try {
                const res = await axois.get(`${URL}api/stories?limit=${limit}&page=${page}`)
                const newStories = await res.data.storiesRaw

                setStories(prev => [...prev, ...newStories])
                const totalPages = res.data.totalPages;

                if (page >= totalPages || newStories.length === 0) {
                    setHasMore(false)
                }
                setError(false);

            } catch (error) {
                console.log("somethings went wrog.", error)
                if (error.message === "Network Error") {

                    setError(true);
                }
                if (!hasMore) {
                    setError(true);
                } else {

                    setHasMore(false)
                }

            } finally {
                setLoading(false)
            }


        }
        fetchData()
    }, [page, reload])

    useEffect(() => {
        const handleScroll = () => {
            const scrollBottm = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

            if (scrollBottm & !loading & hasMore) {
                setPage((prev) => prev + 1)
            }

        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [hasMore, loading])

    return (
        <>
            {/* رأس الصفحة */}
            <div className="fixed top-0 !z-50 w-full py-3 bg-[var(--second-color)] border-b border-[var(--primary-color)]">
                <div className="container relative h-[60px]">

                    {/* زر الرجوع */}
                    <Link to="/" className="absolute right-4 top-1/2 -translate-y-1/2">
                        <TfiBackRight className="text-2xl md:text-3xl text-[var(--primary-color)]" />
                    </Link>

                    {/* العنوان */}
                    <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-center">
                        قصة
                    </h1>

                </div>
            </div>

            <div className="felx w-full !h-dvh">
                <div className="content container !h-full">
                    <div className="stories container flex !flex-col gap-4 max-md:!mt-24">
                        {stories.map((story, index) => (
                            <div className="card" key={index}>
                                <div className="content-card">
                                    <h2 className="title-card">{story.title.length > 40 ? story.content.slice(0, 40) + "..." : story.title}</h2>
                                    <p className="description-card">{story.content.length > 60 ? story.content.slice(0, 60) + "..." : story.content}</p>
                                    <span className="">{story.surce}</span>
                                    <Link to={`/stories/${story._id}`} className="read-more">اقرأ المزيد</Link>
                                </div>
                                {
                                    story.image && story.image.length > 0 ? (
                                        <div className="image-card">
                                            <img src={story.image} alt={story.title} />
                                        </div>) : ""
                                }
                            </div>
                        ))}
                        {loading && (<Loading />)}
                    </div>

                    {error && (
                        <ErrorLoading onClick={() => {
                            setError(false);
                            setLoading(false);
                            setHasMore(true);
                            setReload(true)
                            setPage(1);
                            setStories([]);
                        }} />
                    )}

                </div>
            </div>

        </>
    );
}

export default stories;