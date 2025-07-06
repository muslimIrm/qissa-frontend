import "./home.css";
import Img from "../../assets/home_image.png";
import Bg from "../../assets/bg.png"
function Home() {

    return (

        <section className="home relative overflow-hidden" id="home">
            <div className="container">
                <div className="content ">
                    <div>
                        <h1>قصة</h1>
                    <p> منصة تهدف لنشر القصص الإسلامية من مصادر موثوقة وبأسلوب مبسط يناسب كل الأعمار، لتكون القصص مدخلًا للفهم، ومصدرًا للإلهام، وجسرًا للارتباط مع سير أولياء الله.</p>
                    
                    <div className=" flex md:flex-row flex-col gap-3 items-center mb:w-3/4">
                        <p className="!text-2xl" style={{fontFamily: "Scheherazade New"}}>﴿  لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ ﴾</p>
                        <span className=" text-left" style={{fontFamily: "Scheherazade New"}}>[ يُوسِف: 111]</span>
                    </div>
                    </div>
                    <div className="flex gap-6 max-md:flex-col">

                        <a href="#last_stories" className="btn">استكشف القصص</a>
                        <a href="#verse" className="btn-out">إقــرا آيــــــــة</a>
                    </div>

                    <div className=" absolute bottom-5 max-sm:hidden">
                        <h2>الموقع قيد التطوير</h2>
                        <h3>نبذل اقصى الجهود لتقديم الموقع بالصورى الفضلى، شاكرين صبركم.</h3>
                    </div>
                    <img src={Bg} className="absolute bottom-0 right-0 w-4xl opacity-9" style={{zIndex: -1}} />

                </div>
                <div className="image">
                    <img src={Img} alt="" className=" w-[580px]  rounded-2xl" />
                </div>
            </div>
        </section>

    );
}

export default Home