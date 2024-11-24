import React from "react";
import Layout from "../../components/layout";

const Board = () => {
  return (
    <Layout>
      <main>
        <div className="m-4">
          <h1 className="text-xl">Eisenhower Matrix</h1>

          <div className=" mx-auto mt-10">
            <div className="hidden md:flex justify-between">
              <div className="w-1/2 text-center font-bold py-2">URGENT</div>
              <div className="w-1/2 text-center font-bold py-2">NOT URGENT</div>
            </div>
            <div className="flex">
              <div className="hidden w-12 md:flex flex-col justify-between">
                <div className="font-bold py-14 transform -rotate-90 writing-mode-vertical-rl">
                  IMPORTANT
                </div>
                <div className="font-bold py-2 transform -rotate-90 writing-mode-vertical-rl ">
                  NOT IMPORTANT
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="bg-green-200 p-4 border border-black">
                  <div className="text-left font-bold text-xl">DO</div>
                  <p>Do it now.</p>
                  <ol className="list-decimal ml-4">
                    <li>Write a blog post</li>
                    <li>
                      Write tests for a functionality and push the changes
                    </li>
                    <li>Prepare for tomorrow’s talk</li>
                    <li>Review pull request</li>
                  </ol>
                </div>
                <div className="bg-blue-200 p-4 border border-black">
                  <div className="text-left font-bold text-xl">DECIDE</div>
                  <p>Schedule a time to do it.</p>
                  <ol className="list-decimal ml-4">
                    <li>Plan for alumni meet</li>
                    <li>Read about cloud design patterns</li>
                    <li>Big refactoring</li>
                  </ol>
                </div>
                <div className="bg-yellow-200 p-4 border border-black">
                  <div className="text-left font-bold text-xl">DELEGATE</div>
                  <p>Who can do it for you?</p>
                  <ol className="list-decimal ml-4">
                    <li>Creating interview process for junior engineers</li>
                    <li>Reviewing a blog</li>
                    <li>Taking interview</li>
                  </ol>
                </div>
                <div className="bg-gray-400 p-4 border border-black">
                  <div className="text-left font-bold text-xl">DELETE</div>
                  <p>Eliminate it.</p>
                  <ol className="list-decimal ml-4">
                    <li>A meeting with no agenda</li>
                    <li>Checking social media</li>
                    <li>Long tea/coffee breaks</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Board;
