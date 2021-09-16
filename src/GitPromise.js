import { useState, useRef } from "react";
import "./App.css";
import { getRepos } from "./getRepos";

const Wrapper = (props) => (
  <div>
    <input ref={props.buttonRef} />
    <button
      onClick={() => {
        props.setUserName(props.buttonRef.current.value.trim());
        props.showRepos();
      }}
    >
      Show Repos
    </button>
    {props.children}
  </div>
);


export function GitPromise() {
  const buttonRef = useRef(123);
  const [repos, setRepos] = useState([]);
  const [errMessage, setErrMessage] = useState(null);
  const [userName, setUserName] = useState("");
  const [fetching, setFetching] = useState(false);

  function showRepos() {
    const reposPromise = getRepos(buttonRef.current.value.trim(), setFetching);
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



  if (/^\s*$/.test(userName))
    return (
      <Wrapper buttonRef={buttonRef} setUserName={setUserName} showRepos={showRepos} >
        <p>Enter UserName</p>
      </Wrapper>
    );

  if (errMessage)
    return (
      <Wrapper buttonRef={buttonRef} setUserName={setUserName} showRepos={showRepos} >
        <p>{errMessage}</p>
      </Wrapper>
    );

  if (!fetching && repos.length === 0)
    return (
      <Wrapper buttonRef={buttonRef} setUserName={setUserName} showRepos={showRepos} >
        <p>{`User "${userName}" has no public Repos`}</p>
      </Wrapper>
    );

  return (
    <Wrapper buttonRef={buttonRef} setUserName={setUserName} showRepos={showRepos}  >
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
}
