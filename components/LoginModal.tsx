import { motion } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, closeModal }) => {
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
          <h3 className="text-white text-xl font-semibold">Log in</h3>
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
            className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
          >
            Log in
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginModal;
