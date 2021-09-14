// import { useState } from "react";
import "./App.css";

export function GitPromise() {
  let names = ["ZarNizza"];
let rl = [];
  let requests = names.map((name) =>
    fetch(`https://api.github.com/users/${name}/repos`)
  );

  function getRepoList(requests) {
    Promise.all(requests)
      .then((responses) => {
        for (let response of responses) {
          console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
        }
        return responses;
      })
      .then((responses) => Promise.allSettled(responses.map((r) => r.json())))
      .then(function rItem(repoArrs) {
        let repoItems = [];
        repoArrs.forEach((repoArr) =>
          repoArr.value.map((repo) =>
            repoItems.push(JSON.stringify(repo.full_name))
          )
        );
        alert(repoItems);
        rl = repoItems;
        return repoItems;
      })
      .catch(alert);
  }

  let repoList = getRepoList(requests);

  return (
    <div className="flexOuter">
      <div className="flexInner">
        Good!
        <br />
        {repoList}
        <br />- - - - -<br/>
        {rl}

      </div>
    </div>
  );
}
