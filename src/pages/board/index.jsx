import React from "react";
import Layout from "../../components/layout";

const Board = () => {
  return (
    <Layout>
      <main>
        <div className="m-4">
          <h1 className="text-xl font-semibold">Eisenhower Matrix</h1>

          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-4 ml-auto w-full max-w-[460px] rounded border border-stone-400 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-stone-500">
                DO FIRST
              </h2>
              <ol className="flex flex-col py-2 list-decimal">
                <li className="flex justify-between list-none px-4 p-1 rounded cursor-pointer text-black hover:bg-gray-200">
                  <div className="flex items-center gap-x-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span>Write a blog post</span>
                  </div>

                  <div className="flex gap-x-2 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                      onClick={() => {
                        <div className="bg-green-500">
                          <button>Edit</button>
                          <button>Delete</button>
                        </div>;
                      }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </div>
                </li>
              </ol>

              <button className="text-left text-base text-black/70 rounded bg-transparent border-none px-4 py-1 mt-2 w-full cursor-pointer hover:bg-gray-200 focus:bg-gray-100 ">
                + Add Task
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Board;
