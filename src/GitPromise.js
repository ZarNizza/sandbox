// import { useState } from "react";

export function GitPromise() {
  
  async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}/repos`).then(
        successResponse => {
          if (successResponse.status !== 200) {
            return null;
          } else {
            return successResponse.text();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.allSettled(jobs);
  
    return results;
  }
  
  const uName = ['ZarNizza'];
  let repoList = getUsers(uName);
  let a =[];
  a.push(repoList);
  console.log("GU ", typeof(repoList), typeof(a)); // GU  object object
  console.log("rList = ", repoList); // rList = Promise { <state>: "pending" }
  console.log("a = ", a);  // a = Array [ Promise { "pending" } ]
  
  return (
    <div className="flexOuter">
      <div className="flexInner">{repoList}</div>
    </div>
  );
}
