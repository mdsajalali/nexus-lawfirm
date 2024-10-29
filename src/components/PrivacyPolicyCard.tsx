import Container from "../shared/Container";

const PrivacyPolicyCard = () => {
  return (
    <Container>
      <div className="py-10 font-opensans md:py-20">
        <div>
          <h1 className="text-[20px] font-semibold md:text-2xl">
            1. Information We Collect
          </h1>
          <div className="py-5">
            <p className="text-[14] md:text-[16px]">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-8">
              <li>
                Personal Information: Name, email address, phone number, mailing
                address, and any other information you provide via forms or
                communications.
              </li>
              <li>
                Non-Personal Information: Browser type, device information, IP
                address, and site usage data collected through cookies and other
                tracking technologies.
              </li>
            </ul>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-[20px] font-semibold md:text-2xl">
            2. How We Use Your Information
          </h1>
          <div className="py-5">
            <p className="text-[14] md:text-[16px]">
              We use your information to:
            </p>
            <ul className="list-disc pl-8">
              <li>Provide legal services and respond to your inquiries.</li>
              <li>Improve our website and services.</li>
              <li>
                Send you updates, newsletters, or marketing communications (you
                can opt out anytime).
              </li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-[20px] font-semibold md:text-2xl">
            3. Sharing Your Information
          </h1>
          <div className="py-5">
            <p className="text-[14] md:text-[16px]">
              We do not sell, rent, or share your personal information with
              third parties, except:
            </p>
            <ul className="list-disc pl-8">
              <li>With your consent.</li>
              <li>To comply with legal requirements.</li>
              <li>
                To trusted third-party service providers who assist us in
                delivering our services, under strict confidentiality
                agreements.
              </li>
            </ul>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-[20px] font-semibold md:text-2xl">
            5. Cookies and Tracking Technologies
          </h1>
          <div className="py-5">
            <p className="text-[14] md:text-[16px]">
              We use cookies to improve your experience on our website. Cookies
              allow us to remember your preferences and provide personalized
              content. You can control cookie settings through your browser.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[20px] font-semibold md:text-2xl">
            6. Your Rights
          </h1>
          <div className="py-5">
            <p className="text-[14] md:text-[16px]">You have the right to:</p>
            <ul className="list-disc pl-8">
              <li>Access and update your personal information.</li>
              <li>Request the deletion of your personal data.</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
            <p className="text-[14] md:text-[16px]">
              To exercise your rights, contact us at privacy@nexuslawfirm.com.
            </p>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-[20px] font-semibold md:text-2xl">
            7. Changes to This Policy
          </h1>
          <div className="py-5">
            <p className="text-[14] md:text-[16px]">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with an updated effective date.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[20px] font-semibold md:text-2xl">
            8. Contact Us
          </h1>
          <ul className=" pl-8 pt-5 text-[14px] leading-5 md:text-[16px] md:leading-6">
            <li className="list-disc text-[14] md:text-[16px]">
              Email: contact@nexuslawfirm.com
            </li>
            <li className="list-disc text-[14] md:text-[16px]">
              Phone: +1 (555) 123-4567
            </li>
            <li className="list-disc text-[14] md:text-[16px]">
              Address: 456 Elm Street, Suite 789, Metropolis, NY 10001
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicyCard;
