//crear una funcion  que se le pase como parametro un texto y que lo encripte. Añadir una cadena de texto encriptada y la desencripte
//busca alguna libreria que permita encriptar de manera segura
//autor: Sara J.L
//investigacion:Web Crypto API, crypto en node.js 
import  CryptoJS from "crypto-js"
function encriptar(texto:string):string{
  textoEncriptado:string=CryptoJS.AES.encrypt(texto,clave).toString()
  return textoEncriptado
}
function desencriptar(texto:string):string{
  const textoCasiDesencriptado:string = CryptoJS.AES.decrypt(texto,clave)
  const textoOriginal:string = textoCasiDesencriptado.toString(CryptoJS.enc.Utf8)
  return textoOriginal
}

function ejecutarEj2(): void{
  const mensaje: string = "hola mundo"
  const mensajeEncriptado: string = encriptar(mensaje)
  console.log("Mensaje encriptado: ",mensajeEncriptado)
  console.log(`El mensaje ${mensaje} encriptado se convierte en ${mensajeEncriptado}, y al desencriptar se convierte en ${desencriptar(mensaje)}`)
}
