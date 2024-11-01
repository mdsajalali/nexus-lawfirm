import Container from "../shared/Container";
import { motion } from "framer-motion";

const termsData = [
  {
    title: "1. Legal Advice Disclaimer",
    content:
      "The information provided on this website is for general informational purposes only and does not constitute legal advice. Contacting us through the website does not create an attorney-client relationship.",
  },
  {
    title: "2. Use of Our Services",
    content:
      "You agree to use our services and website only for lawful purposes and in compliance with all applicable laws. You must not use our services to infringe on any third-party rights or distribute unlawful content.",
  },
  {
    title: "3. Intellectual Property",
    content:
      "All content, design, logos, and materials on this site are the property of Nexus Law Firm and are protected by copyright and intellectual property laws. You may not reproduce or distribute any content without written permission.",
  },
  {
    title: "4. Limitation of Liability",
    content:
      "Nexus Law Firm is not liable for any damages arising from the use or inability to use our services, including any indirect, incidental, or consequential damages.",
  },
  {
    title: "5. Privacy",
    content:
      "We take your privacy seriously. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.",
  },
  {
    title: "6. Changes to the Terms",
    content:
      "We reserve the right to update or modify these Terms of Service at any time without prior notice. By continuing to use our services after changes are posted, you agree to the revised terms.",
  },
];

const TermsServiceCard = () => {
  return (
    <Container>
      <div className="py-10 font-opensans md:py-20">
        {termsData.map((term, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="my-4 md:my-7"
          >
            <h1 className="text-[20px] font-semibold md:text-2xl">
              {term.title}
            </h1>
            <p className="pt-3 text-[14px] leading-5 md:pt-5 md:text-[16px] md:leading-6">
              {term.content}
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[20px] font-semibold md:text-2xl">
            7. Contact Us
          </h1>
          <ul className=" pl-5 pt-5 text-[14px] leading-5 md:text-[16px] md:leading-6">
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
        </motion.div>
      </div>
    </Container>
  );
};

export default TermsServiceCard;
