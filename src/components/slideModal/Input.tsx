import { ChangeEventHandler } from 'react';

function Input(props: {
  label: string;
  name: string;
  value: string;
  handler: ChangeEventHandler;
}): JSX.Element {
  return (
    <label className="flex flex-col gap-1 text-xs mb-4">
      {props.label}
      <input
        type="text"
        onChange={props.handler}
        name={props.name}
        value={props.value}
        className="border border-grayscale-90 rounded-md p-3 text-sm focus:outline-2 focus:outline-primary"
      />
    </label>
  );
}

export default Input;
