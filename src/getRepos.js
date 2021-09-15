export function getRepos(username) {
  const gitURL = `https://api.github.com/users/${username}/repos`;

  return fetch(gitURL)
    .then((res) => {
      console.log("res: ", res);
      if (!res.ok) throw new Error("!!! Fetch NOT OK !!!");
      res.json();
    })
    .then((jsonRes) => {
      if (!Array.isArray(jsonRes)) return [];
      jsonRes.map((repoDetails) => ({
        name: repoDetails.full_name,
        url: repoDetails.html_url,
      }));
    });
}
