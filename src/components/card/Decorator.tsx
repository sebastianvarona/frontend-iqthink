function Decorator() {
  return (
    <div className="h-full flex flex-col justify-between py-2 relative">
      <div className="bg-grayscale-30 rounded-full w-[9px] h-[9px]"></div>
      <div className="h-8 absolute top-3 mb-3 ml-1 w-2 border-l border-dashed border-grayscale-30"></div>
      <div className="bg-grayscale-30 rounded-full w-[9px] h-[9px]"></div>
    </div>
  );
}

export default Decorator;
