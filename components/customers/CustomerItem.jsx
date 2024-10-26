import Image from "next/image";
import React from "react";

const CustomerItem = ({imgSrc}) => {
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-md">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          quisquam porro aut? A quasi minus architecto delectus autem excepturi
          voluptatum amet, natus qui et, tempora soluta debitis quod deleniti
          assumenda!
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">Michell Moana</span>
          <span className="text-sm">Magna Aliqua</span>
        </div>
      </div>

      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-7 before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5">
        <Image
          alt=""
          src={imgSrc}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
