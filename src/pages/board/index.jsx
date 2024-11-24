import React from "react";
import Layout from "../../components/layout";

const Board = () => {
  return (
    <Layout>
      <main>
        <div className="m-4">
          <h1 className="text-xl">Eisenhower Matrix</h1>

          <div className="relative matrix-container grid grid-cols-1 gap-3 p-5 md:grid-cols-2">
            <div className="bg-stone-600 text-white p-5 rounded border shadow-md hover:bg-stone-600">
              Urgent & Important
            </div>
            <div className="bg-stone-600 text-white p-5 rounded border shadow-md hover:bg-stone-600">
              Not Urgent & Important
            </div>
            <div className="bg-stone-600 text-white p-5 rounded border shadow-md hover:bg-stone-600">
              Urgent & Not Important
            </div>
            <div className="bg-stone-600 text-white p-5 rounded border shadow-md hover:bg-stone-600">
              Not Urgent & Not Important
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Board;
