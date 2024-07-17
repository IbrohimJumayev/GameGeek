import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";

const FilterAside = ({ colors, brands }) => {
  return (
    <div className="w-64 max-sm:w-full ml-0 mt-14 font-readex max-sm:ml-0 max-sm:px-5 ">
      <div className="border-t-2 border-dashed border-filterBorder pt-7 pb-7 pr-16">
        <BrandFilter brands={brands} />
      </div>
      <div className="border-y-2 border-dashed border-filterBorder pt-7 pb-7">
        <ColorFilter colors={colors} />
      </div>
    </div>
  );
};

export default FilterAside;
