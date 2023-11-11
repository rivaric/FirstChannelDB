import html2pdf from "html2pdf.js";
import { Artist } from "../types/Artist.ts";

export const savePDF = (artist: Artist) => {
  const element = document.getElementById(String(artist.id));
  const img = document.getElementById("img");

  if (img) {
    img.style.visibility = "hidden";
  }

  const opt = {
    margin: 0.5,
    filename: artist.full_name,
    image: { type: "webp", quality: 0.95 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "a4", orientation: "p" },
  };

  html2pdf().set(opt).from(element).save();
};
