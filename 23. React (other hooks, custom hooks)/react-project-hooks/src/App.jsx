import { Header } from "./components/Header";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

const App = () => {
  const movieData = [
    { name: "Interstellar", imdb: 8.9 },
    { name: "Inception", imdb: 2.8 },
    { name: "The Matrix", imdb: 5.7 },
    { name: "Pulp Fiction", imdb: 6.9 },
    { name: "Gladiator", imdb: 4.5 },
    { name: "Fight Club", imdb: 8.8 },
  ];

  const movieCategories = [
    { name: "Adventure", value: 800 },
    { name: "Comedy", value: 1200 },
    { name: "Drama", value: 1500 },
    { name: "Horror", value: 950 },
    { name: "Sci-Fi", value: 780 },
    { name: "Romance", value: 650 },
    { name: "Thriller", value: 870 },
    { name: "Animation", value: 670 },
    { name: "Fantasy", value: 730 },
  ];

  return (
    <>
      <Header />
      <main>
        <section id="dashboard">
          <div className="min-h-screen bg-gray-100">
            {/* Admin Panel Title */}
            <div className="text-center py-6">
              <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
            </div>

            {/* Main Content Section */}
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column (Red Box) */}
                <BarChart
                  style={{ width: "100%" }}
                  width={700}
                  height={400}
                  data={movieData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="imdb"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>

                {/* Right Column (Blue Box) */}
                <PieChart width={700} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={movieCategories}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
