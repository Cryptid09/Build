export default function ReviewCard({ review, name, university }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-80 shadow-md m-4">
      <div className="text-xl mb-4">★★★★★</div>
      <p className="text-base mb-4">{review}</p>
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm text-gray-400">{university}</div>
    </div>
  );
}
