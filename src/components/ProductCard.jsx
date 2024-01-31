import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ i }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${i?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={i?.url} className="w-full h-full rounded-mg" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
        <div className="text-lg font-semibold text-center">{i?.name}</div>
        <div className="text-center">{i?.price} $</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-0 cursor-pointer"
      >
        <BsThreeDots size={30} color={"white"} className="bg-indigo-600 p-1" />
      </div>

      {openEdit && (
        <div className="absolute top-7 right-0 bg-indigo-600 p-2 text-white text-sm">
          <div
            onClick={() => dispatch(deleteData(i?.id))}
            className="cursor-pointer hover:opacity-60"
          >
            Delete
          </div>
          <div
            onClick={updateFunc}
            className="cursor-pointer mt-2 hover:opacity-60"
          >
            Update
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
