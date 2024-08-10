export const API_KEY = "AIzaSyBNezfLQ6aHEcK_f4YQHIP3C15L8jjyt5k";

export const value_convertor = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
