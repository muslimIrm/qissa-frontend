import React from "react";

const ContactSection = () => (
  <section id="contact" className="!py-16 bg-[var(--second-color)]">
    <div className="container flex !flex-col gap-6">
      <div className="title !mb-10">
        <h1 className="text-[var(--heading-color)] text-3xl sm:text-4xl font-bold text-center">
          تواصل معنا
        </h1>
      </div>
      <div className="bg-[var(--background)] mb:w-[80%] w-full !mx-auto !p-8 md:!p-12 rounded-2xl shadow-xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block !mb-2 !text-[var(--heading-color)] font-medium">الاسم الكامل</label>
            <input
              type="text"
              required
              placeholder="ادخل اسمك"
              className="w-full !px-4 !py-3 rounded-lg bg-[var(--second-color)] border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] text-[var(--text-color)]"
            />
          </div>
          <div>
            <label className="block !mb-2 !text-[var(--heading-color)] !font-medium">البريد الإلكتروني</label>
            <input
            required
              type="email"
              placeholder="example@email.com"
              className="w-full !px-4 !py-3 rounded-lg bg-[var(--second-color)] border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] text-[var(--text-color)]"
            />
          </div>
          <div className="md:!col-span-2">
            <label className="block !mb-2 !text-[var(--heading-color)] font-medium">الرسالة</label>
            <textarea
              rows="10"
              required
              placeholder="اكتب رسالتك..."
              className="w-full !px-4 !py-3 rounded-lg bg-[var(--second-color)] border border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] text-[var(--text-color)] resize-none"
            ></textarea>
          </div>
          <div className="md:!col-span-2">
            <button
              type="submit"
              className="w-full !py-3 bg-[var(--primary-color)] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              إرسال الرسالة
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
