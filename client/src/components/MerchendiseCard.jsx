import { Link } from "react-router-dom";

const MerchandiseCard = ({ el }) => {
  return (
    <div className="card-merch color1 font-display rounded-lg shadow-2xl">
      <Link to={`/products/${el.id}`}>
        <img src={el.detailImage} />
      </Link>

      <div className="textright-merch">
        <h3>{el.name}</h3>
<<<<<<< HEAD
        <p className="font-Montserrat text-xs">
          From {el.fanName}! Please click my image to see my product
        </p>
=======
        <p className="font-display text-xs">From {el.fanName}! Please click my image to see my product</p>
>>>>>>> finisting_client_3
      </div>
    </div>
  );
};

export default MerchandiseCard;
