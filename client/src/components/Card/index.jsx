import React from "react";
import { ClockIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDonation, reset } from "../../store/donations/dSlice";
import { toast } from "react-toastify";

const Card = ({ project, index }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.dSlice
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      setValue("");
    }
    if (isSuccess) {
      toast.success(message);
      setValue("");
    }
    dispatch(reset());
  }, [message, isError, isSuccess, isLoading, dispatch]);

  const sendValue = () => {
    const data = {
      index,
      value,
    };
    dispatch(createDonation(data));
  };

  return (
    <>
      {/* <div className="card">
        <div className="m-12">
          <span className="font-bold text-body text-gray-500">
            {project.name}
          </span>
          <span className="block text-sm font-extralight">
            {project.expectedAmt} ethers to be raised
          </span>
          <span className="block text-sm font-extralight">
            {project.realizeAmt} ethers donated
          </span>
          <div className="badge p-2">
            <ClockIcon className="w-4 inline-block stroke-white"></ClockIcon>{" "}
            {new Date(project.startDate * 1000).getDate() -
              new Date().getDate() <=
            0 ? (
              <>
                <span className="text-xs text-white font-bold">ongoing</span>
              </>
            ) : (
              <>
                <span className="text-xs text-white font-bold">
                  {new Date(project.startDate * 1000).getDate() -
                    new Date().getDate()}{" "}
                  day(s) to start
                </span>
              </>
            )}
          </div>

          {new Date(project.startDate * 1000).getDate() -
            new Date().getDate() <=
          0 ? (
            <div>
              <label className="text-gray-500 text-sm font-bold m-2">
                <span>Donate</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full m-2 p-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="5 wei"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="p-2">
                <button
                  onClick={sendValue}
                  className="bg-primary p-2 rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div> */}

      <div class="px-4">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          {/* status */}
          <div class="flex items-baseline">
            <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              {new Date(project.startDate * 1000).getDate() -
                new Date().getDate() <=
              0 ? (
                <>Ongoing</>
              ) : (
                <>
                  starts in
                  {new Date(project.startDate * 1000).getDate() -
                    new Date().getDate()}{" "}
                  day(s)
                </>
              )}
            </span>
            {/* <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                      2 baths &bull; 3 rooms
                    </div> */}
          </div>

          {/* project name */}
          <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
            {project.name}
          </h4>

          {/* ethers expected */}
          <div class="mt-1">
            {project.expectedAmt}
            <span class="text-gray-600 text-sm"> Ethers (expectation)</span>
          </div>

          {/* ethers raised */}
          <div class="mt-4">
            <span class="text-teal-600 text-md font-semibold">
              {project.realizeAmt} Ethers raised{" "}
            </span>
            <span class="text-sm text-gray-600">(so far)</span>
          </div>

          {/* donation part */}
          <div className="border-t border-gray-light mt-2 p-2">
            {new Date(project.startDate * 1000).getDate() -
              new Date().getDate() <=
            0 ? (
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="number"
                  placeholder="amount(ethers)"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                  onClick={sendValue}
                >
                  Donate
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
