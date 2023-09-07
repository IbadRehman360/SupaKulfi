import useKulfisData from "../hooks/useKulfisData";
import KulfiCard from "../components/KulfiCard";

const Home = () => {
  const [kulfiData, error] = useKulfisData();

  return (
    <div className="page home">
      {error && <p>{error}</p>}
      {kulfiData && (
        <div>
          {" "}
          {kulfiData.map((kulfis) => (
            <KulfiCard key={kulfiData.id} kulfi={kulfis} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
