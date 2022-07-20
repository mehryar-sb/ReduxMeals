import React from "react";

const CardDetails = () => {
  return (
    <div className="items-center hidden px-4 py-2 text-white xl:flex-col xl:flex gap-7 details rounded-xl bg-zinc-900">
      <h2>Lorem ipsum dolor, sit amet.</h2>

      <div className="flex flex-col gap-3">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          doloremque veniam, molestias deserunt necessitatibus sint rerum
          accusamus ab commodi architecto?
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ad
          quidem fugiat ipsam consequuntur consequatur pariatur totam nesciunt
          perferendis error!
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
