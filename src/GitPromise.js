import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import { getRepos } from "./getRepos";

export function GitPromise() {
  const buttonRef = useRef(123);
  const [repos, setRepos] = useState([]);
  const [errMessage, setErrMessage] = useState(null);
  function showRepos() {
    const reposPromise = getRepos(buttonRef.current.value);
    reposPromise.then((repos) => setRepos(repos))
    .catch((err) => setErrMessage(err.message));
  }

  return (
    // при User=Undefined получаем и сообщение и ошибку одновременно
    <div>
      <input ref={buttonRef} />
      <button onClick={showRepos}>Show Repos</button>
      {repos.length > 0 ? (
        <ul>
          {repos.map((repo) => (
            <li key={repo.name}>{repo.name}</li>
          ))}
        </ul>
      ) : <p>{`User "${buttonRef.current.value}" has no public Repos`}</p>} 
      {errMessage && <p>{errMessage}</p>}
    </div>
  );
}
