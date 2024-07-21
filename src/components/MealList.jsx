import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function MealList() {
  const data = useLoaderData();

  return (
    <>
      <div className="flex gap-3 pb-10 justify-center flex-col p-9">
        {data.map((info) => {
          return (
            <div
              key={info.id}
              className="card flex-row items-center  gap-5 w-106 font-bold  glass bg-emerald-500 p-3 text-indigo-800 "
            >
              <h1 className=" text-3xl font-bold text-center w-40 text-gray-700 ">
                {info.title}
              </h1>
              <p>
                <span className=" text-gray-200 line-clamp-3 w-full">
                  {info.mathod}
                </span>{" "}
              </p>
              <p className=" w-20">
                🕔
                <span className=" text-gray-200">
                  {info.cookingTime}
                </span>{" "}
              </p>
              <img src={info.image} alt="" width="200" height="200" />

              <Link
                className="btn btn-primary w-20 ml-auto  "
                to={`/Meal/${info.title}`}
              >
                o'qish
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MealList;
