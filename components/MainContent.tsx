"use client";
import { motion } from "framer-motion";
import { Music2, PlayCircle, Mic, Book } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component

export default function MainContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  const featuredCharts = [
    { title: "Global", listeners: "87M weekly listeners" },
    { title: "USA", listeners: "32M weekly listeners" },
    { title: "Top 50 Global", listeners: "45M weekly listeners" },
    { title: "Top 50 PHILIPPINES", listeners: "28M weekly listeners" },
    { title: "Viral 50 Global", listeners: "15M weekly listeners" },
    { title: "Viral 50 USA", listeners: "12M weekly listeners" },
  ];

  const editorPlaylists = [
    {
      title: "Dinner & Chill",
      description: "Relaxing tunes for your evening meal",
      tracks: 42,
      image: "/images/guitar.jpg", // Added image source
    },
    {
      title: "Kitchen Swagger",
      description: "Upbeat cooking companions",
      tracks: 55,
      image: "/images/listening.jpg", // Added image source
    },
    {
      title: "Dinner Jazz",
      description: "Smooth jazz for dining",
      tracks: 38,
      image: "/images/headphone.jpg",
    },
    {
      title: "Dinner with Friends",
      description: "Perfect party playlist",
      tracks: 48,
      image: "/images/listening2.jpg",
    },
    {
      title: "Dinner Lounge",
      description: "Ambient dining atmosphere",
      tracks: 35,
      image: "/images/dj.jpg",
    },
  ];

  const trendingArtists = [
    { name: "Artist 1", genre: "Pop", followers: "15M" },
    { name: "Artist 2", genre: "Rock", followers: "10M" },
    { name: "Artist 3", genre: "Jazz", followers: "5M" },
    { name: "Artist 4", genre: "Hip Hop", followers: "8M" },
    { name: "Artist 5", genre: "R&B", followers: "6M" },
  ];

  const newReleases = [
    {
      title: "Song A",
      artist: "Artist 1",
      releaseDate: "Jan 2025",
      image: "/images/artist.jpg",
    }, // Added image source
    {
      title: "Song B",
      artist: "Artist 2",
      releaseDate: "Dec 2024",
      image: "/images/artist.jpg",
    }, // Added image source
    {
      title: "Song C",
      artist: "Artist 3",
      releaseDate: "Nov 2024",
      image: "/images/artist.jpg",
    }, // Added image source
    {
      title: "Song D",
      artist: "Artist 4",
      releaseDate: "Oct 2024",
      image: "/images/artist.jpg",
    }, // Added image source
    {
      title: "Song E",
      artist: "Artist 5",
      releaseDate: "Sept 2024",
      image: "/images/artist.jpg",
    }, // Added image source
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-6 space-y-12"
    >
      <section aria-labelledby="featured-charts-heading">
        <motion.h2
          id="featured-charts-heading"
          className="text-3xl font-bold text-white mb-6 flex items-center gap-2"
        >
          <Music2 className="text-blue-400" />
          Featured Charts
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredCharts.map((chart) => (
            <motion.div
              key={chart.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/60 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold mb-2">{chart.title}</h3>
              <p className="text-gray-400 text-sm">{chart.listeners}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section aria-labelledby="playlists-heading">
        <motion.h2
          id="playlists-heading"
          className="text-3xl font-bold text-white mb-6 flex items-center gap-2"
        >
          <PlayCircle className="text-green-400" />
          Editor's Picks
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {editorPlaylists.map((playlist) => (
            <motion.div
              key={playlist.title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/60 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="aspect-square bg-gray-700 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src={playlist.image || "/defaultImage.jpg"} // Use the image for the playlist or fallback to a default image
                  alt={playlist.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <PlayCircle className="w-12 h-12 text-white" />
                </motion.div>
              </div>
              <h3 className="text-white font-bold mb-1">{playlist.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {playlist.description}
              </p>
              <p className="text-gray-500 text-xs">{playlist.tracks} tracks</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trending Artists Section */}
      <section aria-labelledby="trending-artists-heading">
        <motion.h2
          id="trending-artists-heading"
          className="text-3xl font-bold text-white mb-6 flex items-center gap-2"
        >
          <Mic className="text-orange-400" />
          Trending Artists
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trendingArtists.map((artist) => (
            <motion.div
              key={artist.name}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/60 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold mb-2">{artist.name}</h3>
              <p className="text-gray-400 text-sm">{artist.genre}</p>
              <p className="text-gray-500 text-xs">
                {artist.followers} followers
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* New Releases Section */}
      <section aria-labelledby="new-releases-heading">
        <motion.h2
          id="new-releases-heading"
          className="text-3xl font-bold text-white mb-6 flex items-center gap-2"
        >
          <Book className="text-purple-400" />
          New Releases
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {newReleases.map((release) => (
            <motion.div
              key={release.title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/60 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="aspect-square bg-gray-700 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src={release.image || "/defaultReleaseImage.jpg"} // Use image for release or fallback
                  alt={release.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-white font-bold mb-1">{release.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{release.artist}</p>
              <p className="text-gray-500 text-xs">{release.releaseDate}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
