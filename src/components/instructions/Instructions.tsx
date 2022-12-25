import React from "react";

export default function Instructions({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col items-start gap-y-3">
      <h4 className="text-lg capitalize font-medium">{title}</h4>
      <ul className=" space-y-2 capitalize text-greyColor list-disc list-inside">
        {items.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
