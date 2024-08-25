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
  export default FAQItem