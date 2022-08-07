function Decorator(): JSX.Element {
  return (
    <div className="h-full w-16 pl-5 flex flex-col justify-between items-center relative">
      <div className="bg-grayscale-90 rounded-full w-[14px] h-[14px] mt-10"></div>
      <div className="h-20 absolute top-10 mb-3 ml-[6px] w-2 border-l border-dashed border-grayscale-90"></div>
      <div className="bg-grayscale-90 rounded-full w-[14px] h-[14px] mb-11"></div>
    </div>
  );
}

export default Decorator;
