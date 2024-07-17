import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";

const FilterAside = ({
  colors,
  brands,
  selectedColor,
  setSelectedColor,
  setSelectedBrand,
  selctedBrand,
}) => {
  return (
    <div className="w-64 max-sm:w-full ml-0 mt-14 font-readex max-sm:ml-0 max-sm:px-5 ">
      <div className="border-t-2 border-dashed border-filterBorder pt-7 pb-7 pr-16">
        <BrandFilter
          brands={brands}
          selctedBrand={selctedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      </div>
      <div className="border-y-2 border-dashed border-filterBorder pt-7 pb-7">
        <ColorFilter
          colors={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>

      <button
        className="border-2 px-4 py-2 rounded-lg border-green-500 mt-5 mb-5
        hover:bg-green-500 duration-300 hover:text-white"
        onClick={() => {
          setSelectedBrand(""), setSelectedColor("");
        }}
      >
        Reset Filter
      </button>
    </div>
  );
};

export default FilterAside;
