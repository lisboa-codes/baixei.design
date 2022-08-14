

  document.write (


    "<span id='navBtn-wrap'><template v-if='signinState'><a href='index.html'> INÍCIO</a> ▪<a class='navBtn' @click='pageSwitchInfo'> INFO</a> ▪<a class='navBtn' @click='logout'> SAIR</a></template><template v-else><a class='navBtn' @click='pageSwitchLogin'>🏴‍☠️ ENTRAR</a><a class='navBtn' @click='pageSwitchRegister'> ↪️ OBTER CONVITE</a></template></span>",
   
    );

   