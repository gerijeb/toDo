import inputEditor from "./inputEditor";

//saves input on enter
const processKeyboard = (e) => {

  if (e.keyCode ===13) {
    console.log(e.key);
    inputEditor(e.target);
  } else return;  
}

export default processKeyboard;