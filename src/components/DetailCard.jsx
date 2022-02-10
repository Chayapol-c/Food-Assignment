import React from "react";

const DetailCard = ({menu, ingredients}) => {
  return (
    <div className="w-[25rem] h-full rounded-2xl bg-white overflow-hidden">

        <img src={menu.strMealThumb} alt="menu" className="w-full h-[15rem] object-cover" />
      <div className="p-6">
        <h1 className="font-bold text-3xl mb-5">{menu.strMeal}</h1>
        <div>
          <h2 className="font-bold text-xl mb-5">Ingredients</h2>
          <ul className="grid auto-rows-auto grid-cols-2">
            {ingredients.map((ele, i) => (
              <li key={i} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
