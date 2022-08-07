import { MouseEventHandler } from 'react';

type ButtonProps = {
  text: string;
  handler?: MouseEventHandler<HTMLButtonElement>;
};

function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      onClick={props.handler}
      className="bg-[#5D11BD] hover:bg-[#5D11BD]/80 transition-colors cursor-pointer px-4 py-2 text-center text-sm font-semibold text-white rounded-full"
    >
      {props.text}
    </button>
  );
}

export default Button;
