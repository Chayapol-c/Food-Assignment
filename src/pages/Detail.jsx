import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";

const Detail = () => {
  const { menuId } = useParams();
  const [menu, setMenu] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const baseURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?";

  const getDetail = async (e) => {
    try {
      const res = await axios.get(baseURL, { params: { i: menuId } });
      const data = await res.data.meals[0];
      setMenu(data);
      const ingredientKeys = await Object.keys(data).filter((key) =>
        key.includes("strIngredient")
      );
      let newIngredients = [];
      for (const key in data) {
        if (ingredientKeys.includes(key) && data[key]) {
          console.log(`${key}: ${data[key]}`);
          newIngredients.push(data[key]);
        }
      }
      setIngredients(newIngredients);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      {Object.keys(menu).length > 0 && (
        <DetailCard menu={menu} ingredients={ingredients} />
      )}
    </div>
  );
};

export default Detail;
