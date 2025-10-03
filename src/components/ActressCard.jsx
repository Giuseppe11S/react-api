export default function ActressCard({ actress }) {
  return (

    <div className="actor">
      <div className="actor-img">
        <img src={actress.image} alt={actress.name} />
      </div>
      
      <div className="actor-info">
        <h3 className="actor-name">{actress.name}</h3>
          <p className="birth">Anno di nascita: {actress.birth_year}</p>
          <p className="nationality">Nazionalità: {actress.nationality}</p>
          <p className="famous-movies">
            Film famosi: {actress.most_famous_movies.join(", ")}
          </p>
          <p className="bio">{actress.biography}</p>
          <p className="awards">Premi: {actress.awards}</p>
      </div>
    </div>

  );
}
