import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Container from "../../shared/Container";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by visiting our Contact page and filling out the form or by calling our office directly.",
  },
  {
    question: "What types of cases do you handle?",
    answer:
      "We handle a variety of legal cases, including family law, criminal defense, and personal injury.",
  },
  {
    question: "How much do your legal services cost?",
    answer:
      "Our fees vary depending on the type of service, and we can provide a detailed estimate during your consultation.",
  },
  {
    question: "How long will my case take?",
    answer:
      "The duration of a case can vary widely based on its complexity; we will provide an estimated timeline during your consultation.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans to accommodate our clients' financial situations.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 gap-5 pb-20 md:pb-[100px] lg:grid-cols-2">
        <div className="max-w-[521px]">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold md:text-[40px]"
          >
            Do You Have Any Questions?
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-3 font-opensans text-[16px] leading-[20px] md:text-[18px] md:leading-[24px]"
          >
            Find answers to some of the most common questions about our legal
            services and how we can help you.
          </motion.p>
          <Link to="/contact">
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-5 rounded border border-[#162834] bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-[#162834] hover:text-white md:mt-7 md:px-7 md:text-[18px]"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
        <div>
          {faqData?.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              viewport={{ once: true }}
              key={index}
            >
              <div
                className={`my-3 flex cursor-pointer items-center justify-between rounded-md p-3 transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary text-white"
                    : "border border-[#8A9399]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="font-opensans text-[14px] font-semibold md:text-[16px]">
                  {faq.question}
                </h1>
                <IoIosArrowUp
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <p className="px-3 py-2 font-opensans text-[13px] md:text-[14px]">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
