import { useQuery } from "@tanstack/react-query";
import React from "react";

const Research = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["researches"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/api/research/allresearch",
        {
          method: "GET",
        }
      );
      const responseData = await res.json();
      return responseData.data;
    },
  });

  console.log(data);

  return (
    <div>
      <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:py-20">
        {data?.map((research) => (
          <div className="dark:bg-gray-800 dark:text-gray-100 my-3">
            <div className="container max-w-4xl px-4 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 grid grid-cols-1 md:grid-cols-6 gap-6">
              <div className="md:col-span-3">
                {/* Existing content */}
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-gray-400">
                    Jun 1, 2020
                  </span>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
                  >
                    CeMRD
                  </a>
                </div>
                <div className="mt-3">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-2xl font-bold hover:underline"
                  >
                    {research.challangeTitle}
                  </a>
                  <p className="mt-2">{research.challangeDescription}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline dark:text-violet-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="md:col-span-3">
                {/* Image */}
                <img
                  src="https://i.ibb.co/kQZtgXt/pexels-pixabay-260561.jpg"
                  alt="Description of the image"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
