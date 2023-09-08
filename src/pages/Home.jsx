import useKulfi from "../hooks/useKulfi";
import KulfiCard from "../components/KulfiCard";
import { useState } from "react";

const Home = () => {
  //
  // const [orderBy, setOrderBy] = useState("created_at");
  //
  const [orderBy, setOrderBy] = useState("created_at");
  const [kulfiData, error, setKulfiData] = useKulfi(orderBy);

  // first job is to  check when it was created and than show the latest post first

  // ANOTHER WAY OF HANDLING THE SORTING!

  // const handleSort = (order) => {
  //   switch (order) {
  //     case "created_at":
  //       setKulfiData((prevData) =>
  //         [...prevData].sort((a, b) => b.created_at.localeCompare(a.created_at))
  //       );
  //       break;
  //     case "title":
  //       setKulfiData((prevData) =>
  //         [...prevData].sort((a, b) => b.title.localeCompare(a.title))
  //       );
  //       break;
  //     case "rating":
  //       setKulfiData((prevData) =>
  //         [...prevData].sort((a, b) => b.rating - a.rating)
  //       );
  //       break;
  //     default:
  //       console.log("Invalid orderBy value");
  //       break;
  //   }
  // };

  function filterDelete(id) {
    const updatedKulfiData = kulfiData.filter((kulfi) => kulfi.id !== id);
    setKulfiData(updatedKulfiData);
  }
  return (
    <div className="mt-10">
      {error && <p>{error}</p>}
      {kulfiData && (
        <div className="max-w-7xl mx-auto ">
          <div className="order-by">
            <p>Order by:</p>

            <button onClick={() => setOrderBy("created_at")}>
              Time Created
            </button>
            <button onClick={() => setOrderBy("title")}>Title</button>
            <button onClick={() => setOrderBy("rating")}>Rating</button>
            {/*  */}
            {/*  */}
            {/* <button onClick={() => handleSort("created_at")}>
              Time Created
            </button>
            <button onClick={() => handleSort("title")}>Title</button>
            <button onClick={() => handleSort("rating")}>Rating</button> */}
            {/*  */}
            {/*  */}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {kulfiData.map((kulfis) => (
              <div key={kulfis.id} className="col-span-1">
                <KulfiCard kulfi={kulfis} filterDelete={filterDelete} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
