// import { useState } from "react";
import { useState } from "react";
import "./App.css";

export function GitPromise() {
  let names = ["ZarNizza"];
  const [rl, setRL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let requests = names.map((name) =>
    fetch(`https://api.github.com/users/${name}/repos`)
  );

function getRepoList(requests) {
    setIsLoading(true);
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
        console.log("func getRL: ", repoItems);
        setRL(repoItems);
        setIsLoading(false);
        return repoItems;
      })
      .catch(alert);
    }
    
    let repoList = getRepoList(requests);
    console.log("RL:" + rl);

  return (
    <div className="flexOuter">
      <div className="flexInner">
        Good!
        <br />- - - - -<br />
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(rl) && rl}
      </div>
    </div>
  );
}
