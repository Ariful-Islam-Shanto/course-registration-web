const Card = ({ course, handleCreditHour }) => {
  const { id, title, img, description, price, credit_hours } = course;

  return (
    <div>
      <div className="rounded-xl bg-white w-full p-4 md:p-2 lg:p-2 xl:p-4 shadow-xl space-y-5 lg:h-[400px] xl:h-full">
        <img className="rounded-xl w-full md:h-[150px] lg:h-[150px] xl:h-[200px]" src={img} alt="" />
        <div className=" space-y-4">
          <h2 className="md:text-sm lg:text-sm xl:text-lg text-black font-bold">{title}</h2>
          <p className="md:text-xs lg:text-xs xl:text-sm">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 md:text-xs md:xs lg:text-xs xl:text-sm">
              <i class="fa-light fa-dollar-sign"></i>
              <h3 className="md:text-xs lg:text-xs xl:text-sm">Price: {price}</h3>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:w-6 lg:w-4 xl:w-6 md:h-6 lg:h-4 xl:h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <h3 className="md:text-xs lg:text-xs xl:text-sm" >Credit: {credit_hours}hr </h3>
            </div>
          </div>
          <div>
          <button
            onClick={() => handleCreditHour(price, credit_hours, title)}
            className="w-full btn bg-blue-700 text-white"
          >
            Select
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
