import { Calendar } from "../_components/calendar";
import { Folders } from "../_components/folders";
import { Notes } from "../_components/notes";
import { Tasks } from "../_components/tasks";
import { Statistic } from "../_components/statistic";
import { Timeline } from "../_components/timeline";

const DashboardPage = () => {
  return (
    <div className="h-full bg-slate-50 p-10">
      <div className="h-full pb-20 grid gap-4 md:grid-cols-2 md:grid-rows-6 lg:grid-cols-3 lg:gap-12 text-center">
        <div className="w-full h-full md:row-span-2 lg:row-span-4 bg-white shadow-2xl shadow-zinc-300 rounded-[32px]">
          <Tasks />
        </div>
        <div className="w-full h-full lg:row-span-2 bg-white shadow-2xl shadow-zinc-300 rounded-[32px]">
          <Folders />
        </div>
        <div className="w-full h-full lg:row-span-3 bg-white shadow-2xl shadow-zinc-300  rounded-[32px]">
          <Calendar />
        </div>
        <div className="w-full h-full lg:row-span-4 bg-white shadow-2xl shadow-zinc-300  rounded-[32px]">
          <Notes />
        </div>
        <div className="w-full h-full md:row-span-2 lg:row-span-3 bg-white shadow-2xl shadow-zinc-300  rounded-[32px]">
          <Timeline />
        </div>
        <div className="w-full h-full lg:row-span-2 bg-white shadow-2xl shadow-zinc-300  rounded-[32px]">
          <Statistic />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
