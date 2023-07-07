export default function setRandomFortune(array, setStateFunc) {
  const randomNumber = Math.floor(Math.random() * array.length);
  setStateFunc(array[randomNumber]);
}
