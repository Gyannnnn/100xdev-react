import React from "react";

export default function ErrorBoundary() {
  return (
    <div>
      <div
        style={{
          margin: 10,
          height: "10vh",
          width: "100vw",
          backgroundColor: "black",
          color: "white",
        }}
      >
        card1
      </div>
      <div
        style={{
          height: "10vh",
          width: "100vw",
          backgroundColor: "black",
          color: "white",
        }}
      >
        card2
      </div>
    </div>
  );
}
