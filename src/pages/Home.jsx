import useKulfisData from "../hooks/useKulfisData";
import KulfiCard from "../components/KulfiCard";

const Home = () => {
  const [kulfiData, error] = useKulfisData();

  return (
    <div className="mt-10">
      {error && <p>{error}</p>}
      {kulfiData && (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {kulfiData.map((kulfis) => (
              <div key={kulfis.id} className="col-span-1">
                <KulfiCard kulfi={kulfis} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
