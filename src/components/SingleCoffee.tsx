import { useParams } from "react-router-dom";
import { JSONValues } from "./App";

interface Props {
  data: JSONValues;
}

const SingleCoffee = (props: Props) => {
  const id = useParams() as unknown as number;
  console.log(id);
  console.log(props.data[id].description);
  return (
    <div>
      <h1>hello world + {id} </h1>
      {/* <p>{props.data[id].title}</p> */}
    </div>
  );
};

export default SingleCoffee;
