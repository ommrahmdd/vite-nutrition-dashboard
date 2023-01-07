import React from "react";

export default function Header({ title }: { title: string }) {
  return (
    <header className="my-10">
      <p className="text-3xl font-medium text-greenColor capitalize lg:text-5xl">
        {title}
      </p>
    </header>
  );
}
