import Navbar from "@/components/postlogin/Navbar";
import { useState } from "react";
import FAQItem from "@/components/questToggle";

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      question: "How Do i Use it?",
      answer:
        "Just paste the video stuff will be genrated automatically",
    },
    {
      question: "Can i edit Notes",
      answer:
        "Yes Soon we'll be rolling out this feature where you can interactively chat with a guide with context of your notes",
    },
    {
      question: "Is Build My Notes free to use?",
      answer:"Build My Notes offers a freemium model:Free Tier: You can generate notes for up to 3 videos for free.Premium Tier: After the free limit, you can subscribe to a monthly plan to generate unlimited notes."
    },
    {
      question: "Is there an Android app?",
      answer: "Not yet! But join our waitlist for first access.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-[#ebebe4] absolute h-full w-full grid dark:bg-[#2b2a2a]">
      <Navbar/>
      <div className="max-w-md grid font-sans m-auto  h-full  text-black dark:text-white  ">
      <div className="mt-20 shadow-lg md:mt-36  bg-white py-14 px-20 rounded-xl"> 
        <div className="text-3xl w-full font-bold mb-8 text-center">FAQS</div>
        {faq.map((faqs, index) => (
        <FAQItem
          key={index}
          question={faqs.question}
          answer={faqs.answer}
          isOpen={index === openIndex}
          toggle={() => toggleFAQ(index)}
        />
      ))}</div>
      </div>
    </div>
  );
};
export default Support;
