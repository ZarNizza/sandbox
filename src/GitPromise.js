import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import { getRepos } from "./getRepos";
import react from "react";

export function GitPromise() {
  const buttonRef = useRef(123);
  const [repos, setRepos] = useState([]);
  const [err, setErr] = useState(false);
  function showRepos() {
    const reposPromise = getRepos(buttonRef.current.value);
    reposPromise.then((repos) => setRepos(repos))
    .catch(()=>setErr(true));
  }

  return (
    <div>
      <input ref={buttonRef} />
      <button onClick={showRepos}>Show Repos</button>
      {repos.length > 0 && (
        <ul>
          {repos.map((repo) => (
            <li key={repo}>{repo}</li>
          ))}
        </ul>
      )}
      {err && <p>ERROR!!!</p>}
    </div>
  );
}
