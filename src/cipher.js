window.cipher = {
  encode: (frase,desplazamiento) => {
    let newFrase = '';
    let offSetAscii = 0 ;
    for(let i = 0; i < frase.length; i++){
      let ascii = frase.charCodeAt(i);
      if (ascii === 32) {
          offSetAscii = ascii ;
      }else {
          offSetAscii = (ascii - 65 + desplazamiento) % 26 + 65 ;
      }
      newFrase +=String.fromCharCode(offSetAscii);
    }
    return newFrase;
  },
  decode: (frase,desplazamiento) => {
    let newFrase = '';
    let offSetAscii = 0 ;
    for(let i = 0; i < frase.length; i++){
      let ascii = frase.charCodeAt(i);
      if (ascii === 32) {
          offSetAscii = ascii ;
      }else{
          offSetAscii = (ascii + 65 - desplazamiento) % 26 + 65 ;
      }
      newFrase +=String.fromCharCode(offSetAscii);
    }
    return newFrase;
  }
};