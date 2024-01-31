import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchData, sortingData } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3 ">
      <div className="text-2xl">React App</div>
      <div className="flex items-center gap-3">
        <div className="text-black">
          <select
            onClick={(e) => dispatch(sortingData(e.target.value))}
            name=""
            id=""
            className="rounded-lg h-10 px-4"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchData(e.target.value))}
            className="rounded-lg h-10 px-4 text-black"
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
