import React from "react";
import StarIcon from "@mui/icons-material/Star";

const RepoCard = ({ repositories }) => {
  if (!repositories || repositories.length == 0) {
    return null;
  }
  //
  return (
    <section>
      <h2 className="mb-6 mt-3 text-2xl font-bold">Repositories</h2>

      {repositories.slice(0, 10).map((repo) => (
        <div
          key={repo.id}
          className="mb-5 rounded-xl border border-[#30363D] bg-[#161B22] p-6"
        >
          <h4 className="text-xl font-semibold">{repo.name}</h4>
          <p className="mt-2 text-[#8B949E]">
            {repo.description || "No Description available"}
          </p>
          <div className="mt-5 flex justify-between items-center">
            <span className="rounded-full bg-[#30363D] px-3 py-1 text-sm">
              {repo.language || "No Language detected"}
            </span>
            <div className="flex items-center gap-1">
              <StarIcon sx={{ color: "#FFD700", fontSize: 20 }} />
              <span>{repo.starganzers_count}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RepoCard;
