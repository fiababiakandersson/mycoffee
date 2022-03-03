import "./SingleCoffee.css";
import { Coffee } from "./App";
import { useParams } from "react-router-dom";
import BackButton from "./shared/BackButton";
import HeartIcon from "./HeartIcon";

interface Props {
  coffees: Coffee[];
  onLikeChange: (id: string) => void;
}

const SingleCoffee = (props: Props) => {
  const params = useParams<{ id: string }>();
  const coffee = props.coffees.find(
    (coffee) => String(coffee.id) === params?.id
  );
  if (!coffee) return null;

  return (
    <div className="singleCoffeeContainer">
      <div className="content">
        <div className="image-container">
          <img src={coffee.image} alt={coffee.title} />
          <div className="heart">
            <HeartIcon
              isLiked={coffee.isLiked}
              onLiked={() => props.onLikeChange(coffee.id)}
            />
          </div>
        </div>
        <div className="text-container">
          <div className="text">
            <span className="span">Title: </span>
            <p>{coffee.title}</p>
          </div>
          <div className="text">
            <span className="span">Descripition: </span>
            <p>{coffee.description}</p>
          </div>
          <div className="text">
            <span className="span">Ingredients: </span>
            <p>
              <span className="sep-line">|</span>
            </p>
            {coffee.ingredients.map((ingredient) => (
              <p key={ingredient}>
                &nbsp; {ingredient} <span className="sep-line">|</span>
              </p>
            ))}
          </div>
          <BackButton content="Back" />
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
