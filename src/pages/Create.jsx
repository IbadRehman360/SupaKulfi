const Create = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="page create">
      <h2>Create a New Kulfi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="recipe">Recipe:</label>
          <textarea id="recipe" name="recipe" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="10"
            step="1"
            required
          />
        </div>
        <button type="submit">Create Kulfi</button>
      </form>
    </div>
  );
};

export default Create;
