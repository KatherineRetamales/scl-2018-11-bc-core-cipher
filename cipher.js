window.cipher = {
  //funcion cifrar
  encode: (frase, desplazamiento) => {
    let newFrase = ''; //se declara la variable donde se guardara el texto cifrado
    let offSetAscii = 0; //se declara la variable donde se guardara la suma del numero ascii mas el desplazamiento
    for (let i = 0; i < frase.length; i++) {
      let ascii = frase.charCodeAt(i);
      // condicion para el espacio
      if (ascii === 32) {
        offSetAscii = ascii;
      }
      //condicion para la letra ñ minuscula
      if (ascii === 241) {
        offSetAscii = ascii;
      }
      //condicion para la letra Ñ mayuscula
      if (ascii === 209) {
        offSetAscii = ascii;
      }
      //condicion para letras mayusculas
      if (ascii >= 65 && ascii <= 90) {
        offSetAscii = (ascii - 65 + desplazamiento) % 26 + 65;
      }
      //condicion para letras minusculas
      if (ascii >= 97 && ascii <= 122) {
        offSetAscii = (ascii - 97 + desplazamiento) % 26 + 97;
      }
      //condicion para caracter especiales
      if (ascii >= 33 && ascii <= 47) {
        offSetAscii = (ascii - 33 + desplazamiento) % 15 + 33;
      }
      //condicion para numeros
      if (ascii >= 48 && ascii <= 57) {
        offSetAscii = (ascii - 48 + desplazamiento) % 9 + 48;
      }
      newFrase += String.fromCharCode(offSetAscii);
    }
    return newFrase;
  },

  //funcion descifrar
  decode: (frase, desplazamiento) => {
    let newFrase = ''; //se declara la variable donde se guardara el texto descifrado
    let offSetAscii = 0;
    for (let i = 0; i < frase.length; i++) {
      let ascii = frase.charCodeAt(i);
      //condicion para el espacio
      if (ascii === 32) {
        offSetAscii = ascii;
      } //condicion para la letra ñ minuscula
      if (ascii === 241) {
        offSetAscii = ascii;
      }
      //condicion para la letra Ñ mayuscula
      if (ascii === 209) {
        offSetAscii = ascii;
      }
      //condicion para letras mayusculas
      if (ascii >= 65 && ascii <= 90) {
        offSetAscii = (ascii - 90 - desplazamiento) % 26 + 90;
      }
      //condicion para letras minusculas
      if (ascii >= 97 && ascii <= 122) {
        offSetAscii = (ascii - 122 - desplazamiento) % 26 + 122;
      }
      //condicion para caracter especiales
      if (ascii >= 33 && ascii <= 47) {
        offSetAscii = (ascii - 47 - desplazamiento) % 15 + 47;
      }
      //condicion para numeros
      if (ascii >= 48 && ascii <= 57) {
        offSetAscii = (ascii - 57 - desplazamiento) % 9 + 57;
      }
      newFrase += String.fromCharCode(offSetAscii);
    }
    return newFrase;
  }
};