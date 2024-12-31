import React from "react";
import ReactImageFallback from "react-image-fallback";
import { ImageWithFallbackProps } from "./type";
import { cn } from "@/lib/utils";

export const Image = ({ ...props }: ImageWithFallbackProps) => {
  return (
    <span
      className={cn("inline-block rounded-full bg-background", props.className)}
      style={{
        width: props?.width ?? "100%",
        height: props?.height ?? "100%",
      }}
    >
      <ReactImageFallback
        {...props}
        alt={props?.alt ?? ""}
        style={{
          width: props.width ?? "100%",
          height: props.height ?? "100%",
        }}
        fallbackImage={
          props.fallbackImage ??
          "https://craftypixels.com/placeholder-image/400x400/e8e8e8/e8e8e8"
        }
        className={cn(props.className, "!left-0 !top-0 rounded-full")}
      />
    </span>
  );
};

export default Image;
