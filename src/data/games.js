// Data terpusat untuk semua game/turnamen.
// Tambah / ubah game cukup lewat array ini — semua halaman
// (Choose Your Plan, Game Detail, Competition) memakai sumber yang sama.

export const games = [
  {
    slug: "mobile-legends",
    name: "Mobile Legends",
    shortName: "ML",
    tagline: "5v5 Skill-Based MOBA",
    description:
      "Battle 5v5 penuh strategi. Kumpulkan tim terbaikmu, susun draft pick yang mematikan, dan menangkan pertandingan.",
    format: "5v5",
    slots: 512,
    prizePool: "Rp 2.000.000",
    registerDeadline: "2026-09-20T23:59:00",
    accentIcon: "controller",
  },
  {
    slug: "valorant",
    name: "Valorant",
    shortName: "VL",
    tagline: "Tactical 5v5",
    description:
      "Tembak-menembak taktis dengan agent unik. Kontrol map, eksekusi rotasi, dan menangkan ronde demi ronde menuju grand final.",
    format: "5v5 Double Elimination",
    slots: 64,
    prizePool: "Rp 2.000.000",
    registerDeadline: "2026-09-25T23:59:00",
    accentIcon: "crosshair",
  },
];

export const getGameBySlug = (slug) => games.find((g) => g.slug === slug);
