export default function ActorCard({ actor }) {
  
  return (

    <div className="actor">
      <div className="actor-img">
        <img src={actor.image} alt={actor.name} />
      </div>
      <div className="actor-info">

        <h3 className="actor-name">{actor.name}</h3>
          <p className="birth">Anno di nascita: {actor.birth_year}</p>
          <p className="nationality">Nazionalità: {actor.nationality}</p>
          <p className="famous-movies">
            Film famosi: {actor.known_for.join(", ")}
          </p>
          <p className="bio">{actor.biography}</p>
          <p className="awards">
            Premi: {actor.awards.join(", ")}
          </p>

      </div>
    </div>

  );
}
