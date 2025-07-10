import { TfiBackRight } from "react-icons/tfi";
import axois from "axios"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import URL from "../url";
import ErrorLoading from "../components/ErrorLoading";
import Loading from "../components/Loading";
const Story = () => {
  const { id } = useParams()
  const [story, setStory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [realod, setReload] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await axois.get(`${URL}api/stories/${id}`)
        const result = await res.data.story
        setStory(result)
        setLoading(false)
        setError(false)

      } catch (error) {
        console.log("somethings went wrog.", error)
        setError(true)
        setLoading(false)

      }
    }
    fetchData()
  }, [realod])
  return (
    <>
      {/* رأس الصفحة */}
      <div className="fixed top-0 !z-50 w-full py-3 bg-[var(--second-color)] border-b border-[var(--primary-color)]">
        <div className="container relative h-[60px]">

          {/* زر الرجوع */}
          <Link to="/stories" className="absolute right-4 top-1/2 -translate-y-1/2">
            <TfiBackRight className="text-2xl md:text-3xl text-[var(--primary-color)]" />
          </Link>

          {/* العنوان */}
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-center">
            قصة
          </h1>

        </div>
      </div>




      {/* محتوى المقالة */}
      <div className="!pt-[90px] !pb-16 flex items-center justify-center w-full" >
        <div className="container max-w-5xl mx-auto !px-4  !flex items-center !justify-center">
          {!error && !loading && <div className="bg-[var(--second-color)] rounded-2xl shadow-lg !p-6 !space-y-8">
            {/* العنوان */}
            <h2 className="!text-3xl font-bold border-b !pb-4">{story.title}</h2>

            {/* النص + الصورة داخله باستخدام float */}
            <div className="relative">
              <p className="!text-base !leading-loose text-justify !p-2 !w-full !h-full">

                {
                  story.image && story.image.length > 0 ? (
                    <img
                      src={story.image}
                      alt="صورة القصة"
                      className="float-left w-[200px] h-auto !mr-6 !mb-4 rounded-xl shadow"
                    />) : ""
                }
                {story.content}
                <span className=" float-end !m-3 text-[var(--primary-color)]">
                  المصدر: {story.surce}
                </span>
              </p>
            </div>

          </div>}
          {loading && <Loading />}
          {error && <ErrorLoading onClick={() => {
            setReload((prev) => !prev)
            setError(false)
          }} />}

        </div>
      </div>

    </>
  );
};

export default Story;
