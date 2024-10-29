import Container from "../shared/Container";
import {motion} from "framer-motion"

const PrivacyPolicyCard = () => {
  return (
    <Container>
      <div className="py-10 font-opensans md:py-20">
        <div>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[20px] font-semibold md:text-2xl"
          >
            1. Information We Collect
          </motion.h1>
          <div className="py-5">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[14] md:text-[16px]"
            >
              We may collect the following types of information:
            </motion.p>
            <motion.ul
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="list-disc pl-8"
            >
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
            </motion.ul>
          </div>
        </div>
        <div className="my-5">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="text-[20px] font-semibold md:text-2xl"
          >
            2. How We Use Your Information
          </motion.h1>
          <div className="py-5">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-[14] md:text-[16px]"
            >
              We use your information to:
            </motion.p>
            <motion.ul
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="list-disc pl-8"
            >
              <li>Provide legal services and respond to your inquiries.</li>
              <li>Improve our website and services.</li>
              <li>
                Send you updates, newsletters, or marketing communications (you
                can opt out anytime).
              </li>
              <li>Ensure compliance with legal obligations.</li>
            </motion.ul>
          </div>
        </div>

        <div>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
            className="text-[20px] font-semibold md:text-2xl"
          >
            3. Sharing Your Information
          </motion.h1>
          <div className="py-5">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-[14] md:text-[16px]"
            >
              We do not sell, rent, or share your personal information with
              third parties, except:
            </motion.p>
            <motion.ul
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
              className="list-disc pl-8"
            >
              <li>With your consent.</li>
              <li>To comply with legal requirements.</li>
              <li>
                To trusted third-party service providers who assist us in
                delivering our services, under strict confidentiality
                agreements.
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="my-5">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.7 }}
            viewport={{ once: true }}
            className="text-[20px] font-semibold md:text-2xl"
          >
            5. Cookies and Tracking Technologies
          </motion.h1>
          <div className="py-5">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
              className="text-[14] md:text-[16px]"
            >
              We use cookies to improve your experience on our website. Cookies
              allow us to remember your preferences and provide personalized
              content. You can control cookie settings through your browser.
            </motion.p>
          </div>
        </div>

        <div>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.9 }}
            viewport={{ once: true }}
            className="text-[20px] font-semibold md:text-2xl"
          >
            6. Your Rights
          </motion.h1>
          <div className="py-5">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[14] md:text-[16px]"
            >
              You have the right to:
            </motion.p>
            <motion.ul
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.1 }}
              viewport={{ once: true }}
              className="list-disc pl-8"
            >
              <li>Access and update your personal information.</li>
              <li>Request the deletion of your personal data.</li>
              <li>Opt-out of marketing communications.</li>
            </motion.ul>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.2 }}
              viewport={{ once: true }}
              className="text-[14] md:text-[16px]"
            >
              To exercise your rights, contact us at privacy@nexuslawfirm.com.
            </motion.p>
          </div>
        </div>

        <div className="my-5">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-[20px] font-semibold md:text-2xl"
          >
            7. Changes to This Policy
          </motion.h1>
          <div className="py-5">
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.1 }}
              viewport={{ once: true }}
              className="text-[14] md:text-[16px]"
            >
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with an updated effective date.
            </motion.p>
          </div>
        </div>

        <div>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2 }}
            viewport={{ once: true }}
            className="text-[20px] font-semibold md:text-2xl"
          >
            8. Contact Us
          </motion.h1>
          <motion.ul
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.4 }}
            viewport={{ once: true }}
            className=" pl-8 pt-5 text-[14px] leading-5 md:text-[16px] md:leading-6"
          >
            <li className="list-disc text-[14] md:text-[16px]">
              Email: contact@nexuslawfirm.com
            </li>
            <li className="list-disc text-[14] md:text-[16px]">
              Phone: +1 (555) 123-4567
            </li>
            <li className="list-disc text-[14] md:text-[16px]">
              Address: 456 Elm Street, Suite 789, Metropolis, NY 10001
            </li>
          </motion.ul>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicyCard;
