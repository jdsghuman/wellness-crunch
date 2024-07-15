import Container from "@/src/components/ui/container";
import { poppins300, poppins600 } from "@/src/app/fonts";

const FAQ = () => {
  return (
    <Container>
      <div className={`flex flex-row justify-center max-md:flex-col`}>
        <div className="flex-grow bg-[#D67FD3] md:max-w-[250px] max-md:w-full max-md:h-[120px] flex items-start justify-center text-white">
          <span className="uppercase transform -rotate-90 max-md:-rotate-0 whitespace-nowrap text-6xl max-md:text-3xl py-80">
            <h3>faq</h3>
          </span>{" "}
        </div>
        <div className="w-full max-w-[900px] px-12 max-sm:px-4 py-8">
          <h1 className={`${poppins600.className} text-3xl uppercase`}>
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className={`mt-4 mt-12 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              1. What is Wellness Crunch?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            Wellness Crunch is a digital email marketing service dedicated to
            bringing you the latest health and wellness news, trends, and
            product recommendations. We provide quick, 5-minute weekly updates
            to help you live a healthier life.
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              2. How often will I receive emails from Wellness Crunch?{" "}
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            You will receive our newsletters once a week, packed with concise
            and digestible information to keep you informed about the latest in
            health and wellness.
          </p>{" "}
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              3. How do I subscribe to the Wellness Crunch newsletter?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            To subscribe, simply visit our website and enter your email address
            in the subscription box. Follow the instructions to confirm your
            subscription, and you’ll start receiving our weekly updates.
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              4. Is my personal information safe with Wellness Crunch?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            Yes, we take your privacy seriously and implement various security
            measures to protect your personal information. For more details,
            please refer to our Privacy Policy.
          </p>{" "}
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              5. Can I unsubscribe from the newsletter?{" "}
            </span>
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            Yes, you can unsubscribe at any time by clicking the “unsubscribe”
            link at the bottom of any of our emails. Follow the instructions to
            remove your email address from our mailing list.{" "}
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              6. What type of content can I expect in the newsletter?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            Our newsletters include the latest health and wellness news, trends,
            and product recommendations. We focus on providing concise,
            evidence-based information to help you make informed decisions for a
            healthier life.
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              7. Are the health tips and product recommendations evidence-based?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            Yes, our team diligently sifts through data, recent research, and
            the latest trends to ensure that the information and recommendations
            we provide are evidence-based and reliable.
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              8. Can I share the newsletter with friends and family?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            Absolutely! We encourage you to share our newsletters with anyone
            who might benefit from our health and wellness insights. They can
            also subscribe to receive their own weekly updates.
          </p>{" "}
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              9. How can I contact Wellness Crunch for more information or
              support?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            If you have any questions or need support, you can contact us via
            email at wellnesscrunch@gmail.com. We are here to help!
          </p>{" "}
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              10. Do you offer any discounts or special promotions?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            From time to time, we offer special promotions and discounts. Sign
            up for our newsletter and follow us on social media to stay updated
            on the latest deals and offers.
          </p>{" "}
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              11. Can I suggest topics for the newsletter?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            We value your feedback and welcome topic suggestions! Please contact
            us with your ideas, and our team will consider them for future
            newsletters.
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              12. What if I have trouble receiving the newsletters?
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            If you’re having trouble receiving our emails, please check your
            spam or junk folder. You can also add our email address to your
            contacts or whitelist to ensure delivery. If the issue persists,
            please contact our support team for assistance or by emailing
            wellnesscrunch@gmail.com.
          </p>
        </div>
        <div className="flex-grow bg-[#D67FD3] max-w-[140px]"></div>
      </div>
    </Container>
  );
};

export default FAQ;
