import { Link } from "react-router-dom"

const Card = ({menuId, img, name}) => {
  return (
    <Link to={`/menu/${menuId}`}>
        <div className="flex flex-col justify-center items-center bg-white rounded-2xl overflow-hidden cursor-pointer">
            <img src={img} alt="menus" />
            <p className="font-bold capitalize p-4">
                {name}
            </p>
        </div>
    </Link>
    );
};

export default Card;
