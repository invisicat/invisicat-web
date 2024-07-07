export type ProjectProps = {
  title: string;
  description: string;
  link: string;
  minecraft?: boolean;
  icons: string[];
};

export const Projects: ProjectProps[] = [
  {
    title: "RiceStats",
    link: "https://github.com/invisicat/RiceStats",
    icons: ["hugeicons:java", "devicon-plain:grafana-wordmark"],
    description:
      "Tracks Minecraft statistics with InfluxDB for timescale analytics as a Spigot plugin",
  },
  {
    title: "AugmentedSMP",
    link: "https://github.com/invisicat/AugmentedSMP",
    icons: ["hugeicons:java", "mdi:docker"],
    minecraft: true,
    description:
      "A Minecraft plugin suited towards SMP servers with configurable tweaks and changes.",
  },
  {
    title: "BestBuy Item Scraper",
    link: "https://github.com/invisicat/rust-bestbuy-scraper",
    icons: ["devicon-plain:rust", "mdi:database"],
    description:
      "App that scraped Bestbuy during the RTX 3080 days. Utilized a scaper, webhooks, and cron jobs. ",
  },
  {
    title: "PvPToggle",
    link: "https://github.com/invisicat/PvPToggle",
    icons: ["hugeicons:java", "mdi:database"],
    minecraft: true,
    description:
      "Allows players to toggle PvP with persistence and cooldowns. Integrated with third-party plugins such as PlaceholderAPI and supports modern versions of Minecraft (1.19+).",
  },
  {
    title: "Nozuru",
    link: "https://github.com/invisicat/Nozuru",
    icons: ["hugeicons:java"],
    description:
      "A simple, fast, and efficient backend service used to build artifacts and serve Javadocs. Made with Rust 🦀.",
  },
  {
    title: "Custom Reflection Listeners",
    link: "https://github.com/invisicat/BukkitGenericListeners",
    icons: ["hugeicons:java"],
    minecraft: true,
    description:
      "Example implementation of how you're able to use reflection to dynamically register all events which allow you to use generic parameters as event handlers",
  },
  {
    title: "Simple UDP Network",
    link: "https://github.com/invisicat/SimpleUdpNetwork",
    icons: ["hugeicons:java"],
    description:
      "Simple echo server implementation that listens on a port and echoes back the packets it receives to the client that sent it",
  },
  {
    title: "LogSnag Wrapper",
    link: "https://github.com/invisicat/LogSnag4J",
    icons: ["hugeicons:java"],
    description:
      "Wrapper for LogSnag that allows for easy integration with Java applications",
  },
  {
    title: "Discord Velocity Sync",
    link: "https://github.com/invisicat/DiscordVelocitySync",
    icons: ["hugeicons:java"],
    minecraft: true,
    description:
      "Lightweight Velocity plugin that syncs Discord roles with in-game roles.",
  },
  {
    title: "Axolotl Ponds",
    link: "https://github.com/invisicat/AxolotlPonds",
    icons: ["hugeicons:java"],
    minecraft: true,
    description:
      "A Minecraft plugin for MMORPG that allows you to create ponds for axolotls to spawn in.",
  },
  {
    title: "Meditate App",
    link: "https://github.com/invisicat/Meditate",
    icons: ["devicon-plain:typescript", "mdi:database"],
    description:
      "A modern meditation web app for you to meditate on your own terms. Track your progress and share your thoughts with others.",
  },
];
