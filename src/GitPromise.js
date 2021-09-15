import { useState, useRef } from "react";
import "./App.css";
import { getRepos } from "./getRepos";

export function GitPromise() {
  const buttonRef = useRef(123);
  const [repos, setRepos] = useState([]);
  const [errMessage, setErrMessage] = useState(null);
  const [userName, setUserName] = useState("");
  function showRepos() {
    const reposPromise = getRepos(buttonRef.current.value);
    reposPromise
      .then((repos) => {
        setRepos(repos);
        setErrMessage(null);
      })
      .catch((err) => {
        setErrMessage(err.message);
        setRepos([]);
      });
  }

  const Wrapper = (props) => (
    <div>
      <input ref={buttonRef} />
      <button
        onClick={() => {
          setUserName(buttonRef.current.value);
          showRepos();
        }}
      >
        Show Repos
      </button>
      {props.children}
    </div>
  );

  if (/^\s*$/.test(userName))
    return (
      <Wrapper>
        <p>Enter UserName</p>
      </Wrapper>
    );

  if (errMessage)
    return (
      <Wrapper>
        <p>{errMessage}</p>
      </Wrapper>
    );

  if (repos.length === 0)
    return (
      <Wrapper>
        <p>{`User "${userName}" has no public Repos`}</p>
      </Wrapper>
    );

  return (
    // при User=Undefined получаем и сообщение и ошибку одновременно
    <Wrapper>
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
}
