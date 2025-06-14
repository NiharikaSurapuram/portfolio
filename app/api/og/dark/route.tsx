import { experiences, personalInfo } from "@/lib/data";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const title =
      searchParams.get("title") ||
      `${personalInfo.name} - ${personalInfo.title}`;
    const description =
      searchParams.get("description") || personalInfo.description;
    const type = searchParams.get("type") || "portfolio"; // portfolio, blog, post

    // Fetch the profile image
    const profileImageResponse = await fetch(
      new URL("/niharika_surapuram.jpeg", request.url)
    );
    const profileImageBuffer = await profileImageResponse.arrayBuffer();

    // Get Oracle logo from experience data
    const oracleExperience = experiences.find(
      (exp) => exp.company === "Oracle"
    );
    const oracleLogoUrl = oracleExperience?.logo;

    // Fetch Oracle logo if available
    let oracleLogoBuffer: ArrayBuffer | null = null;
    if (oracleLogoUrl) {
      try {
        const oracleLogoResponse = await fetch(oracleLogoUrl);
        oracleLogoBuffer = await oracleLogoResponse.arrayBuffer();
      } catch (error) {
        console.log("Failed to fetch Oracle logo:", error);
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#0f172a",
            padding: "60px",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {/* Header with Oracle branding */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {/* Oracle logo */}
              {oracleLogoBuffer ? (
                <img
                  src={`data:image/png;base64,${Buffer.from(
                    oracleLogoBuffer
                  ).toString("base64")}`}
                  alt="Oracle"
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "contain",
                    // filter: "brightness(0) invert(1)", // Make logo white for dark mode
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#FF0000",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  O
                </div>
              )}
              <div
                style={{
                  fontSize: "16px",
                  color: "#94a3b8",
                  fontWeight: "500",
                }}
              >
                Oracle Cloud Analyst
              </div>
            </div>

            {/* Type indicator */}
            <div
              style={{
                backgroundColor: "#1e293b",
                color: "#e2e8f0",
                padding: "6px 14px",
                borderRadius: "16px",
                fontSize: "12px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {type}
            </div>
          </div>

          {/* Main content with profile image */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              flex: 1,
              gap: "60px",
            }}
          >
            {/* Text content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                maxWidth: "700px",
              }}
            >
              <h1
                style={{
                  fontSize:
                    title.length > 40
                      ? "42px"
                      : title.length > 30
                      ? "48px"
                      : "56px",
                  fontWeight: "300",
                  lineHeight: "1.1",
                  color: "#f8fafc",
                  margin: "0 0 20px 0",
                  letterSpacing: "-0.02em",
                  wordWrap: "break-word",
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  color: "#94a3b8",
                  lineHeight: "1.4",
                  margin: "0",
                  fontWeight: "400",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {description}
              </p>
            </div>

            {/* Profile image */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`data:image/jpeg;base64,${Buffer.from(
                  profileImageBuffer
                ).toString("base64")}`}
                alt="Profile"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "16px",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "30px",
              paddingTop: "30px",
              borderTop: "1px solid #334155",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0f172a",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                NS
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#f8fafc",
                  fontWeight: "500",
                }}
              >
                {personalInfo.name}
              </div>
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "#64748b",
                fontWeight: "400",
              }}
            >
              niharika.vercel.app
            </div>
          </div>

          {/* Subtle background pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "300px",
              height: "300px",
              background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
              borderRadius: "50%",
              opacity: 0.2,
              transform: "translate(150px, -150px)",
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : "Unknown error"}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
