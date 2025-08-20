export function ColorBox() {
    return (
        <div style={{ display: "flex", gap: "30px" }}>
            <div
                style={{
                    height: "200px",
                    width: "200px",
                    color: "white",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Box
            </div>
            <div
                style={{
                    height: "200px",
                    width: "200px",
                    color: "white",
                    background: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Box
            </div>
            <div
                style={{
                    height: "200px",
                    width: "200px",
                    color: "white",
                    background: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Box
            </div>
        </div>
    );
}
function CNTT3_IT104_Ex4() {
    return (
        <div>

            <ColorBox />
        </div>
    );
}