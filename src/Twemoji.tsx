import React, { useLayoutEffect, useRef } from "react";

interface TwemojiProps {
  code: string;
}

function TwemojiWrapper(props: TwemojiProps) {
  const { code } = props;
  return (
    <Twemoji key={code} code={code} />
  );
}

function Twemoji(props: TwemojiProps) {
  const { code } = props;
  const ref = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    (window as any).twemoji.parse(ref.current, {
      folder: "svg",
      ext: ".svg",
    });
  }, []);

  return <span ref={ref}>{code}</span>;
}

export default TwemojiWrapper;
