import gotcha from "../assets/gotcha.jpg";

function Gotcha() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>Gotcha!</h1>
      <img style={{ width: "50%" }} src={gotcha} alt="" />
    </div>
  );
}

export default Gotcha;
