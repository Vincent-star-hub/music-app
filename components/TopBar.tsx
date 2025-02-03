"use client";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  ChevronDown,
  User,
  ExternalLink,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function TopBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      text: "New Release: Latest album from your favorite artist",
      time: "2h ago",
    },
    {
      id: 2,
      text: "Playlist update: 3 songs added to your Daily Mix",
      time: "4h ago",
    },
    { id: 3, text: "New follower on your profile", time: "1d ago" },
  ]);

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-black/90 backdrop-blur-lg border-b border-gray-800/50 flex items-center justify-between px-4 md:px-6 py-4 sticky top-0 z-40"
    >
      {/* Left Side - Search */}
      <div className="flex-1 flex items-center">
        <motion.div
          animate={{ width: isSearchFocused ? "100%" : "240px" }}
          transition={{ duration: 0.2 }}
          className="relative hidden md:block w-full max-w-md"
        >
          <div
            className={`flex items-center bg-gray-800 rounded-full px-4 py-2 transition-all duration-300 ${
              isSearchFocused ? "ring-2 ring-white/20" : ""
            }`}
          >
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="bg-transparent border-none outline-none text-white ml-2 w-full"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
          {isSearchFocused && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 w-full bg-gray-900 rounded-lg shadow-xl p-4"
            >
              <p className="text-gray-400 text-sm mb-2">Recent searches</p>
              <div className="space-y-2">
                {["Pop Mix", "Workout Playlist", "Chill Beats"].map(
                  (search) => (
                    <div
                      key={search}
                      className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-gray-800/50"
                    >
                      <Search size={16} />
                      <span>{search}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile Search */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800/50"
        >
          <Search size={20} />
        </motion.button>

        {/* Notifications */}
        <div className="relative group  hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800/50 relative"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
          </motion.button>

          {/* Notifications Dropdown */}
          <div className="hidden group-hover:block absolute right-0 top-full mt-2 w-80 bg-gray-900 rounded-lg shadow-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Notifications</h3>
              <button className="text-gray-400 hover:text-white text-sm">
                Mark all as read
              </button>
            </div>
            <div className="space-y-3">
              {notifications.map((notif) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Bell size={16} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-200 text-sm">{notif.text}</p>
                    <p className="text-gray-400 text-xs mt-1">{notif.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* User Menu */}
        <div className="relative group">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 text-white px-3 py-1.5 rounded-full"
          >
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="hidden md:block">Account</span>
            <ChevronDown size={16} className="hidden md:block" />
          </motion.button>

          {/* User Dropdown */}
          <div className="hidden group-hover:block absolute right-0 top-full mt-2 w-56 bg-gray-900 rounded-lg shadow-xl p-2">
            {[
              { label: "Profile", icon: User },
              { label: "Settings", icon: Settings },
              { label: "Upgrade to Premium", icon: ExternalLink },
            ].map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 w-full p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sign Up/Login Buttons (show only when logged out) */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-gray-300 hover:text-white font-medium"
          >
            Sign up
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100"
          >
            Log in
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
