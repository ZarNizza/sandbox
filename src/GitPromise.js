// import { useState } from "react";
import './App.css';

export function GitPromise() {
  let names = ["ZarNizza"];

  let requests = names.map((name) =>
    fetch(`https://api.github.com/users/${name}/repos`)
  );

  let repoList = Promise.all(requests)
    .then((responses) => {
      // все промисы успешно завершены
      for (let response of responses) {
        console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
      }

      return responses;
    })
    // преобразовать массив ответов response в response.json(),
    // чтобы прочитать содержимое каждого
    .then((responses) => Promise.allSettled(responses.map((r) => r.json())))
    // все JSON-ответы обработаны, users - массив с результатами
    .then((repoArrs) => repoArrs.forEach((repoArr) => alert("Repo: " + JSON.stringify(repoArr.value[0].name))))
    .catch(alert);
// ------------------------------------- WTF?????? need to extract repos from Promise/JSON 
  console.log("repoList", repoList);

  return (
    <div className="flexOuter">
      <div className="flexInner">Good!</div>
    </div>
  );
}
