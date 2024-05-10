"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { useCreateStore } from "../use-create";

export default function Layout(props: PropsWithChildren) {
  const reset = useCreateStore((s) => s.reset);

  useEffect(() => {
    return () => {
      console.log("PromptBox unmounted");
      reset();
    };
  }, [reset]);

  return (
    <div className="bg-yellow-100 h-[100vh]">
      <aside
        className={`h-[calc(100vh_-_2rem)] bg-pink-50 w-64 sidebar-animate-in right-0 top-12 fixed flex items-center justify-center`}
      >
        A sidebar
      </aside>
      {props.children}
    </div>
  );
}
