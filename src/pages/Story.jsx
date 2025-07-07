import { TfiBackRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import img from "../assets/bg.png";

const Story = () => {
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




      {/* محتوى المقالة */ }
      < div className = "!pt-[90px] !pb-16" >
        <div className="container max-w-5xl mx-auto !px-4">
          <div className="bg-[var(--second-color)] rounded-2xl shadow-lg !p-6 !space-y-8">

            {/* العنوان */}
            <h2 className="!text-3xl font-bold border-b !pb-4">رحلة البطل: قصة لا تُنسى</h2>

            {/* النص + الصورة داخله باستخدام float */}
            <div className="relative">
              <p className="!text-base !leading-loose text-justify !p-2
              ">
                <img
                  src={img}
                  alt="صورة القصة"
                  className="float-left w-[250px] h-auto !mr-6 !mb-4 rounded-xl shadow"
                />
                في زمنٍ مضى، وُلد فتى في قرية نائية تحيط بها الجبال من كل جانب. كان يُدعى كميل، وكان مختلفًا منذ صغره. لم يكن يحب اللعب مع أقرانه، بل كان يهوى الجلوس تحت الشجرة الكبيرة يستمع إلى حكايات جدّه عن الشجاعة والإيمان والاختبارات التي يواجهها الإنسان في دروب الحياة. <br /><br />

                مرت السنين، وكبر كميل، وازداد في قلبه الشوق لاكتشاف العالم خارج حدود قريته. في يومٍ من الأيام، جاءت إلى القرية كارثة لم يتوقعها أحد: جفاف شديد أصاب الأرض، وأصبح الناس يهاجرون للبحث عن حياة أفضل. لكن كميل لم يهرب، بل قرر أن يبحث عن حل ينقذ قريته.<br /><br />

                بدأ رحلته الطويلة، التي استمرت أعوامًا، قاطعًا الصحاري والجبال، وواجه خلالها قطاع طرق، وجوعًا، ووحدة قاسية. لكنه لم يفقد أمله. في كل موقف صعب، كان يتذكر كلمات جده: "من سار على طريق النور لا يُترك وحده".<br /><br />

                وفي إحدى الليالي، وهو على وشك أن ينهار، رأى نورًا من بعيد. اقترب منه ليجد عالِمًا كبيرًا في خيمة بسيطة، يكتب في كتاب ضخم. استضافه العالم، وعلّمه أسرارًا عن الأرض والماء والنبات، ثم أعطاه بذورًا نادرة، وقال له: "عد إلى أرضك، وازرع هذه، فإن فيها الشفاء".<br /><br />

                عاد كميل إلى قريته، وجمع من تبقى من أهلها، وزرع البذور. وبعد شهور، دبت الحياة في الأرض، وخرجت من الأعشاب الخضراء مياه نقية، فعاد الناس، وعادت الحياة، وأصبح كميل أسطورة تحكى لكل جيل.<br /><br />

                هذه القصة ليست مجرد خيال، بل هي انعكاس لحقيقتنا، فكل إنسان فيه بطل نائم، ينتظر فقط الشرارة ليبدأ رحلته. وما يميز الأبطال ليس القوة الجسدية، بل الصبر، والإيمان، والسعي رغم كل شيء.

                <span className=" float-end !mt-3 text-[var(--primary-color)]">
                  المصدر: كتاب ...
                </span>
              </p>
            </div>

          </div>
        </div>
      </div >
    </>
  );
};

export default Story;
