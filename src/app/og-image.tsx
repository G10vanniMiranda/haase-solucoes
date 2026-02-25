import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    padding: "64px",
                    background:
                        "linear-gradient(135deg, rgba(6,78,59,1) 0%, rgba(15,118,110,1) 55%, rgba(240,253,250,1) 100%)",
                    color: "white",
                    justifyContent: "space-between",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        opacity: 0.9,
                    }}
                >
                    Haase Soluções
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
                        Segurança do Trabalho e Meio Ambiente
                    </div>
                    <div style={{ fontSize: 30, maxWidth: 920, opacity: 0.95 }}>
                        Consultoria técnica, laudos, programas, treinamentos e regularização ambiental.
                    </div>
                </div>
                <div style={{ fontSize: 24, opacity: 0.9 }}>www.haasesolucoes.com.br</div>
            </div>
        ),
        size
    );
}
