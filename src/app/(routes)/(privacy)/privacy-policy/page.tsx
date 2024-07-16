import { Metadata } from "next";
import Container from "@/src/components/ui/container";
import { poppins300, poppins600 } from "@/src/app/fonts";

export const metadata: Metadata = {
  title: "Wellness Crunch | Privacy",
  robots: {
    index: false,
    follow: true,
  },
};

const Privacy = () => {
  return (
    <Container>
      <div className={`flex flex-row justify-center max-md:flex-col`}>
        <div className="flex-grow bg-[#D67FD3] md:max-w-[250px] max-md:w-full max-md:h-[120px] flex items-start max-md:items-center justify-center text-white">
          <span className="uppercase transform -rotate-90 max-md:-rotate-0 whitespace-nowrap text-6xl max-md:text-3xl py-80">
            <h3>Privacy Policy</h3>
          </span>{" "}
        </div>
        <div className="w-full max-w-[900px] px-12 max-sm:px-4 py-8">
          <h1 className={`${poppins600.className} text-3xl uppercase`}>
            Privacy Policy
          </h1>
          <p className={`my-4 mt-12 ${poppins300.className} text-base`}>
            Effective Date: July 13, 2024
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>1. Introduction</span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            Welcome to Wellness Crunch. We are committed to protecting your
            privacy and ensuring that your personal information is handled in a
            safe and responsible manner. This Privacy Policy outlines how we
            collect, use, and protect your personal information when you
            subscribe to our health and wellness newsletter.
          </p>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              2. Information We Collect{" "}
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            We may collect the following types of personal information from you:
          </p>{" "}
          <ul className={`ml-5 ${poppins300.className}`}>
            <li className="list-disc">
              Personal Identification Information: Name, email address, and any
              other information you provide when subscribing to our newsletter.
            </li>
            <li className="list-disc">
              Usage Information: Information about how you interact with our
              emails, such as open rates, click-through rates, and browsing
              history on our website.
            </li>
            <li className="list-disc">
              Technical Information: IP address, browser type, operating system,
              and device information.
            </li>
          </ul>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              3. How We Use Your Information
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            We use your personal information for the following purposes:
          </p>
          <ul className={`ml-5 ${poppins300.className}`}>
            <li className="list-disc">
              To Send Newsletters: To deliver our weekly health and wellness
              updates to your email inbox.{" "}
            </li>
            <li className="list-disc">
              To Improve Our Services: To analyze usage trends and enhance the
              content and delivery of our newsletters.
            </li>
            <li className="list-disc">
              For Marketing Purposes: To send you promotional materials and
              updates about our products and services, with your consent.
            </li>
            <li className="list-disc">
              To Comply with Legal Obligations: To fulfill any legal or
              regulatory requirements.
            </li>
          </ul>
          <p className={`mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              4. Sharing Your Information
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            We may share your personal information with:
          </p>
          <ul className={`ml-5 ${poppins300.className}`}>
            <li className="list-disc">
              Service Providers: Third-party vendors who assist us in operating
              our website and delivering our newsletters.{" "}
            </li>
            <li className="list-disc">
              Legal Authorities: When required by law, regulation, or legal
              process.
            </li>
            <li className="list-disc">
              Business Transfers: In the event of a merger, acquisition, or sale
              of all or part of our assets.
            </li>
          </ul>
          <p className={`my-4 mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>5. Data Security</span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            We implement a variety of security measures to protect your personal
            information. However, no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee
            absolute security.
          </p>{" "}
          <p className={`my-4 mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>6. Your Rights </span>
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            You have the following rights regarding your personal information:
          </p>
          <ul className={`ml-5 ${poppins300.className}`}>
            <li className="list-disc">
              Access and Correction: To access and update your personal
              information.{" "}
            </li>
            <li className="list-disc">
              Deletion: To request the deletion of your personal information.
            </li>
            <li className="list-disc">
              Opt-Out: To opt-out of receiving marketing communications from us.
            </li>
            <li className="list-disc">
              Data Portability: To request a copy of your personal data in a
              structured, commonly used, and machine-readable format.
            </li>
          </ul>
          <p className={`my-4 mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>7. Cookies</span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            We use cookies to enhance your experience on our website. Cookies
            are small files stored on your device that help us analyze web
            traffic and improve our services. You can choose to accept or
            decline cookies through your browser settings.
          </p>
          <p className={`my-4 mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>
              8. Changes to This Privacy Policy
            </span>{" "}
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. We
            encourage you to review this Privacy Policy periodically.
          </p>
          <p className={`my-4 mt-6 ${poppins300.className} text-base`}>
            <span className={`${poppins600.className}`}>9. Contact Us</span>
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className={`my-4 mt-6 ${poppins300.className} text-base`}>
            Wellness Crunch
          </p>{" "}
          <p className={`my-2 mt-12 ${poppins300.className} text-base`}>
            wellnesscrunch@gmail.com
          </p>
          <p className={`my-2 ${poppins300.className} text-base`}>
            By subscribing to our newsletter, you agree to the terms of this
            Privacy Policy.
          </p>
          <p className={`my-4 ${poppins600.className} text-base`}>
            By using our services, you agree to the terms of this Privacy
            Policy.
          </p>
        </div>
        <div className="flex-grow bg-[#D67FD3] max-w-[140px]"></div>
      </div>
    </Container>
  );
};

export default Privacy;
