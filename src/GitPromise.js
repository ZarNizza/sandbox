import { useState, useRef } from "react";
import "./App.css";
import { getRepos } from "./getRepos";

const Wrapper = (props) => (
  <div>
    <input ref={props.buttonRef} />
    <button
      onClick={() => {
        props.setUserName(props.buttonRef.current.value);
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

  if (repos.length === 0)
    return (
      <Wrapper buttonRef={buttonRef} setUserName={setUserName} showRepos={showRepos} >
        <p>{`User "${userName}" has no public Repos`}</p>
      </Wrapper>
    );

  return (
    // при User=Undefined получаем и сообщение и ошибку одновременно
    <Wrapper buttonRef={buttonRef} setUserName={setUserName} showRepos={showRepos}  >
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
}
