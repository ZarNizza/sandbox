export function getRepos(username) {
  const gitURL = `https://api.github.com/users/${username}/repos`;

return fetch(gitURL)
.then(res=>res.json())
.then(jsonRes => jsonRes.map(repoDetails=> repoDetails.full_name)
    )

}
