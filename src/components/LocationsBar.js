import react from "react";
import AucklandLocationPage from "./AucklandLocationPage";

function Locations() {
  return (
    <div>
      <h2 id="locations">Clubs in New Zealand</h2>

      <nav aria-labelledby="locations">
        <ul class="navigation">
          <li>
            <button>Auckland</button>
          </li>

          <li>
            <button>Palmerson North</button>
          </li>

          <li>
            <button>Wellington</button>
          </li>

          <li>
            <button>ChristChurch</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Locations;
