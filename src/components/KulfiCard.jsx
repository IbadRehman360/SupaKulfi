import { Link } from "react-router-dom";

function kulfi({ kulfi }) {
  return (
    <div className="kulfi-card ">
      <div className="flex space-x-3">
        <div className="flex-shrink-0 ">
          <img
            className="h-14 w-13 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="">
          <p className="">
            <a
              href="#"
              className="hover:underline text-md font-semibold text-gray-900"
            >
              Chelsea Hagon
              <Link className="pl-2  material-icons" to={"/" + kulfi.id}>
                edit
              </Link>
            </a>
          </p>
          <p className=" -mt-1  ">
            <a href="#" className="hover:underline text-sm  text-gray-500">
              December 9 at 11:43 AM
            </a>
          </p>
        </div>
        <div className="buttons"></div>
      </div>
      <h3 className="mt-3 font-medium text-sm"> {kulfi.title} </h3>
      <h5 className="mt-2 font-medium text-gray-600 text-lg"> Description: </h5>

      <p> {kulfi.description} </p>
      <h5 className="mt-2 font-medium text-gray-600 text-lg"> Rceipe: </h5>

      <p> {kulfi.recipe} </p>
      <div className="rating">{kulfi.rating}</div>
    </div>
  );
}

export default kulfi;
