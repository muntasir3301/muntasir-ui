export default async function getGithubStars(){
const res = await fetch(
  "https://api.github.com/repos/muntasir3301/muntasir-ui",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json"
    }
  }
);
    const data = await res.json();

    return data.stargazers_count;
}