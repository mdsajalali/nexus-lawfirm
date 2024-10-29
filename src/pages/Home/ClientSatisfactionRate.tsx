import { useEffect, useRef, useState } from "react";
import client_banner from "/images/client_banner.png";
import user from "/images/client-satisfaction/user.svg";
import multiple_user from "/images/client-satisfaction/multiple_user.svg";
import book from "/images/client-satisfaction/book.svg";
import verify from "/images/client-satisfaction/verify.svg";
import Container from "../../shared/Container";

interface CountNumbers {
  years: number;
  satisfactionRate: number;
  casesResolved: number;
  attorneys: number;
}

const ClientSatisfactionRate = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [countNumbers, setCountNumbers] = useState<CountNumbers>({
    years: 0,
    satisfactionRate: 0,
    casesResolved: 0,
    attorneys: 0,
  });

  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setCountNumbers({
        years: 0,
        satisfactionRate: 0,
        casesResolved: 0,
        attorneys: 0,
      });

      const targets = {
        years: 25,
        satisfactionRate: 95,
        casesResolved: 5000,
        attorneys: 20,
      };

      const countUp = (
        key: keyof CountNumbers,
        target: number,
        duration: number,
      ) => {
        let start = 0;
        const step = Math.ceil(target / duration);
        const interval = setInterval(() => {
          start += step;
          if (start >= target) {
            clearInterval(interval);
            start = target;
          }
          setCountNumbers((prev) => ({ ...prev, [key]: start }));
        }, 50);
      };

      for (const [key, target] of Object.entries(targets) as [
        keyof CountNumbers,
        number,
      ][]) {
        countUp(key, target, 100);
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={targetRef}
      className="relative h-[307px] w-full bg-cover bg-fixed bg-center md:h-[432px]"
      style={{ backgroundImage: `url(${client_banner})` }}
    >
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-white">
        <Container>
          <div className="grid grid-cols-2 gap-7 text-center md:grid-cols-3 lg:grid-cols-4 lg:gap-[137px]">
            <div>
              <img
                className="mx-auto h-[31px] w-[30px] md:h-[42px] md:w-[41px]"
                src={verify}
                alt="verify"
              />
              <h1 className="text-[32px] font-bold md:text-[48px]">
                {countNumbers.years}
              </h1>
              <p className="font-opensans text-[13px] md:text-[16px]">
                Years of Legal Expertise
              </p>
            </div>
            <div>
              <img
                className="mx-auto h-[31px] w-[30px] md:h-[42px] md:w-[41px]"
                src={multiple_user}
                alt="multiple user"
              />
              <h1 className="text-[32px] font-bold md:text-[48px]">
                {countNumbers.satisfactionRate}%
              </h1>
              <p className="font-opensans text-[13px] md:text-[16px]">
                Client Satisfaction Rate
              </p>
            </div>
            <div>
              <img
                className="mx-auto h-[31px] w-[30px] md:h-[42px] md:w-[41px]"
                src={book}
                alt="book"
              />
              <h1 className="text-[32px] font-bold md:text-[48px]">
                {countNumbers.casesResolved}+
              </h1>
              <p className="font-opensans text-[13px] md:text-[16px]">
                Cases Successfully Resolved
              </p>
            </div>
            <div>
              <img
                className="mx-auto h-[31px] w-[30px] md:h-[42px] md:w-[41px]"
                src={user}
                alt="user"
              />
              <h1 className="text-[32px] font-bold md:text-[48px]">
                {countNumbers.attorneys}+
              </h1>
              <p className="font-opensans text-[13px] md:text-[16px]">
                Professional Attorneys
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClientSatisfactionRate;
