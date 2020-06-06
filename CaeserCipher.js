function rot13(str) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let shiftAlpha = alpha.slice(13) + alpha.slice(0,13);
  let decode = [];
  for(let i = 0; i < str.length; i++) {
    if(shiftAlpha.indexOf(str[i]) != -1) {
      decode.push(alpha[shiftAlpha.indexOf(str[i])]);
    }
    else {
      decode.push(str[i]);
    }
  }
  return decode.join('');
}

rot13("SERR PBQR PNZC");