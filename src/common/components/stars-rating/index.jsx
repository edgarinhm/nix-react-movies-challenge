import { AiFillStar } from "react-icons/ai";
import "./stars-rating.css";

const StarsRanking = ({ rating }) => {
  const averageRate = (rating ?? 0) / 10;
  return (
    <span className="stars-rating-container">
      {Array.from({ length: 5 }).map((start, index) => {
        const isStarFill = (index + 1) / 5 <= averageRate;
        return (
          <AiFillStar
            key={`${rating}-star-icon-${index}-${start}`}
            className="star-rating"
            fill={isStarFill ? "gold" : "#D6DBDF"}
            data-testid={`star-${isStarFill ? "fill" : "empty"}`}
          />
        );
      })}
    </span>
  );
};

export default StarsRanking;
