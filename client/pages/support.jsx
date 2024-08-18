import Navbar from "@/components/postlogin/Navbar";
import { useState } from "react";
const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left py-4 text-lg font-medium flex justify-between items-center"
        onClick={toggle}
      >
        {question}
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="py-2 text-base text-gray-600">{answer}</p>}
    </div>
  );
};

const support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does this do?",
      answer:
        "Instantly turn your lecture into organized notes, flashcards, quizzes, podcasts, and more...",
    },
    {
      question: "Is this legal at my school?",
      answer:
        "Totally: as long as your professor is cool with you audio recording the class...",
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
    <div className="bg-[#ebebe4] absolute h-screen w-screen grid dark:bg-[#2b2a2a]">
      <Navbar />
      <div className=" h-screen w-full grid place-items-center   ">
        <div className=" py-10 mb-8 px-20 w-1/2 mt-12 rounded dark:bg-[#393838ec] dark:text-white bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-8">Questions</h2>
          <div className="max-w-3xl mb-20  grid items-center  mx-auto ">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default support;
