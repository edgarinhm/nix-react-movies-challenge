import { AiFillStar } from "react-icons/ai";
import "./stars-rating.css";

const StarsRanking = ({ rating }) => {
  const averageRate = rating ?? 0 / 10;
  console.log("avereage", averageRate);
  return (
    <span className="stars-rating-container">
      {Array.from({ length: 5 }).map((start, index) => (
        <AiFillStar
          key={`${rating}-star-icon-${index}-${start}`}
          className="star-rating"
          fill={(index + 1) / 5 <= averageRate ? "gold" : "#D6DBDF"}
        />
      ))}
    </span>
  );
};

export default StarsRanking;
