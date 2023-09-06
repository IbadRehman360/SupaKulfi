import useKulfisData from "../hooks/useKulfisData"


const Home = () => {
  const [kulfiData, error] = useKulfisData()

  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  )
}

export default Home