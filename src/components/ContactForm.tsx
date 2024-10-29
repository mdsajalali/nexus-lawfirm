const ContactForm = () => {
  return (
    <div className="relative w-[350px] rounded-md bg-primary p-5 md:w-[560px] md:p-[50px]">
      <h1 className="pb-5 text-2xl font-semibold text-white md:pb-10 md:text-[40px]">
        Get in Touch with Us
      </h1>
      <form>
        <div className="mb-4 flex flex-col gap-[10px] md:flex-row md:gap-4">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded border p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
            required
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="mt-1 w-full rounded border p-3 font-opensans text-[12px] text-black outline-none md:mt-0 md:text-[14px]"
            required
          />
        </div>

        <div className="mb-4 flex flex-col">
          <input
            type="text"
            placeholder="Enter the subject of your message"
            className="rounded border p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <textarea
            placeholder="Type your message here"
            className="rounded border p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
            required
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded border bg-white px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-primary hover:text-white md:px-7 md:text-[18px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
