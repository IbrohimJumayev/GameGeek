

const ProductFilter = ({ filter, setFilter }) => {
  


  return (
    <div>
      <div className="flex justify-between px-16 bg-filtredBack text-filtered py-5 max-sm:px-5 max-sm:py-2 text-2xl mt-10 max-sm:text-lg items-center">
        <p>Filter by:</p>
        <div className="flex items-center">
          <button
            onClick={() => setFilter(!filter)}
            className="flex items-center gap-1"
          >
            <span className="material-symbols-outlined duration-200">
              {filter ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
            Sort By Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
