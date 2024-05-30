const Imageproduct = ({ mainImage, secondImage }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid purple",
      }}
    >
      <img src={mainImage} alt="" className="firstImage" />
      <img src={secondImage} alt="" className="secondImage" />
    </div>
  );
};
export default Imageproduct;
