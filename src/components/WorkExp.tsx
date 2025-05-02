import { workExperience } from "@/data";
import Image from "next/image";
import React from "react";

const WorkExp = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-[#cbacf9]">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 ">
        {workExperience.map(({ thumbnail, id, title, desc }) => (
          <div
            className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-7 gap-2 bg-[#0C1327] rounded-3xl  border border-[#041c60]"
            key={id}
          >
            <Image
              src={thumbnail}
              alt={thumbnail}
              width={128} // Assuming 32 * 4 for the largest size (lg)
              height={128} // Assuming a square image, adjust if not
              className="lg:w-32 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {title}
              </h1>
              <p className="text-start text-white-100 mt-3 font-medium text-[#b5b7d3]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
