import React from "react";
const PoliCard = React.memo(({ name, image, position, biography }) => {
  console.log("card");
  return (
    <div className="col-4">
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>
          <strong>{position}</strong>
        </p>
        <p>{biography}</p>
      </div>
    </div>
  );
});
export default PoliCard;
