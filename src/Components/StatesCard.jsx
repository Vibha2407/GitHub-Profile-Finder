import React from "react";

const StatesCard = ({ user }) => {
  if (!user) {
    return null;
  }
  const stats = [
    {
      title: "Public Repos",
      value: user.public_repos,
    },
    {
      title: "Followers",
      value: user.followers,
    },
    {
      title: "Following",
      value: user.following,
    },
  ];

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-[#30363D] bg-[#161B22] p-6 text-center"
          >
            <p className="text-[#8B949E]">{item.title}</p>
            <h3 className="mt-3 text-3xl font-bold  ">{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatesCard;
