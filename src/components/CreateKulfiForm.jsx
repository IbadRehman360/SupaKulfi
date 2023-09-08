import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import useCreateKulfi from "../hooks/useCreateKulfi"; // Make sure to import the correct hook
import { useNavigate } from "react-router-dom";
export default function Example() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [kulfiImage, setKufiImage] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setErrorMessage] = useState("");

  const handleRating = (newRating) => {
    setRating(newRating);
  };
  async function formSubmit(event) {
    event.preventDefault();
    try {
      event.preventDefault();
      if (!title || !description || !recipe) {
        setErrorMessage(
          "Please fill out the recipe along with the other fields."
        );
      } else {
        setErrorMessage("");
        const { error } = await useCreateKulfi(
          title,
          description,
          recipe,
          kulfiImage,
          parseInt(rating)
        );
        if (error) {
          setErrorMessage(error.message);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  }
  return (
    <div className="grid justify-center ">
      <form
        className="grid justify-center  items-center whitespace-nowrap w-[800px]  bg-[#fcfcfcf5] p-4 pt-10 rounded-xl "
        onSubmit={formSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-6 md:grid-cols-3">
          <div className="grid w-[280px] sm:w-[500px] md:w-[600px]   grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-3">
            <div className="col-span-full">
              <label
                htmlFor="kulfi-title" // Changed the 'for' attribute to match the 'id' of the input
                className="block text-md  font-medium leading-6 text-gray-500"
              >
                Kulfi Title
              </label>
              <div className="mt-2">
                <div className="flex   rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className=" select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    value={title}
                    type="text"
                    name="website"
                    onChange={(e) => setTitle(e.target.value)}
                    id="kulfi-title"
                    className="block  border-0 bg-transparent py-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Write the kulfi Name"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="kulfi-description"
                className="block text-md   font-medium leading-6 text-gray-500"
              >
                Write a few sentences about yourself
              </label>
              <div className="mt-2">
                <textarea
                  id="kulfi-description"
                  name="about"
                  value={description}
                  rows={3}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full  pl-3  rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="  Type here..."
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="kulfi-recipe" // Changed the 'for' attribute to match the 'id' of the textarea
                className="block text-md   font-medium leading-6 text-gray-500"
              >
                Recipe
              </label>
              <div className="mt-2">
                <textarea
                  id="kulfi-recipe" // Unique ID
                  value={recipe}
                  name="about"
                  onChange={(e) => setRecipe(e.target.value)}
                  rows={3}
                  className="block  pl-3 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="  Write the recipe for the kulfi 😍"
                />
              </div>
            </div>
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-16">
                <div className="flex">
                  <h3 className=" text-lg font-medium leading-6 text-gray-500 mt-1.5 pr-4">
                    Rating:
                  </h3>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Star
                      key={value}
                      filled={value <= rating}
                      onClick={() => handleRating(value)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="kulfi-image" // Changed the 'for' attribute to match the 'id' of the input
                className="block text-md  font-medium leading-6 text-gray-500"
              >
                Cover kufi_image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="kulfi-image" // Changed the 'for' attribute to match the 'id' of the input
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        value={kulfiImage}
                        id="kulfi-image" // Unique ID
                        onChange={(e) => setKufiImage(e.target.value)}
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {error && (
                <div className="text-red-500 mt-4 ">
                  <p>{error}</p>
                </div>
              )}
            </div>
            <div className="">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function Star({ filled, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`w-10 h-10 cursor-pointer ${
        filled ? "text-green-400 fill-current" : "text-gray-800"
      }`}
      onClick={onClick}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
