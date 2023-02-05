import { Link } from "react-router-dom";

const MerchandiseCard = ({ el }) => {
  return (
    <div className="card-merch color1">
      <Link to={`/products/${el.id}`}>
        <img src={el.detailImage} />
      </Link>

      <div className="textright-merch">
        <h3>{el.name}</h3>
        <h4>From {el.fanName}! Please click my image to see my product</h4>
      </div>
    </div>
  );
};

export default MerchandiseCard;
