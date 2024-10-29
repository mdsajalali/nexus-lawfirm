import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Container from "../../shared/Container";
import { Link } from "react-router-dom";

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
          <h1 className="text-2xl font-semibold md:text-[40px]">
            Do You Have Any Questions?
          </h1>
          <p className="mt-3 font-opensans text-[16px] leading-[20px] md:text-[18px] md:leading-[24px]">
            Find answers to some of the most common questions about our legal
            services and how we can help you.
          </p>
          <Link to="/contact">
            <button className="mt-5 rounded border border-[#162834] bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-[#162834] hover:text-white md:mt-7 md:px-7 md:text-[18px]">
              Contact Us
            </button>
          </Link>
        </div>
        <div>
          {faqData?.map((faq, index) => (
            <div key={index}>
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
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
