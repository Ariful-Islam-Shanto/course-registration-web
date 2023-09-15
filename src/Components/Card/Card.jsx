const Card = ({ course }) => {
  const { id, title, img, description, price, credit_hours } = course;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="image"
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div>
            <p>$</p>
            <h3>Price: {price}</h3>
            <h3>Credit: {credit_hours}hr </h3>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
