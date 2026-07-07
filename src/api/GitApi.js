import axios from "axios";
export const getGithubUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
export const getGitRepo = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`,
  );
  return response.data;
};
