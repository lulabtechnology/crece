import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ className = "", children }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1380px] px-5 sm:px-7 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
