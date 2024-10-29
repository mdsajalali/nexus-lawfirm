import contact_bg from "/images/contactus_bg.png";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-2   xl:px-0">
      <div className="hidden lg:block">
        <img
          src={contact_bg}
          alt="Contact Bg"
          className="h-[600px] w-full object-cover"
        />
      </div>
      <div className="max-w-[625px] py-10">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[20px] font-semibold md:text-[40px]"
        >
          Get in Touch with Us
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-5 font-opensans text-[13px]  leading-[19.5px] outline-none md:pt-10 md:text-[20px] md:leading-[30px]"
        >
          Have questions or need assistance? Fill out the form below and our
          team will get back to you shortly.
        </motion.p>
        <form className="mt-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-4  flex gap-[10px] md:gap-4"
          >
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded border p-3 font-opensans text-[12px] outline-none md:text-[14px]"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded border p-3 font-opensans text-[12px] outline-none md:text-[14px]"
              required
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="mb-4 flex flex-col"
          >
            <input
              type="text"
              placeholder="Enter the subject of your message"
              className="rounded border p-3 font-opensans text-[12px] outline-none md:text-[14px]"
              required
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
            className="mb-4 flex flex-col"
          >
            <textarea
              placeholder="Type your message here"
              className="rounded border p-3 font-opensans text-[12px] outline-none md:text-[14px]"
              required
              rows={4}
            ></textarea>
          </motion.div>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6 }}
            viewport={{ once: true }}
            type="submit"
            className="rounded border bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-primary hover:text-white md:px-7 md:text-[18px]  "
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
