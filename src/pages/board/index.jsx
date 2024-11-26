import Layout from "../../components/layout";
import AddNewTask from "../../components/addTask";
import TaskList from "../../components/taskItem";

const Board = () => {
  return (
    <Layout>
      <main>
        <div className="m-4">
          <h1 className="text-xl font-semibold">Eisenhower Matrix</h1>

          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-4 ml-auto w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                DO FIRST
              </h2>
              <TaskList status="do" />
              <AddNewTask status="do" />
            </div>
            <div className="p-4 ml-auto w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                DECIDE
              </h2>
              <TaskList status="decide" />
              <AddNewTask status="decide" />
            </div>
            <div className="p-4 ml-auto w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                DELEGATE
              </h2>
              <TaskList status="delegate" />
              <AddNewTask status="delegate" />
            </div>
            <div className="p-4 ml-auto w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                DELETE
              </h2>
              <TaskList status="delete" />
              <AddNewTask status="delete" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Board;
