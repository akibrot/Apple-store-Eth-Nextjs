import React from "react";

function ListItems({name,selected,setselecedhabdler}) {
  return (
    <div
      className={
        selected==name
          ? "menu bg-[#35383c] rounded-tr rounded-tl cursor-pointer border-b-2 border-b-red-300"
          : "menu  rounded-tr rounded-tl cursor-pointer"
      }
    >
      <button className="p-5 px-6 text-white" onClick={()=>setselecedhabdler(name)}>
        {name}
      </button>
    </div>
  );
}

export default ListItems;
