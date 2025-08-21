import { useState } from "react";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [language, setLanguage] = useState<"english" | "vietnamese">(
        "english"
    );

    const appStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        minHeight: "100vh",
    };

    const themeText =
        theme === "light"
            ? language === "english"
                ? "Light"
                : "Sáng"
            : language === "english"
                ? "Dark"
                : "Tối";

    const languageText =
        language === "english" ? "English" : "Tiếng Việt";

    return (
        <div style={appStyle}>
            <h2>Nền: {themeText}</h2>
            <h2>Ngôn ngữ: {languageText}</h2>

            <hr />

            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Đổi theme
            </button>

            <button
                onClick={() =>
                    setLanguage(language === "english" ? "vietnamese" : "english")
                }
                style={{ marginLeft: "10px" }}
            >
                Đổi ngôn ngữ
            </button>
        </div>
    );
}

export default App;