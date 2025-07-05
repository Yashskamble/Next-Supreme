const tabs = [
  {
    id: "passenger",
    title: "Passenger vehicles",
    description: "Revving up innovation from interior to exterior.",
  },
  {
    id: "commercial",
    title: "Commercial vehicles",
    description: "Advancing engineering for heavy-duty vehicles.",
  },
];

export default function VerticalTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex bg-black text-white flex-col ml-40 ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`text-left transition-all duration-300 border-l-2 pl-14 py-10
              ${
                activeTab === tab.id
                  ? "text-white font-semibold border-white"
                  : "text-white/30 border-white/30"
              }
            `}
        >
          <div className="text-2xl lg:text-[32px] font-medium text-left pb-2">
            {tab.title}
          </div>
          <div className="text-[16px] lg:text-[18px] font-light text-left 2xl:text-lg">
            {tab.description}
          </div>
        </button>
      ))}
    </div>
  );
}
