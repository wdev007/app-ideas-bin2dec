import { FC } from "react";
import "./styles.css";

interface IProps {
  title?: string;
}

const Card: FC<IProps> = ({ title, children }) => {
  return (
    <div className="card-container with-shadow" data-testid="card">
      {title && (
        <div className="card-header">
          <h3 data-testid="card-title">{title}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
