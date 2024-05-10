"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useCreateStore } from "./use-create";

export function PromptBox() {
  const router = useRouter();
  const pathname = usePathname();
  const { pristine, values, setValue } = useCreateStore((s) => s);

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Generating "${values.prompt}"...`);
        }}
      >
        <input
          ref={inputRef}
          placeholder="Create something..."
          onFocus={(e) => {
            if (pathname !== "/create") {
              router.push(`/create`);
            }
          }}
          onBlur={(e) => {
            if (pathname === "/create" && pristine) {
              router.back();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              inputRef.current?.blur();
            }

            if (e.key === "Enter" && e.metaKey) {
              buttonRef.current?.click();
            }
          }}
          value={values.prompt}
          onChange={(e) => {
            setValue("prompt", e.target.value);
          }}
        />
        <button ref={buttonRef}>Generate</button>
      </form>
    </>
  );
}
