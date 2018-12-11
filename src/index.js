window.onload = () => {
  //boton para cifrar
  document.getElementById('btnCifrar').addEventListener('click',
  (evento)=>{
    evento.preventDefault();
    let frase = document.getElementById('txtTexto').value; //Capturar el texto y se guarda en una variable
    let desplazamiento = parseInt(document.getElementById('txtDesplazamiento').value);// capturo el desplazamiento y lo guardo en una variable
    let fraseCifrada = cipher.encode(frase,desplazamiento);
    document.getElementById('txtdecode').innerHTML=fraseCifrada; // Se muetra en texto descifrado
  })
  //boton para descifrar
  document.getElementById('btnDescifrar').addEventListener('click',
  (evento)=>{
    evento.preventDefault();
    let frase = document.getElementById('txtTexto').value;
    let desplazamiento = parseInt(document.getElementById('txtDesplazamiento').value);
    let fraseDescifrada = cipher.decode(frase,desplazamiento);
    document.getElementById('txtdecode').innerHTML=fraseDescifrada;
  })
  //boton para borrar texto
  document.getElementById('btnReset').addEventListener('click',
  (evento)=>{
    evento.preventDefault();
    let borrarTexto = document.getElementById('txtTexto');
    if(borrarTexto){
      borrarTexto.value = "";
    }
  }) 
  //boton para copiar el mensaje de resultado
  document.getElementById("btnCopiar").addEventListener('click',
  (evento) => {
    evento.preventDefault();
    let copyText = document.getElementById("txtdecode");
    copyText.select();
    document.execCommand("copy");
  })
}
