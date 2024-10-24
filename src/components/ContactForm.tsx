const ContactForm = () => {
  return (
    <div className="bg-primary rounded-md p-5 md:p-[50px] md:w-[560px] w-[350px] relative">
      <h1 className="text-2xl text-white md:text-[40px] font-semibold md:pb-10 pb-5">
        Get in Touch with Us
      </h1>
      <form>
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter your full name"
            className="border rounded p-3 w-full font-opensans outline-none text-[12px] md:text-[14px] text-black"
            required
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="border rounded p-3 w-full font-opensans outline-none text-[12px] mt-1 md:mt-0 md:text-[14px] text-black"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Enter the subject of your message"
            className="border rounded p-3 font-opensans outline-none text-[12px] md:text-[14px] text-black"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <textarea
            placeholder="Type your message here"
            className="border rounded p-3 font-opensans outline-none text-[12px] md:text-[14px] text-black"
            required
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white w-full rounded border text-black transition-all hover:bg-primary py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
