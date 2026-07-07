import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import ProfileCard from "../Components/ProfileCard";
import StatesCard from "../Components/StatesCard";
import RepoCard from "../Components/RepoCard";
import Footer from "../Components/Footer";
import { getGithubUser, getGitRepo } from "../api/GitApi";

const Home = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async () => {
    if (!username.trim()) {
      alert("Please Enter a GitHub Username");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const userData = await getGithubUser(username);
      console.log("data", userData);
      setUser(userData);
      const repoData = await getGitRepo(username);
      console.log("repo", repoData);
      setUser(userData);
      const sortedRepos = [...repoData].sort((a, b) => b.stargazers_count);

      setRepositories(sortedRepos);
      setError("");
    } catch (error) {
      console.log(error);
      setUser(null);
      setRepositories([]);
      setError("Github user not found");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F0F6FC]">
      <Navbar />
      <main className=" max-w-6xl mx-auto px-6 py-10">
        <SearchBar
          username={username}
          setUsername={setUsername}
          handleSearch={handleSearch}
          loading={loading}
        />
        {error && (
          <p className="font-medium text-red-500 text-center mt-4">{error}</p>
        )}

        <ProfileCard user={user} />
        <StatesCard user={user} />
        <RepoCard user={user} repositories={repositories} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
