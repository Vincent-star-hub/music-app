import { motion } from "framer-motion";

interface SignUpModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function SignUpModal({ isOpen, closeModal }: SignUpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-800 p-6 rounded-lg w-96"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-xl font-semibold">Sign Up</h3>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-white text-lg"
          >
            &times;
          </button>
        </div>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-500"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
}
