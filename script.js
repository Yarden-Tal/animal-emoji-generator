import { getRandomEmoji, copyEmoji } from "./utils/utils.js";

// DOM ELEMENTS //
export const generateBtnEl = document.querySelector(".generate-btn");
export const copyButtonEl = document.querySelector(".copy-btn");
export const emojiEl = document.querySelector(".emoji");
export const emojiCodeEl = document.querySelector(".emoji-code");
export const emojiNameEl = document.querySelector(".emoji-name");

// EVENTS //
window.onload = () => getRandomEmoji();
generateBtnEl.onclick = () => getRandomEmoji();
copyButtonEl.onclick = () => copyEmoji(emojiEl.innerHTML);
