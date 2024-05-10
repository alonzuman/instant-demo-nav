"use client";

import { usePathname } from "next/navigation";
import { useCreateStore } from "../use-create";

export function StateDebugger() {
  const pathname = usePathname();
  const { pristine, values } = useCreateStore((s) => s);

  return (
    <pre className="text-xs bg-gray-50 h-96 w-96 overflow-scroll z-10 fixed bottom-4 left-4">
      {JSON.stringify(
        {
          pathname,
          values,
          pristine,
        },
        null,
        2
      )}
    </pre>
  );
}
