import React from "react";

interface Props {
  content: string;
}

function Card({ content }: Props) {
  return <div>{content}</div>;
}

export { Card };
