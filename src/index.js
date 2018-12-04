window.onload =() => {
  document.getElementById('btnCifrar').addEventListener('click',
  (evento)=>{
    evento.preventDefault();
    let frase = document.getElementById('txtTexto').value.toUpperCase(); //Capturar el texto y se guarda en una variable
    let desplazamiento = parseInt(document.getElementById('txtDesplazamiento').value);
    let fraseCifrada = cipher.encode(frase,desplazamiento);
    document.getElementById('txtdecode').innerHTML=fraseCifrada; // Se muetra en texto descifrado
  })
  document.getElementById('btnDescifrar').addEventListener('click',
  (evento)=>{
    evento.preventDefault();
    let frase = document.getElementById('txtTexto').value.toUpperCase();
    let desplazamiento = parseInt(document.getElementById('txtDesplazamiento').value);
    let fraseDescifrada = cipher.decode(frase,desplazamiento);
    //.log(fraseDescifrada)
    document.getElementById('txtdecode').innerHTML=fraseDescifrada;
  })
}
