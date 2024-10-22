import  { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Container from "../../shared/Container";

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

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="pb-20 md:pb-[100px] grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="max-w-[521px]">
          <h1 className="text-2xl md:text-[40px] font-semibold">
            Do You Have Any Questions?
          </h1>
          <p className="text-[16px] md:text-[18px] font-opensans leading-[20px] md:leading-[24px] mt-3">
            Find answers to some of the most common questions about our legal
            services and how we can help you.
          </p>
          <button className="bg-transparent rounded border mt-5 md:mt-7 border-[#162834] text-black transition-all hover:bg-[#162834] py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans">
            Contact Us
          </button>
        </div>
        <div>
          {faqData?.map((faq, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-between p-3 my-3 rounded-md cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary text-white"
                    : "border border-[#8A9399]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="font-opensans md:text-[16px] text-[14px] font-semibold">{faq.question}</h1>
                <IoIosArrowUp
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <p className="text-[13px] md:text-[14px] py-2 px-3 font-opensans">
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
