import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createData, updateData } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";
const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keywords } = useSelector((state) => state.data);

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((i) => i.id == loc));
    }
  }, [loc]);

  const buttonFunc = () => {
    dispatch(createData({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
    setProductInfo({
      name: "",
      price: "",
      url: "",
    });
  };

  const buttonUpdateFunc = () => {
    dispatch(updateData({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };

  const contentModal = (
    <>
      <Input
        value={productInfo?.name}
        placeholder={"Enter a product name"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
        type={"text"}
      />
      <Input
        value={productInfo?.price}
        placeholder={"Enter a price"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
        type={"number"}
      />
      <Input
        placeholder={"Enter a picture"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
        type={"file"}
      />
      <Button
        btnText={loc ? "Update" : "Create"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );

  const filteredData = data.filter((i) =>
    i.name.toLowerCase().includes(keywords.toLowerCase())
  );

  return (
    <div className="flex flex-wrap items-center">
      {filteredData?.map((i) => (
        <ProductCard key={i.name} i={i} />
      ))}
      {modal && (
        <Modal
          title={loc ? "Update Product" : "Create Product"}
          content={contentModal}
        />
      )}
    </div>
  );
};

export default Product;
