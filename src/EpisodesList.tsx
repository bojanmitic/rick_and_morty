import React from "react";
import { IEpisode, IEpisodeProps } from "./interfaces";


const EpisodesList = (props: IEpisodeProps): Array<JSX.Element> => {
  const { episodes, toggleFavoriteAction, favorites } = props;
  console.log(props)
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode && episode.image && episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
        <p>{episode.name}</p>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavoriteAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Favorite"
              : "Unfavorite"}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
