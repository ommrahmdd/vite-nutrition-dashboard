import React from "react";

export default function Header({ title }: { title: string }) {
  return (
    <header className="my-10">
      <h3 className="text-3xl font-medium text-greenColor lg:text-5xl">
        {title}
      </h3>
    </header>
  );
}
