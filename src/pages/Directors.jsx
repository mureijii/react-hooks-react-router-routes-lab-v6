const Directors = ({ directors }) => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;
