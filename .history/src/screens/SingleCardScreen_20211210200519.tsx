import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const { slug }: any = useParams();
  console.log(slug, "Heg");

  return <div>{chapters.find((c) => slug === c.slug).map(())}</div>;
};