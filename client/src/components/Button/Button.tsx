import React from "react";

export enum ButtonState {
  Primary = "Primary",
  Loading = "Loading",
}

interface ButtonProps {
  readonly buttonState: ButtonState;
  readonly onClick: () => void;
  readonly label: string;
}

export const Button: React.FC<ButtonProps> = ({
  buttonState,
  onClick,
  label,
}) => {
  const isLoading = buttonState === ButtonState.Loading;
  return (
    <div>
      <button onClick={onClick} type='button'>
        {!isLoading && label}
      </button>
    </div>
  );
};
