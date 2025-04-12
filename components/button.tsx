export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative px-4 py-2 font-tomorrow text-sm font-medium">
      <div className="absolute inset-0">
        <div className=" rounded-full absolute inset-0 border border-white/20"></div>
        <div className=" rounded-full absolute inset-0 border border-white/40"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(169,32,0,0.7)_inset] rounded-full"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};
