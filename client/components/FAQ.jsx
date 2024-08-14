import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left py-4 text-lg font-medium flex justify-between items-center"
        onClick={toggle}
      >
        {question}
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="py-2 text-base text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What does Coconote do?',
      answer: 'Instantly turn your lecture into organized notes, flashcards, quizzes, podcasts, and more...',
    },
    {
      question: 'Is this legal at my school?',
      answer: 'Totally: as long as your professor is cool with you audio recording the class...',
    },

  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Questions</h2>
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
  );
};

export default FAQ;

