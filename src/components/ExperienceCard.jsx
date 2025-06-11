import React from "react";

const ExperienceCard = ({
  title,
  subtitle,
  logo,
  experiences,
  isReversed = false,
  className = "",
}) => {
  const CardHeader = () => (
    <div className="flex items-center justify-between w-full p-4 bg-white bg-opacity-50 border shadow-md dark:bg-neutral-900 h-1/5 rounded-xl">
      {logo && (
        <img
          className="w-10 h-10 rounded-md"
          src={logo}
          alt={`${title} Logo`}
        />
      )}
      <div className="flex flex-col items-end">
        <h2 className="text-lg font-semibold">{title}</h2>
        {subtitle && (
          <p className="text-xs font-medium text-right text-neutral-500 dark:text-neutral-300">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  const ExperienceItem = ({ role, duration, location, points }) => (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
          {role}
        </p>
        <div className="flex justify-between w-full text-xs font-medium">
          <h3 className="text-neutral-700 dark:text-neutral-200">{duration}</h3>
          {location && (
            <h4 className="text-neutral-500 dark:text-neutral-300">
              | {location}
            </h4>
          )}
        </div>
      </div>
      <ul className="flex flex-col text-sm font-semibold text-neutral-700 dark:text-neutral-200">
        {points.map((point, idx) => (
          <li className="py-1" key={idx}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`w-full lg:w-[30%] flex flex-col gap-1 hover:scale-105 transition-all duration-150 bg-opacity-50 rounded-xl h-[28rem] overflow-hidden ${className}`}
    >
      {isReversed ? (
        <>
          <div className="flex flex-col justify-between w-full h-full p-4 bg-white bg-opacity-50 border shadow-md dark:bg-neutral-900 rounded-xl">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </div>
          <CardHeader />
        </>
      ) : (
        <>
          <CardHeader />
          <div className="flex flex-col justify-between w-full h-full p-4 bg-white bg-opacity-50 border shadow-md dark:bg-neutral-900 rounded-xl">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
