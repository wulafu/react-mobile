import svg from "./404.svg";

const NoMatch = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img style={{ width: "60%", pointerEvents: "none" }} src={svg} alt="" />
    </div>
  );
};

export default NoMatch;
