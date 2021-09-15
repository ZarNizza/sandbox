export function getRepos(username) {
    console.log("username: ", username);
  const gitURL = `https://api.github.com/users/${username}/repos`;

  return fetch(gitURL)
    .then((res) => {
      console.log("res: ", res);
      if (!res.status === 404)  throw new Error("! GitHub User not found");
      if (!res.ok) throw new Error("! GitHub request Error");
      return res.json();
    })
    .then((jsonRes) => {
        console.log("jsonRes: ", jsonRes);
      if (!Array.isArray(jsonRes)) return [];
      return jsonRes.map((repoDetails) => ({
        name: repoDetails.full_name,
        url: repoDetails.html_url,
      }));
    });
}
