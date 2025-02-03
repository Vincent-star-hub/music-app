import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <TopBar />
          <MainContent />
        </main>
      </div>
    </div>
  );
}
