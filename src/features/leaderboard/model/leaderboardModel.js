// src/features/leaderboard/model/leaderboardModel.js

export const getLeaderboardModel = () => ({
  rank: 23,
  points: 1420,
  teamsJoined: 3,
  growth: "+18%",
  contributors: [
    {
      name: "Alex Chen",
      initials: "AC",
      role: "Top Contributor",
      position: 1,
      badges: [{ label: "Top Contributor", style: "main" }],
      skills: ["React", "Python", "ML"],
      teams: 8,
      projects: 12,
      score: 2840,
      scoreChange: "+12%",
      scoreChangeColor: "#22c55e",
      highlight: true
    },
    {
      name: "Sarah Johnson",
      initials: "SJ",
      role: "Design Expert",
      position: 2,
      badges: [{ label: "Design Expert", style: "main" }],
      skills: ["Design", "React", "Figma"],
      teams: 6,
      projects: 10,
      score: 2650,
      scoreChange: "+8%",
      scoreChangeColor: "#22c55e",
      highlight: true
    },
    {
      name: "Mike Rodriguez",
      initials: "MR",
      role: "Backend Master",
      position: 3,
      badges: [{ label: "Backend Master", style: "main" }],
      skills: ["Node.js", "AWS", "DevOps"],
      teams: 7,
      projects: 9,
      score: 2420,
      scoreChange: "+15%",
      scoreChangeColor: "#22c55e",
      highlight: true
    },
    {
      name: "Emily Watson",
      initials: "EW",
      role: "Product Guru",
      position: 4,
      badges: [{ label: "Product Guru", style: "main" }],
      skills: ["Product", "Analytics", "Strategy"],
      teams: 5,
      projects: 8,
      score: 2180,
      scoreChange: "+5%",
      scoreChangeColor: "#22c55e",
      highlight: false
    },
    {
      name: "David Kim",
      initials: "DK",
      role: "Mobile Expert",
      position: 5,
      badges: [{ label: "Mobile Expert", style: "main" }],
      skills: ["Mobile", "React Native", "Swift"],
      teams: 4,
      projects: 7,
      score: 1960,
      scoreChange: "+22%",
      scoreChangeColor: "#22c55e",
      highlight: false
    }
  ],
  achievements: [
    { icon: "🏆", label: "Team Player", desc: "Joined 3+ teams", earned: true },
    { icon: "⭐", label: "Skill Master", desc: "10+ skills added", earned: true },
    { icon: "🤝", label: "Collaborator", desc: "Completed 5+ projects", earned: false },
    { icon: "🚀", label: "Rising Star", desc: "Top 10% growth", earned: false }
  ]
});
