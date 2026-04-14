"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.npoint.io/6c48278e70bb1329ec40")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Recipe Table</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Loaded {recipes.length} recipes</p>
      )}
    </main>
  );
}