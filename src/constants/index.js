import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Store", "Campfire", "Marshmallow", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Intese fire.",
      "Game‑changing heat.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 3.5,
  },
  {
    id: 2,
    textLists: ["Wood.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 4.75,
  },
  {
    id: 3,
    textLists: [
      "Campfire Pro Max makes the",
      "best S'mores in",
      "Campfires ever.",
    ],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: ["So many conversations.", "With whom will you start?"],
    video: highlightFourthVideo,
    videoDuration: 2.75,
  },
];

export const sizes = [
  { label: "Off", value: "off" },
  { label: "On", value: "on" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
