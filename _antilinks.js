dejar  manejador  =  m  =>  m

let  linkRegex  =  / chat.whatsapp.com \/ ( [ 0-9A-Za-z ] { 20,24 } ) / i
manejador _ before  =  función asíncrona  ( m , { usuario , isBotAdmin , isAdmin } ) {   
  if  ( ( m . isBaileys  &&  m . fromMe )  ||  m . fromMe  ||  ! m . isGroup )  devuelve  verdadero
  Let  chat  =  global . BASE DE DATOS . datos _ charlas [ m . chatear ]
  let  isGroupLink  =  linkRegex . ejecutivo ( m . texto )

  if  ( chat . antiLink  &&  isGroupLink )  {
    espera  m . reply ( `*「 ANTI LINKS 」*\n*Hasta la vista baby👋, ${ await  this . getName ( m . sender ) } rompiste las reglas serás exterminado....!!*` )
    si  ( isAdmin )  devuelve  m . Responder ( '*Te salvaste cagon(a) eres administrador, no puedo eliminarte :v*' )
    si  ( ! isBotAdmin )  devuelve  m . Responder ( '*El bot no es administrador, no puede exterminar a las personas*' )
    let  linkGC  =  ( 'https://chat.whatsapp.com/'  +  espera  esto . groupInviteCode ( m . chat ) )
    let  isLinkThisGc  =  new  RegExp ( linkGC ,  'i' )
    let  isgclink  =  isLinkThisGc . prueba ( m . texto )
    si  ( isgclink )  devuelve  m . reply ( '*Lol.. enviaste el enlace de este grupo :v*' )
    espera  esto . groupRemove ( m . chat ,  [ m . remitente ] )
  }
  volver  verdadero
}

módulo _ exportaciones  =  controlador
