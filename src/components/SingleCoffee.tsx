import { useParams } from "react-router-dom";
import "./SingleCoffee.css";
import { Coffee } from "./App";
import BackButton from "./shared/BackButton";

interface Props {
  data: Coffee[];
}

const SingleCoffee = (props: Props) => {
  const params = useParams<{ id: string }>();
  const coffee = props.data.find((coffee) => String(coffee.id) === params?.id);
  if (!coffee) return null;

  return (
    <div className="singleCoffeeContainer">
      <div className="singleCoffeeContent">
        <img className="singleCoffeImg" src={coffee.image} alt={coffee.title} />
        <div className="coffeeTextContainer">
          <div className="coffeeText">
            <span className="singleCoffeeSpan">Title: </span>
            {coffee.title}
          </div>
          <div className="coffeeText">
            <span className="singleCoffeeSpan">Descripition: </span>
            {coffee.description}
          </div>
          <div className="coffeeText">
            <span className="singleCoffeeSpan">Ingredients: </span>
            {coffee.ingredients}
          </div>
          <BackButton content="Back" />
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
