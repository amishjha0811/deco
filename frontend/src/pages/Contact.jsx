import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#F9F1FF] py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get in Touch with <span className="text-[#8000FF]">Deco Wale</span>
        </h1>
        <p className="text-gray-600 mt-4">
          We're here to help you plan your perfect event. Contact us through the form below or reach out via phone, WhatsApp, or email.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto border border-[#E9D5FF]">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your requirements..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#8000FF] hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center space-y-4">
          <p className="text-gray-700">Or contact us directly:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919560570695"
              className="bg-[#F3E8FF] px-4 py-2 rounded-lg text-gray-800 hover:bg-[#E9D5FF] transition"
            >
              📞 +91 95605 70695
            </a>
            <a
              href="https://wa.me/919560570695"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-2 rounded-lg transition"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="mailto:decowaleonline@gmail.com"
              className="bg-[#3B82F6] hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              📧 info@decowale.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
