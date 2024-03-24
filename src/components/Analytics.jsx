import AnalyticsNav from "./feature-components/AnalyticsNav";
import Highlights from "./feature-components/Highlights";
import WeekCards from "./feature-components/WeekCards";

const Analytics = () => {
  return (
    <div className="flex justify-between bg-slate-100 p-4 rounded-r-[20px] flex-col">
      <AnalyticsNav />
      <div className="flex flex-col flex-start">
        <WeekCards />
        <Highlights />
      </div>
    </div>
  );
};

export default Analytics;
