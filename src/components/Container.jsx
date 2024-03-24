import Analytics from "./Analytics";
import Drawer from "./Drawer";

const Container = () => {
  return (
    <div className="container-main h-auto flex rounded-[20px] w-[90%] justify-center relative">
      <Drawer />
      <Analytics />
    </div>
  );
};

export default Container;
