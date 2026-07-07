import React from "react";

const ProfileCard = ({ user }) => {
  if (!user) {
    return null;
  }

  const joinedDate = new Date(user.created_at).toLocaleDateString();
  return (
    <>
      {/* <h2 className="mb-6 mt-3 text-2xl font-bold">Repositories</h2> */}
      <section className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* left side */}
          <div className="flex items-center gap-4">
            {/* avatar */}
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-20 h-20 rounded-full bg-[#30363D]"
            ></img>

            {/* userinfo */}
            <div>
              <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
              <p className="text-[#8B949E]">@{user.login}</p>
              <p className="mt-2 text-[#8B949E]">
                {user.company || "No company"}
              </p>
              <p className="text-[#8B949E]">{user.bio || " no bio"}</p>
              <p className="text-[#8B949E]">
                {user.location || "location is not available"}
              </p>
              <p className="text-sm text-[#8B949E]">Joined: {joinedDate}</p>
            </div>
          </div>

          <a
            className="bg-[#238636] hover:bg-[#2EA043] text-white px-7 py-3 rounded-lg font-semibold transition:colors cursor-pointer mt-4 mx-auto flex justify-center "
            variant="contained"
            href={user.html_url}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Follow
          </a>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
