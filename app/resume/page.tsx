import { Header } from "@/components/header";
import { ResumeGenerator } from "@/components/resume-generator";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Navigation */}
      <Header currentPage="resume" />

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <ResumeGenerator />
      </div>
    </div>
  );
}
