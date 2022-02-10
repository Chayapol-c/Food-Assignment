import { useState } from "react"
import axios from "axios"
import Card from "./Card"
import { FiSearch } from "react-icons/fi"

const SearchForm = () => {
  const [query, setQuery] = useState("")
  const [menus, setMenus] = useState([])

  const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?"

  const getMenus = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(baseURL, {params: {s: query}})
      const data = await res.data.meals
      setMenus(data)
    }
    catch (error){
      console.error(error)
    }
  }


  return (
    <>
      <form
        action="" 
        className="mb-20 flex items-center bg-white rounded-md"
        onSubmit={getMenus}>
          <div className="px-3">
              <FiSearch 
                fontSize={20}
                className="text-gray-400"
              />
          </div>
          <input 
            type="text" 
            name="query"
            className="px-4 py-2 flex-1"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for Meal..." />
          <button
            type="submit"
            className="bg-purple-900 text-white rounded-r-md px-4 py-2 w-full h-full"
          >Search</button>
      </form>
      
      <div className="grid grid-cols-4 auto-cols-auto gap-6 ">
        {menus.length > 0 &&
          menus.map((e , i) => (
          <Card key={i} img={e.strMealThumb} name={e.strMeal} menuId={e.idMeal} />
        ))}
      </div>
    </>
);
};

export default SearchForm;
