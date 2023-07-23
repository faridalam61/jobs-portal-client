import React from "react";
import useTitle from "../../Hooks/useTitle";
import TitleSection from "../../Components/TitleSection/TitleSection";
import aboutImg from "../../../public/img-about.png";

function About() {
  useTitle("About Us");
  return (
    <div>
      <TitleSection
        title="About Us"
        description="Get the latest news, updates and tips"
      />
      <div className="container mx-auto py-10 flex gap-10">
        <div className="w-2/5">
          <img src={aboutImg} />
        </div>
        <div className="w-3/5">
          <p className="mb-3">
            At JobBox, we are committed to transforming the job-seeking
            experience by providing a seamless platform that connects talented
            individuals with their dream careers and employers with their
            perfect candidates. Our mission is to bridge the gap between
            opportunities and aspirations, empowering job seekers and employers
            alike to achieve their professional goals.
          </p>
          <h2 className="text-xl mt-4">Our Vision</h2>
          <p className="mt-3">
            Our vision is to create a global community where job seekers can
            explore, grow, and thrive in their careers, while employers can
            discover exceptional talent to drive their businesses forward. We
            envision a world where every individual has the opportunity to find
            fulfilling work that aligns with their passions and skillsets,
            fostering a harmonious and prosperous society.
          </p>
          <h2 className="text-xl mt-4">Why Choose JobBox?</h2>
          <p className="mt-3">
            <u>Extensive Job Opportunities:</u> With an extensive network of
            trusted partners and employers, we offer a vast array of job
            opportunities across various industries and domains. Whether you're
            a recent graduate, a seasoned professional, or someone looking for a
            career change, YourJobPortal.com has something to offer for
            everyone.
          </p>
          <p className="mt-3">
            <u>User-Friendly Interface:</u>
            We understand the importance of simplicity and efficiency when it
            comes to job hunting. Our user-friendly interface ensures a seamless
            browsing experience, making it easy for job seekers to search,
            filter, and apply for jobs that match their preferences.
          </p>
          <p className="mt-3">
            <u>Tailored Job Recommendations:</u>
            Through advanced algorithms and personalized profiling, we present
            job seekers with tailored job recommendations that match their
            skills, experience, and interests. Say goodbye to scrolling through
            irrelevant listings and let us bring the best opportunities to your
            fingertips.
          </p>
          <p className="mt-3">
            <u>Verified Employers: </u>
            JobBpx partners only with reputable employers who meet our strict
            criteria, ensuring that job seekers have access to genuine and
            reliable job postings. We prioritize your safety and strive to
            maintain a secure
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
