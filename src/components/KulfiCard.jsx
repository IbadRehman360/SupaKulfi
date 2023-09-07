function kulfi({ kulfi }) {
  return (
    <div className="kulfi-card">
      <h3> {kulfi.title} </h3>
      <p> {kulfi.description} </p>
      <p> {kulfi.recipe} </p>
      <div className="rating">{kulfi.rating}</div>
    </div>
  );
}

export default kulfi;
