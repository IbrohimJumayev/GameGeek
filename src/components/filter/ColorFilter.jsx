const ColorFilter = ({ colors }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">COLORS</h1>
      <div className="flex flex-wrap gap-2">
        {colors.map((c, index) => (
          <li
            className="list-none flex duration-300 cursor-pointer"
            key={index}
          >
            <span
              style={{ background: c }}
              className="rounded-full border-2 w-2 h-2 px-4 py-4"
            ></span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
