import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addFavorite } from "../stores/actionCreator/talentsCreator";

const TalentCard = ({ el }) => {
  const dispatcher = useDispatch();
  let navigate = useNavigate();

  function handleAddFavorite(IdolId) {
    dispatcher(addFavorite(IdolId));
    navigate("/favorites");
  }
  return (
    <div className="card-talents" key={el.id}>
      <img src={el.profileImage} />
      <div className="content-talents">
        <div className="row-talents">
          <div className="detail-talents">
            <span>{el.name}</span>
            <p>
              “Hey, {el.fanName}! How are you all doing? It's me, {el.name}”
            </p>
          </div>
          <div className="buttons-talents">
            <Link to={`/detail/${el.id}`}>
              <img
                src="https://www.freeiconspng.com/thumbs/details-icon/view-details--icon--download-free-icons-0.jpg"
                style={{
                  width: "50px",
                  cursor: "pointer",
                  float: "left",
                }}
              />
            </Link>
            <a onClick={() => handleAddFavorite(el.id)}>
              <img
                src="https://icon-library.com/images/love-icon-png/love-icon-png-9.jpg"
                style={{
                  width: "30px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
