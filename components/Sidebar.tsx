"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Search,
  Library,
  PlusCircle,
  Heart,
  Download,
  Settings,
  Pin,
  Music2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar() {
  // Initialize state from localStorage if available, otherwise default to true (collapsed)
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [pinnedPlaylists] = useState([
    { id: 1, name: "Liked Songs", count: "487 songs" },
    { id: 2, name: "Your Episodes", count: "12 episodes" },
  ]);

  const [recentPlaylists] = useState([
    { id: 3, name: "Chill Mix", type: "Playlist", imageColor: "bg-purple-600" },
    {
      id: 4,
      name: "Workout Beats",
      type: "Playlist",
      imageColor: "bg-green-600",
    },
    {
      id: 5,
      name: "Rock Classics",
      type: "Playlist",
      imageColor: "bg-red-600",
    },
    {
      id: 6,
      name: "Sleep Sounds",
      type: "Playlist",
      imageColor: "bg-blue-600",
    },
    {
      id: 7,
      name: "Daily Mix 1",
      type: "Mixed for you",
      imageColor: "bg-indigo-600",
    },
  ]);

  // Load initial collapsed state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState !== null) {
      setIsCollapsed(JSON.parse(savedState));
    }
  }, []);

  // Save collapsed state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const NavButton = ({
    icon: Icon,
    text,
  }: {
    icon: React.ElementType;
    text: string;
  }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-4 text-gray-300 hover:text-white w-full p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
    >
      <Icon size={24} />
      <AnimatePresence>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="whitespace-nowrap"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return (
    <motion.div
      initial={false}
      animate={{
        width: isCollapsed ? "80px" : "280px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-black p-2 flex flex-col gap-2 h-screen relative group"
    >
      {/* Main Navigation */}
      <div className="bg-gray-900/60 rounded-lg p-4 space-y-4">
        <NavButton icon={Home} text="Home" />
        <NavButton icon={Search} text="Search" />
      </div>

      {/* Library Section */}
      <div className="bg-gray-900/60 rounded-lg p-4 flex-1 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-gray-300">
            <Library size={24} />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-semibold whitespace-nowrap"
                >
                  Your Library
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800/50"
              >
                <PlusCircle size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Pinned Playlists */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2 mb-4"
            >
              {pinnedPlaylists.map((playlist) => (
                <motion.div
                  key={playlist.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Heart size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white truncate">{playlist.name}</p>
                    <p className="text-gray-400 text-sm">{playlist.count}</p>
                  </div>
                  <Pin
                    size={16}
                    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recent Playlists */}
        <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-380px)] scrollbar-hide">
          {recentPlaylists.map((playlist) => (
            <motion.div
              key={playlist.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${playlist.imageColor} rounded-lg flex items-center justify-center`}
              >
                <Music2 size={20} className="text-white" />
              </div>
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 min-w-0"
                  >
                    <p className="text-white truncate">{playlist.name}</p>
                    <p className="text-gray-400 text-sm">{playlist.type}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-gray-900/60 rounded-lg p-4 space-y-2"
          >
            <NavButton icon={Download} text="Install App" />
            <NavButton icon={Settings} text="Settings" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="w-full flex items-center justify-center p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors"
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
    </motion.div>
  );
}
