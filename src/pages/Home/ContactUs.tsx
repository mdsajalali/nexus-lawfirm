import contact_bg from "/images/contactus_bg.png";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:px-0   px-4">
      <div className="lg:block hidden">
        <img
          src={contact_bg}
          alt="Contact Bg"
          className="w-full h-[600px] object-cover"
        />
      </div>
      <div className="max-w-[625px] py-10">
        <h1 className="text-[20px] md:text-[40px] font-semibold">
          Get in Touch with Us
        </h1>
        <p className="text-[13px] md:text-[20px] leading-[19.5px]  md:leading-[30px] md:pt-10 pt-5 font-opensans outline-none">
          Have questions or need assistance? Fill out the form below and our
          team will get back to you shortly.
        </p>
        <form className="mt-10">
          <div className="flex  gap-[10px] md:gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="border rounded p-3 w-full font-opensans outline-none text-[12px] md:text-[14px]"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="border rounded p-3 w-full font-opensans outline-none text-[12px] md:text-[14px]"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="Enter the subject of your message"
              className="border rounded p-3 font-opensans outline-none text-[12px] md:text-[14px]"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <textarea
              placeholder="Type your message here"
              className="border rounded p-3 font-opensans outline-none text-[12px] md:text-[14px]"
              required
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-transparent rounded border text-black transition-all hover:bg-primary py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans  "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
