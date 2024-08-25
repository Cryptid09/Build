import ReviewCard from './ReviewCard';

export default function Reviews() {
  const reviews = [
    {
      review: "...finishing up finals week... 97 on statistics exam, 84% on English Lit, 100% on Spanish final, and 100% on CTE final... it really works.",
      name: "Jamie",
      university: "University of Virginia",
    },
    {
      review: "...94 on Med Term midterm in the midst of playing college baseball. This app is awesome.",
      name: "Casey",
      university: "University of Michigan",
    },
    {
      review: "94 on Psych test after failing midterm. Only thing I did differently was use Coconote. Not kidding.",
      name: "Jordan",
      university: "University of Southern Cal",
    },
    // Add more reviews as needed
  ];

  return (
    <div id='section3' className="bg-gradient-to-b from-purple-700 to-black text-white py-16 transition-all duration-500">
      <h2 className="text-4xl font-bold text-center mb-8">Reviews from the Discord</h2>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review.review}
            name={review.name}
            university={review.university}
          />
        ))}
      </div>
    </div>
  );
}
