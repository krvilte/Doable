import Layout from "../../components/layout";
import AddNewTask from "../../components/addTask";
import TaskList from "../../components/taskItem";
import Check from "../../assets/icons/check";

const Board = () => {
  return (
    <Layout>
      <div className="mx-8 my-5">
        <h1 className="text-2xl font-semibold">Eisenhower Matrix</h1>
        <hr className="mt-4 mb-4 border-1 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="p-4 m-auto w-full max-w-[450px] rounded border border-black/50 shadow-md">
            <h2 className="flex items-center gap-x-2 text-lg pb-2 text-green-600 font-semibold border-b-[1px] border-black/20">
              <Check stroke={"#16a34a"} style="size-6 " />
              DO FIRST
            </h2>
            <TaskList status="do" />
            <AddNewTask status="do" />
          </div>
          <div className="p-4 m-auto w-full max-w-[450px] rounded border border-black/50 shadow-md">
            <h2 className="flex items-center gap-x-2 text-lg pb-2 text-blue-600 font-semibold border-b-[1px] border-black/20">
              <Check stroke={"#2563eb"} style="size-6 " />
              DECIDE
            </h2>
            <TaskList status="decide" />
            <AddNewTask status="decide" />
          </div>
          <div className="p-4 m-auto w-full max-w-[450px] rounded border border-black/50 shadow-md">
            <h2 className="flex items-center gap-x-2 text-lg pb-2 text-yellow-600 font-semibold border-b-[1px] border-black/20">
              <Check stroke={"#ca8a04"} style="size-6 " />
              DELEGATE
            </h2>
            <TaskList status="delegate" />
            <AddNewTask status="delegate" />
          </div>
          <div className="p-4 m-auto w-full max-w-[450px] rounded border border-black/50 shadow-md">
            <h2 className="flex items-center gap-x-2 text-lg pb-2 text-red-600 font-semibold border-b-[1px] border-black/20">
              <Check stroke={"#dc2626"} style="size-6 " />
              DELETE
            </h2>
            <TaskList status="delete" />
            <AddNewTask status="delete" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Board;
