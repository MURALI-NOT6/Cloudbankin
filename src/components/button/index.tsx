import React from "react";

interface ButtonProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  className = "primayBtn",
  onClick = () => console.log("Button clicked"),
}) => {
  return (
    <div className={className} onClick={onClick}>
      {name}
    </div>
  );
};

export default Button;
