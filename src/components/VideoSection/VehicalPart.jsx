import Image from "next/image";

const VehicalPart = ({
  partImages,
  selectedPart,
  setSelectedPart,
  togglePlayPause,
  isPaused,
  radius,
  circumference,
  offset,
}) => {
  return (
    <div className="flex gap-30 items-center justify-center w-[640px] xl:w-[720px] 2xl:w-[900px]">
      <div className="flex gap-6 relative">
        {partImages.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedPart(item.title)}
            className={`flex flex-col items-center hover:opacity-100 transition-opacity duration-200 ${
              selectedPart === item.title ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image src={item.img} alt={item.title} width={80} height={80} />
            <span className="mt-1 text-[12px] text-white font-light">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="relative inline-block z-50">
        <button
          type="button"
          onClick={togglePlayPause}
          className="p-3 2xl:p-4 rounded-full z-10 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            {isPaused ? (
              <path fill="white" d="M8 5v14l11-7z" />
            ) : (
              <path
                fill="white"
                d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
              />
            )}
          </svg>
        </button>

        <svg
          className="absolute top-0 left-0 z-0"
          width="100%"
          height="100%"
          viewBox="0 0 48 48"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2.5"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.3s linear" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default VehicalPart;
