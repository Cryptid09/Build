
export default function SingleCard({ icon, title, description }) {
  return (
    <div className="bg-white bg-opacity-5 rounded-xl p-6 flex flex-col items-center shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-center text-gray-300">{description}</p>
    </div>
  );
}
