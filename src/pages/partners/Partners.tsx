import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Placeholder } from "semantic-ui-react";
import { getAllPartners } from "../../services/partners";
import { usePartners } from "./PartnersVm";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Partners() {
  const { parnters, updatePartners } = usePartners();
  const placeholderArray = new Array(20).fill(0);
  useEffect(() => {
    getAllPartners().then((data) => {
      updatePartners(data);
    });
  }, []);
  return (
    <div>
      {/* Images */}
      <div className="">
        {parnters.length > 0 ? (
          <div className="flex flex-row flex-wrap items-center gap-5">
            {parnters.map((_parnter, index) => (
              <div className="p-5 shadow-lg rounded-lg relative" key={index}>
                <div className="w-full px-10 absolute flex justify-end z-20">
                  <RiDeleteBin6Fill className="text-red-700 text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:opacity-30" />
                </div>
                <LazyLoadImage
                  src={_parnter.img}
                  className="w-20 h-20 object-contain lg:w-56 lg:h-56 "
                  effect="blur"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row flex-wrap items-center gap-5">
            {placeholderArray.map((_, key) => (
              <Placeholder className=" p-8 shadow-lg rounded-lg" key={key}>
                <Placeholder.Image className="w-60 h-60 object-contain" />
              </Placeholder>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
