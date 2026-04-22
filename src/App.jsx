import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
}

function EpisodeDetails() {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Episode Details</h2>
        <p>select an episode to learn more</p>
      </section>
    );
  }
}

function episodeList() {
  return (
    <section className="episodeList">
      <h2>Episode List</h2>
      <ul className="episodeList">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

return (
  <>
    <header>
      <h1>Dark Echoes</h1>
    </header>
    <main>
      <List />
    </main>
  </>
);
