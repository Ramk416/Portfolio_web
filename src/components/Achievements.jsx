import React, { useEffect, useState } from "react";

const Achievements = () => {
  const [le, setLeet] = useState({ totalSolved: 0, rank: null });
  const [cf, setCf] = useState({ rating: null, maxRating: null });

  // ✅ Manually set your GFG stats here
  const gfg = {
    totalSolved: 312,
    Rank: 81450,
  };

  useEffect(() => {
    (async () => {
      try {
        // LeetCode
        let res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/ramkish123`
        );
        if (res.ok) {
          const json = await res.json();
          setLeet({ totalSolved: json.totalSolved, rank: json.ranking });
        }

        // Codeforces
        res = await fetch(
          `https://codeforces.com/api/user.info?handles=YOUR_CF_HANDLE`
        );
        if (res.ok) {
          const data = await res.json();
          const user = data.result[0];
          setCf({ rating: user.rating, maxRating: user.maxRating });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const certificates = [
    {
      id: 1,
      title: "AI & ML Internship",
      file: "/assets/certificates/mern.pdf",
    },
    {
      id: 2,
      title: "Web development course",
      file: "/assets/certificates/Web_D_course.pdf",
    },
    {
      id: 3,
      title: "Frontend development course",
      file: "/assets/certificates/frontend_web_D_course.pdf",
    },
  ];

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 bg-gray-900 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">
        Achievements & Stats
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* LeetCode */}
        <div className="p-6 bg-gray-800 rounded-xl text-center shadow">
          <h3 className="text-xl sm:text-2xl font-semibold">LeetCode Problems</h3>
          <p className="text-2xl sm:text-3xl mt-4 font-bold">{le.totalSolved}</p>
          {le.rank && <p className="text-gray-400 mt-2">Rank: {le.rank}</p>}
        </div>

        {/* GFG (Manual) */}
        <div className="p-6 bg-gray-800 rounded-xl text-center shadow">
          <h3 className="text-xl sm:text-2xl font-semibold">GFG Problems</h3>
          <p className="text-2xl sm:text-3xl mt-4 font-bold">{gfg.totalSolved}</p>
          <p className="text-gray-400 mt-2">Rank: {gfg.Rank}</p>
        </div>

        {/* Codeforces */}
        <div className="p-6 bg-gray-800 rounded-xl text-center shadow">
          <h3 className="text-xl sm:text-2xl font-semibold">Codeforces Rating</h3>
          <p className="text-2xl sm:text-3xl mt-4 font-bold">
            {cf.maxRating ?? cf.rating ?? "N/A"}
          </p>
        </div>
      </div>

      {/* Certificates */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 mt-20 text-cyan-400">
        Certificates
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-800 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-400">Click to open/download</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
