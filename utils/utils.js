import emojis from "../data/data.js";
import {
  emojiCodeEl,
  emojiNameEl,
  emojiEl,
  copyButtonEl,
  generateBtnEl,
} from "../script.js";

// Get random emoji from list
export const getRandomEmoji = () => {
  let emoji = emojis.sort(() => 0.5 - Math.random())[0];
  const { htmlCode, name } = emoji;
  changeHtml(htmlCode, name);
};

// Change DOM elements accordingly
export const changeHtml = (emojiCode, emojiName) => {
  emojiEl.innerHTML = emojiCode;
  emojiCodeEl.innerText = emojiCode;
  emojiNameEl.innerText = emojiName;
};

// Copy emoji
export const copyEmoji = async emoji => {
  try {
    const { clipboard } = navigator;
    await clipboard.writeText(emoji);
    showCopied();
  } catch (e) {
    alert(e);
  }
};

// Show user copied successfully
export const showCopied = () => {
  copyButtonEl.innerText = "✔";
  copyButtonEl.disabled = true;
  generateBtnEl.disabled = true;
  setTimeout(() => {
    copyButtonEl.disabled = false;
    generateBtnEl.disabled = false;
    copyButtonEl.innerText = "העתק";
  }, 1500);
};
