import {
  generateCleanLatexResume,
  generateLatexResume,
  generateModernLatexResume,
} from "@/lib/resume-generator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const template = searchParams.get("template") || "clean";

    // Generate LaTeX based on template choice
    let latexContent: string;
    switch (template) {
      case "modern":
        latexContent = generateModernLatexResume();
        break;
      case "classic":
        latexContent = generateLatexResume();
        break;
      default:
        latexContent = generateCleanLatexResume();
    }

    // For now, return the LaTeX content as text
    // In production, you'd compile this to PDF using a service like LaTeX.Online or local pdflatex
    return new NextResponse(latexContent, {
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": `attachment; filename="niharika-surapuram-resume-${template}.tex"`,
      },
    });
  } catch (error) {
    console.error("Error generating resume:", error);
    return NextResponse.json(
      { error: "Failed to generate resume" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { template = "clean" } = await request.json();

    // Generate LaTeX
    let latexContent: string;
    switch (template) {
      case "modern":
        latexContent = generateModernLatexResume();
        break;
      case "classic":
        latexContent = generateLatexResume();
        break;
      default:
        latexContent = generateCleanLatexResume();
    }

    // Here you would typically compile LaTeX to PDF
    // For now, we'll return the LaTeX content
    // You can use services like:
    // - LaTeX.Online API
    // - Overleaf API
    // - Local pdflatex installation
    // - Docker container with LaTeX

    return NextResponse.json({
      success: true,
      latex: latexContent,
      downloadUrl: `/api/resume?template=${template}`,
    });
  } catch (error) {
    console.error("Error generating resume:", error);
    return NextResponse.json(
      { error: "Failed to generate resume" },
      { status: 500 }
    );
  }
}
