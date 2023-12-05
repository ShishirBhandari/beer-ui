import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

import beerPng from "../assets/beer.png";

const BeerForm = ({ isFormOpen, setIsFormOpen, storeMyBeer }) => {
  const [currentBeer, setCurrentBeer] = useState({
    name: "",
    description: "",
    tagline: "",
    image_url: "./src/assets/beer.png",
  });

  const saveBeer = (beer) => {
    if (
      beer["name"] === "" ||
      beer["tagline"] === "" ||
      beer["description"] === ""
    )
      return;
    storeMyBeer(beer);
  };

  return (
    <Transition appear show={isFormOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsFormOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    saveBeer(currentBeer);
                  }}
                  className="w-full max-w-3xl text-center mt-3"
                >
                  <Dialog.Title className="pb-6 text-left font-bold leading-5 text-gray-700 text-2xl">
                    Add a New Beer
                  </Dialog.Title>
                  <div className="border p-1 px-6 w-20">
                    <img
                      src={beerPng}
                      alt="common beer"
                      className="rounded-lg h-16 my-4 shadow-lg"
                    ></img>
                  </div>

                  <div className="shadow-md rounded-md flex mt-4 h-12">
                    <input
                      type="text"
                      name="beername"
                      id="beername"
                      placeholder="Beer Name"
                      required
                      onChange={(e) =>
                        setCurrentBeer({ ...currentBeer, name: e.target.value })
                      }
                      className="border-gray-400 rounded-md border w-full flex-1 p-4 block focus:border-teal-400 invalid:border-red-800"
                    />
                  </div>
                  <div className="shadow-md rounded-md flex mt-4 h-12">
                    <input
                      type="text"
                      name="tagline"
                      id="tagline"
                      placeholder="Tagline"
                      required
                      onChange={(e) =>
                        setCurrentBeer({
                          ...currentBeer,
                          tagline: e.target.value,
                        })
                      }
                      className="border-gray-400 rounded-md border w-full flex-1 p-4 block focus:border-teal-400  invalid:border-red-800"
                    />
                  </div>
                  <div className="shadow-md rounded-md flex mt-4 h-12">
                    <input
                      name="description"
                      id="description"
                      placeholder="Description"
                      required
                      onChange={(e) =>
                        setCurrentBeer({
                          ...currentBeer,
                          description: e.target.value,
                        })
                      }
                      className="border-gray-400 rounded-md border w-full flex-1 p-4 block focus:border-teal-400  invalid:border-red-800"
                    />
                  </div>

                  <div className="p-4 bg-white flex flex-row-reverse items-center">
                    <input
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        saveBeer(currentBeer);
                      }}
                      value="Save"
                      className="mx-2 px-8 h-9 inline-flex justify-center border border-transparent rounded-md bg-blue-900 text-base text-white shadow-md hover:bg-blue-700 focus:outline-none"
                    ></input>
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="mx-2 px-8 inline-flex fustify-center p-3 text-base text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BeerForm;
