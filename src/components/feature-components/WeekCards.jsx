const WeekCards = () => {
  // Example weather data array
  const fixedLengthArray = Array.from({ length: 6 });
  return (
    <div className="flex flex-wrap justify-between h-52 relative p-6">
      {fixedLengthArray.map((index) => (
        <div
          key={index}
          className="bg-white p-2 rounded-lg shadow-md mb-4 flex flex-col ">
          <h2 className="text-lg font-semibold">day</h2>
          <p className="text-sm"> icon</p>
          <p className="text-sm">Temperature:: </p>
        </div>
      ))}
    </div>
  );
};

export default WeekCards;
