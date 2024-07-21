//components
import MealGrid from "./MealGrid";
import MealList from "./MealList";
//react icons
import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";

function MealContainer() {
  const [layoutState, setLayoutState] = useState("grid");

  const activeStyle = (layout) => {
    return layoutState === layout
      ? "btn btn-circle bg-red"
      : "btn btn-circle bg-blue";
  };

  const handleLayoutChange = (layout) => {
    setLayoutState(layout);
  };
  const { data } = useCollection();
  return (
    <>
      {!data && (
        <h3 className="text-center mb-10 mt-16 font-bold text-slate-300">
          Loading ...
          <span className="loading loading-spinner loading-md "></span>
        </h3>
      )}

      <div className="mb-5 border-b py-3 flex justify-between items-center p-9">
        <h3 className="font-medium text-2xl">Meals {data && data.length} </h3>
        <div className="flex gap-3">
          <button
            className={activeStyle("grid")}
            onClick={() => handleLayoutChange("grid")}
            id="grid"
          >
            <TbLayoutGrid className="w-7 h-7" />
          </button>
          <button
            className={activeStyle("list")}
            onClick={() => handleLayoutChange("list")}
            id="list"
          >
            <TbLayoutList className="w-7 h-7" />
          </button>
        </div>
      </div>
      {layoutState === "grid" ? <MealGrid /> : <MealList />}
    </>
  );
}

export default MealContainer;
