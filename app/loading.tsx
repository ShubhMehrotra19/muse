const Example = () => {
    return (
      <div>
        <CutoutTextLoader
          height="450px"
          background="white"
          imgUrl="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    );
  };
  
const CutoutTextLoader = ({
    height,
    background,
    imgUrl,
}: {
    height: string;
    background: string;
    imgUrl: string;
}) => {
    return (
      <div className="relative w-screen h-screen flex justify-center items-center" style={{ height }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div
          style={{ background }}
          className="absolute inset-0 animate-pulse z-10"
        />
        <span
          className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            fontSize: "clamp(3rem, 12vw, 10rem)",
            lineHeight: height,
          }}
        >
          Loading...
        </span>
      </div>
    );
  };
  
  export default Example;