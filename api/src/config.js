export default {
  providers: [
    {
      base: "fh.snipcola.com",
      online: true,
      url: function (type, { id, season, episode }) {
        if (type === "movie") return `https://${this.base}/api/embed/${id}`;
        return `https://${this.base}/api/embed/${id}/${season}/${episode}`;
      },
    },
    {
      ...(process?.env?.NODE_ENV === "development"
        ? {
            base: "localhost:2000",
            url: function (type, { id, season, episode }) {
              if (type === "movie")
                return `http://${this.base}/api/embed/${id}`;
              return `http://${this.base}/api/embed/${id}/${season}/${episode}`;
            },
          }
        : {
            base: "film-haven.vercel.app",
            url: function (type, { id, season, episode }) {
              if (type === "movie")
                return `https://${this.base}/api/embed/${id}`;
              return `https://${this.base}/api/embed/${id}/${season}/${episode}`;
            },
          }),
    },
    {
      base: "vidsrc.to",
      url: function (type, { id, season, episode }) {
        if (type === "movie") return `https://${this.base}/embed/movie/${id}`;
        return `https://${this.base}/embed/tv/${id}/${season}/${episode}`;
      },
    },
    {
      base: "vidsrc.pro",
      online: true,
      url: function (type, { id, season, episode }) {
        if (type === "movie") return `https://${this.base}/embed/movie/${id}`;
        return `https://${this.base}/embed/tv/${id}/${season}/${episode}`;
      },
    },
    {
      base: "moviesapi.club",
      online: true,
      url: function (type, { id, season, episode }) {
        if (type === "movie") return `https://${this.base}/movie/${id}`;
        return `https://${this.base}/tv/${id}-${season}-${episode}`;
      },
    },
  ],
  blacklist: {
    status: [
      404, // Not Found
      500, // Internal Server Error
    ],
    text: [
      "no sources",
      "no movie found",
      "no tv show found",
      "no episode found",
      "no show found",
    ],
  },
};
