import { Link } from "react-router-dom";

const MerchandiseCard = ({ el }) => {
  return (

    
    <div className="card-merch color1 font-display">
      <Link to={`/products/${el.id}`}>
        <img src={el.detailImage} />
      </Link>

      <div className="textright-merch">
        <h3>{el.name}</h3>
        <p className="font-Montserrat text-xs">From {el.fanName}! Please click my image to see my product</p>
      </div>
    </div>
  );
};

export default MerchandiseCard;
