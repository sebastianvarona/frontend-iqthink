type ButtonProps = {
  text: string;
};

function Button(props: ButtonProps): JSX.Element {
  return (
    <div className="bg-purple-700 px-4 py-2 text-sm font-semibold text-white rounded-full">
      {props.text}
    </div>
  );
}

export default Button;
