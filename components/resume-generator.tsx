"use client";

import { Download, FileText, Loader2 } from "lucide-react";
import { useState } from "react";

interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
}

const templates: ResumeTemplate[] = [
  {
    id: "clean",
    name: "Clean & Simple",
    description:
      "Minimal design with clear sections and professional formatting",
  },
  {
    id: "modern",
    name: "Modern Professional",
    description: "Contemporary design with colors and modern typography",
  },
  {
    id: "classic",
    name: "Classic Academic",
    description: "Traditional CV format using moderncv LaTeX package",
  },
];

export function ResumeGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("clean");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [latexContent, setLatexContent] = useState<string>("");

  const handleGenerateResume = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ template: selectedTemplate }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate resume");
      }

      const data = await response.json();
      setLatexContent(data.latex);
      setShowPreview(true);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadLatex = () => {
    window.open(`/api/resume?template=${selectedTemplate}`, "_blank");
  };

  const handleCompileOnline = () => {
    // Open LaTeX.Online with the generated content
    const encodedLatex = encodeURIComponent(latexContent);
    const url = `https://latexonline.cc/compile?text=${encodedLatex}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-4">
          Resume Generator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Generate a professional resume from your portfolio data using LaTeX
          templates
        </p>
      </div>

      {/* Template Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Choose Template
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedTemplate === template.id
                  ? "border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-800"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 mt-1 ${
                    selectedTemplate === template.id
                      ? "border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-100"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    {template.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {template.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center mb-8">
        <button
          onClick={handleGenerateResume}
          disabled={isGenerating}
          className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <FileText className="w-4 h-4 mr-2" />
          )}
          {isGenerating ? "Generating..." : "Generate Resume"}
        </button>
      </div>

      {/* Preview and Download */}
      {showPreview && latexContent && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Generated LaTeX Resume
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleDownloadLatex}
                className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download .tex
              </button>
              <button
                onClick={handleCompileOnline}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Compile to PDF
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 max-h-96 overflow-y-auto">
            <pre className="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {latexContent}
            </pre>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              <strong>To compile to PDF:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Click "Compile to PDF" to use LaTeX.Online (requires internet)
              </li>
              <li>Download the .tex file and compile locally with pdflatex</li>
              <li>Upload to Overleaf for online editing and compilation</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
