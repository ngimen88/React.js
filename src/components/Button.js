import React from "react";

const Button = ({ children }) => {
    const glowing = `
        @keyframes glowing {
            from  0%{
                background-position: 0 0;
            }
            50% {
                background-position: 400% 0;
            }
            100%{
                background-position: 0 0;
            }
        }
    `;

    return (
        <button style={{
            background: "black",
            cursor: "pointer",
            border: "none",
            padding: "16px 32px",
            color: "#FFF",
            fontSize: "24px",
            fontWeight: "bold",
            position: "relative",
            borderRadius: "12px",
            animation: "glowing 20s linear infinite",
            position: "relative"
        }}>
            <span>COMPRAR</span>
            {children}
            <style>{glowing}</style>
            <span style={{
                content: "",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "-1",
                width: "100%",
                height: "100%",
                background: "linear-gradient(45deg,red,blue,deeppink,blue,red,blue,deeppink,blue)",
                backgroundSize: "800%",
                borderRadius: "10px",
                filter: "blur(8px)",
                animation: "glowing 20s linear infinite",
            }}></span>
        </button>
    );
};

export default Button;
