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
      <p>Recipes loaded from API at runtime.</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={cellStyle}>ID</th>
              <th style={cellStyle}>Dish Name</th>
              <th style={cellStyle}>Cuisine</th>
              <th style={cellStyle}>Rating</th>
              <th style={cellStyle}>Servings</th>
              <th style={cellStyle}>Featured</th>
              <th style={cellStyle}>Available</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td style={cellStyle}>{recipe.id}</td>
                <td style={cellStyle}>{recipe.dishName}</td>
                <td style={cellStyle}>{recipe.cuisineType}</td>
                <td style={cellStyle}>{recipe.rating}</td>
                <td style={cellStyle}>{recipe.servings}</td>
                <td style={cellStyle}>{recipe.featured ? "Yes" : "No"}</td>
                <td style={cellStyle}>{recipe.available ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

const cellStyle = {
  border: "1px solid #cccccc",
  padding: "10px",
  textAlign: "left" as const,
};