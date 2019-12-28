//------------------SAIR/VOLTAR CADASTRO/LOGIN------------------------

function retornar(){
    javascript:history.back()
}

//---------------------TEBELA PONTUAÇÃO------------------------------

function gerarPontuacao(){
    var jogadores = JSON.parse(localStorage.getItem("jogador"))

    if(jogadores != null){
        
        jogadores.sort(function(b,a){
            return a.pontuacao-b.pontuacao
        })

        var tabela = document.getElementById("tabela")
        
        for(var i=0; i<jogadores.length; i++){
            var tr = document.createElement("tr")
            
            var td = document.createElement("td")
            td.innerHTML = (i+1)
            tr.appendChild(td);
            
            var tdNome = document.createElement("td")
            tdNome.innerHTML = jogadores[i].nome
            tr.appendChild(tdNome);
            
            var tdTurma = document.createElement("td")
            tdTurma.innerHTML = jogadores[i].turma
            tr.appendChild(tdTurma);
            
            var tdPontuacao = document.createElement("td")
            tdPontuacao.innerHTML = jogadores[i].pontuacao
            tr.appendChild(tdPontuacao);
                        
            tabela.appendChild(tr)
            //ranking2()
        }
    }	
}


//-----------------------LOGIN-E-ETC---------------------------------

var jogadores = new Array()


function cadastrar(){

    var u = document.getElementById('usuario').value
    var t = document.getElementById('turma').value
    var s = document.getElementById('senha').value

    if(u == "" || t == "" || s == ""){
        alert("Preencha os dados antes!")
    }else{

   var usuarioJson=JSON.parse(localStorage.getItem('jogador'))

   if(usuarioJson != null){
        jogadores= usuarioJson
        jogadores.push({
            nome:u,
            turma:t,
            senha:s,
            pontuacao: 0
        })

        localStorage.setItem("jogador", JSON.stringify(jogadores))

        window.location.href = "login.html"
   }else{
        jogadores.push({
            nome:u,
            turma:t,
            senha:s,
            pontuacao:0
        })
        localStorage.setItem("jogador", JSON.stringify(jogadores))

        window.location.href = "login.html"
    }
}}

function logar() {
    var userInf = document.getElementById('usuario').value
    var senhaInf = document.getElementById('senha').value

    var jogador = JSON.parse(localStorage.getItem('jogador'))

    var logado = false

    for(var i = 0;i<jogador.length;i++){
        if(userInf == jogador[i].nome && senhaInf == jogador[i].senha){
            logado = true

            localStorage.setItem("jogadorLogado", i)

            window.open("fase01.html")
        }
    }
    if(logado == false){
        alert("usuario ou senha nao existem no sistema!")
    }

}

function loginlogin(){
    window.location.href = "login.html"
}

//--------------------FIM CADASTRO LOGIN------------------------

//-------------------------CLIQUE------------------------

var clicar = new Audio()
clicar.src = "midia/bleep.mp3"

//-------------------------SOM------------------------

var c = new Audio()
c.src = "midia/C.mp3"

var am = new Audio()
am.src = "midia/Am.mp3"

var e = new Audio()
e.src = "midia/E.mp3"

var f = new Audio()
f.src = "midia/F.mp3"

var g = new Audio()
g.src = "midia/G.mp3"

var b = new Audio()
b.src = "midia/B.mp3"

var a = new Audio()
a.src = "midia/A.mp3"

var dm = new Audio()
dm.src = "midia/Dm.mp3"

//---------------------PLAY TUTORIAL---------------------------

function cc(){
    c.play()
}

function amam(){
    am.play()
}

function ee(){
    e.play()
}

function ff(){
    f.play()
}

function gg(){
    g.play()
}

function bb(){
    b.play()
}

function aa(){
    a.play()
}

function dmdm(){
    dm.play()
}
//-------------------STOP TUTORIAL---------------------------
function scc(){
    c.pause()
}

function samam(){
    am.pause()
}

function see(){
    e.pause()
}

function sff(){
    f.pause()
}

function sgg(){
    g.pause()
}

function sbb(){
    b.pause()
}

function saa(){
    a.pause()
}

function sdmdm(){
    dm.pause()
}
//------------------PLAY GAME---------------------------

var tocar1 = new Audio()
tocar1.src = "midia/fase01.mp3"

var tocar2 = new Audio()
tocar2.src = "midia/fase02.mp3"

var tocar3 = new Audio()
tocar3.src = "midia/fase03.mp3"

var tocar4 = new Audio()
tocar4.src = "midia/fase04.mp3"

var tocar5 = new Audio()
tocar5.src = "midia/fase05.mp3"

var tocar6 = new Audio()
tocar6.src = "midia/fase06.mp3"

var tocar7 = new Audio()
tocar7.src = "midia/fase07.mp3"

var tocar8 = new Audio()
tocar8.src = "midia/fase08.mp3"

var tocar9 = new Audio()
tocar9.src = "midia/fase09.mp3"

var tocar101 = new Audio()
tocar101.src = "midia/fase10.mp3"

var tocar111 = new Audio()
tocar111.src = "midia/fase11.mp3"

var tocar121 = new Audio()
tocar121.src = "midia/fase12.mp3"

//------------------MUSICAS------------------------

function tocar01(){
    tocar1.play()
}

function tocar02(){
    tocar2.play()
}

function tocar03(){
    tocar3.play()
}

function tocar04(){
    tocar4.play()
}

function tocar05(){
    tocar5.play()
}

function tocar06(){
    tocar6.play()
}

function tocar07(){
    tocar7.play()
}

function tocar08(){
    tocar8.play()
}

function tocar09(){
    tocar9.play()
}

function tocar10(){
    tocar101.play()
}

function tocar11(){
    tocar111.play()
}

function tocar12(){
    tocar121.play()
}

//---------------------STOP GAME----------------------------------

function parar01(){
    tocar1.pause()
}

function parar02(){
    tocar2.pause()
}

function parar03(){
    tocar3.pause()
}

function parar04(){
    tocar4.pause()
}

function parar05(){
    tocar5.pause()
}

function parar06(){
    tocar6.pause()
}

function parar07(){
    tocar7.pause()
}

function parar08(){
    tocar8.pause()
}

function parar09(){
    tocar9.pause()
}

function parar10(){
    tocar101.pause()
}

function parar11(){
    tocar111.pause()
}

function parar12(){
    tocar121.pause()
}

//------------------SAIR/VOLTAR------------------------

function recarregar(){
    window.location.href = "fase01.html"
}

function sair(){
    window.location.href = "index.html"
}

function retornar(){
    javascript:history.back()
}

//-----------------TUTORIAL-----------------------------
function jogar(){
document.getElementById("videoTutorial").hidden=false

}

function posTutorial() {
    document.getElementById("btnfase01").hidden=false
    document.getElementById("btn2fase01").hidden=false
    document.getElementById("btn3fase01").hidden=false
    document.getElementById("btn4fase01").hidden=false
    document.getElementById("btn5fase01").hidden=false
    document.getElementById("tocar01").hidden=false
    document.getElementById("parar01").hidden=false
    document.getElementById("sair").hidden=false
    document.getElementById("videoTutorial").hidden=true
    document.getElementById("gif1").hidden=false
    
    document.getElementById("playTuto01").hidden=true
    document.getElementById("playTuto02").hidden=true
    document.getElementById("playTuto03").hidden=true
    document.getElementById("playTuto04").hidden=true
    document.getElementById("playTuto05").hidden=true
    document.getElementById("playTuto06").hidden=true
    document.getElementById("playTuto07").hidden=true
    document.getElementById("playTuto08").hidden=true

    document.getElementById("stopTuto01").hidden=true
    document.getElementById("stopTuto02").hidden=true
    document.getElementById("stopTuto03").hidden=true
    document.getElementById("stopTuto04").hidden=true
    document.getElementById("stopTuto05").hidden=true
    document.getElementById("stopTuto06").hidden=true
    document.getElementById("stopTuto07").hidden=true
    document.getElementById("stopTuto08").hidden=true

    document.getElementById("jogar").hidden=true
    document.getElementById("recarregar").hidden=true
    document.getElementById("sair2").hidden=true
    document.getElementById("recarregar2").hidden=true
    document.getElementById("sair3").hidden=true
    document.getElementById("jogar").hidden=true

}

function tons(){
    document.getElementById("acordes").hidden=false
    document.getElementById("tons").hidden=true
    document.getElementById("recarregar").hidden=false
    document.getElementById("acordes").hidden=false
    document.getElementById("recarregar").hidden=false
    document.getElementById("sair2").hidden=true
    document.getElementById("playTuto").hidden=true
}

function playTuto(){
    document.getElementById("playTuto").hidden=true
    document.getElementById("tons").hidden=true

    document.getElementById("playTuto01").hidden=false
    document.getElementById("playTuto02").hidden=false
    document.getElementById("playTuto03").hidden=false
    document.getElementById("playTuto04").hidden=false
    document.getElementById("playTuto05").hidden=false
    document.getElementById("playTuto06").hidden=false
    document.getElementById("playTuto07").hidden=false
    document.getElementById("playTuto08").hidden=false

    document.getElementById("stopTuto01").hidden=false
    document.getElementById("stopTuto02").hidden=false
    document.getElementById("stopTuto03").hidden=false
    document.getElementById("stopTuto04").hidden=false
    document.getElementById("stopTuto05").hidden=false
    document.getElementById("stopTuto06").hidden=false
    document.getElementById("stopTuto07").hidden=false
    document.getElementById("stopTuto08").hidden=false

    document.getElementById("jogar").hidden=false
    document.getElementById("recarregar").hidden=false
    document.getElementById("sair2").hidden=true
    document.getElementById("recarregar").hidden=true
    document.getElementById("recarregar2").hidden=false
    document.getElementById("sair3").hidden=false
}

//-----------------FASE 01-----------------------

var contador = 0
for(var i=0;i<13;i++){

    function botao01(resposta){

    if(resposta == "resposta01"){
        clicar.play()
        contador += 100
        clicar.play()
        document.getElementById("botoes01").hidden=true
        document.getElementById("btnfase02").hidden=false
        document.getElementById("btn2fase02").hidden=false
        document.getElementById("btn3fase02").hidden=false
        document.getElementById("btn4fase02").hidden=false
        document.getElementById("btn5fase02").hidden=false
        document.getElementById("gif1").hidden=true
        document.getElementById("gif2").hidden=false
        document.getElementById("tocar01").hidden=true
        document.getElementById("tocar02").hidden=false
        document.getElementById("parar01").hidden=true
        document.getElementById("parar02").hidden=false
        tocar1.pause()

        }else if(resposta == "resposta02"){
            clicar.play()

            window.location.href = "derrota.html"
            clicar.play()

        }else if(resposta == "resposta03"){
            clicar.play()

            window.location.href = "derrota.html"
            clicar.play()

        }else if(resposta == "resposta04"){
            clicar.play()

            window.location.href = "derrota.html"
            clicar.play()

        }else if(resposta == "resposta05"){
        clicar.play()
        alert("Resposta errada, tente novamente")
        window.location.href = "derrota.html"
        clicar.play()
    }

//-----------------FASE 02-----------------------

    if(resposta == "resposta21"){
        clicar.play()
        alert("Resposta errada, tente novamente")
        window.location.href = "derrota.html"
        clicar.play()

        }else if(resposta == "resposta22"){
            clicar.play()

            window.location.href = "derrota.html"
            clicar.play()

        }else if(resposta == "resposta23"){
            clicar.play()
            contador += 150
            clicar.play()
            document.getElementById("botoes02").hidden=true
            document.getElementById("btnfase03").hidden=false
            document.getElementById("btn2fase03").hidden=false
            document.getElementById("btn3fase03").hidden=false
            document.getElementById("btn4fase03").hidden=false
            document.getElementById("btn5fase03").hidden=false
            document.getElementById("gif2").hidden=true
            document.getElementById("gif3").hidden=false
            document.getElementById("tocar02").hidden=true
            document.getElementById("tocar03").hidden=false
            document.getElementById("parar02").hidden=true
            document.getElementById("parar03").hidden=false
            tocar2.pause()

        }else if(resposta == "resposta24"){
            clicar.play()

            window.location.href = "derrota.html"
            clicar.play()

        }else if(resposta == "resposta25"){
        clicar.play()
        alert("Resposta errada, tente novamente")
        window.location.href = "derrota.html"
        clicar.play()

    }

//-----------------FASE 03-----------------------
if(resposta == "resposta31"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta32"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta33"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta34"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta35"){
    clicar.play()
    contador += 200
    clicar.play()
    document.getElementById("botoes03").hidden=true
    document.getElementById("btnfase04").hidden=false
    document.getElementById("btn2fase04").hidden=false
    document.getElementById("btn3fase04").hidden=false
    document.getElementById("btn4fase04").hidden=false
    document.getElementById("btn5fase04").hidden=false
    document.getElementById("gif3").hidden=true
    document.getElementById("gif4").hidden=false
    document.getElementById("tocar03").hidden=true
    document.getElementById("tocar04").hidden=false
    document.getElementById("parar03").hidden=true
    document.getElementById("parar04").hidden=false
    tocar3.pause()

}
//-----------------FASE 04-----------------------
if(resposta == "resposta41"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta42"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta43"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta44"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta45"){
    clicar.play()
    contador += 250
    clicar.play()
    document.getElementById("botoes04").hidden=true
    document.getElementById("btnfase05").hidden=false
    document.getElementById("btn2fase05").hidden=false
    document.getElementById("btn3fase05").hidden=false
    document.getElementById("btn4fase05").hidden=false
    document.getElementById("btn5fase05").hidden=false
    document.getElementById("gif4").hidden=true
    document.getElementById("gif5").hidden=false
    document.getElementById("tocar04").hidden=true
    document.getElementById("tocar05").hidden=false
    document.getElementById("parar04").hidden=true
    document.getElementById("parar05").hidden=false
    tocar4.pause()
}

//-----------------FASE 05-----------------------
if(resposta == "resposta51"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta52"){
    clicar.play()
    contador += 300
    clicar.play()
    document.getElementById("botoes05").hidden=true
    document.getElementById("btnfase06").hidden=false
    document.getElementById("btn2fase06").hidden=false
    document.getElementById("btn3fase06").hidden=false
    document.getElementById("btn4fase06").hidden=false
    document.getElementById("btn5fase06").hidden=false
    document.getElementById("gif5").hidden=true
    document.getElementById("gif1").hidden=false
    document.getElementById("tocar05").hidden=true
    document.getElementById("tocar06").hidden=false
    document.getElementById("parar05").hidden=true
    document.getElementById("parar06").hidden=false
    tocar5.pause()

}else if(resposta == "resposta53"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta54"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta55"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}

//-----------------FASE 06-----------------------
if(resposta == "resposta61"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta62"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta63"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta64"){
    clicar.play()
    contador += 350
    clicar.play()
    document.getElementById("botoes06").hidden=true
    document.getElementById("btnfase07").hidden=false
    document.getElementById("btn2fase07").hidden=false
    document.getElementById("btn3fase07").hidden=false
    document.getElementById("btn4fase07").hidden=false
    document.getElementById("btn5fase07").hidden=false
    document.getElementById("gif1").hidden=true
    document.getElementById("gif2").hidden=false
    document.getElementById("tocar06").hidden=true
    document.getElementById("tocar07").hidden=false
    document.getElementById("parar06").hidden=true
    document.getElementById("parar07").hidden=false
    tocar6.pause()

}else if(resposta == "resposta65"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}

//-----------------FASE 07-----------------------
if(resposta == "resposta71"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta72"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta73"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta74"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta75"){
    clicar.play()
    contador += 400
    clicar.play()
    document.getElementById("botoes07").hidden=true
    document.getElementById("btnfase08").hidden=false
    document.getElementById("btn2fase08").hidden=false
    document.getElementById("btn3fase08").hidden=false
    document.getElementById("btn4fase08").hidden=false
    document.getElementById("btn5fase08").hidden=false
    document.getElementById("gif2").hidden=true
    document.getElementById("gif3").hidden=false
    document.getElementById("tocar07").hidden=true
    document.getElementById("tocar08").hidden=false
    document.getElementById("parar07").hidden=true
    document.getElementById("parar08").hidden=false
    tocar7.pause()

}

//-----------------FASE 08-----------------------
if(resposta == "resposta81"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta82"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta83"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta84"){
    clicar.play()
    contador += 450
    clicar.play()
    document.getElementById("botoes08").hidden=true
    document.getElementById("btnfase09").hidden=false
    document.getElementById("btn2fase09").hidden=false
    document.getElementById("btn3fase09").hidden=false
    document.getElementById("btn4fase09").hidden=false
    document.getElementById("btn5fase09").hidden=false
    document.getElementById("gif3").hidden=true
    document.getElementById("gif4").hidden=false
    document.getElementById("tocar08").hidden=true
    document.getElementById("tocar09").hidden=false
    document.getElementById("parar08").hidden=true
    document.getElementById("parar09").hidden=false
    tocar8.pause()

}else if(resposta == "resposta85"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}

//-----------------FASE 09-----------------------
if(resposta == "resposta91"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta92"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta93"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta94"){
    clicar.play()
    contador += 500
    clicar.play()
    document.getElementById("botoes09").hidden=true
    document.getElementById("btnfase10").hidden=false
    document.getElementById("btn2fase10").hidden=false
    document.getElementById("btn3fase10").hidden=false
    document.getElementById("btn4fase10").hidden=false
    document.getElementById("btn5fase10").hidden=false
    document.getElementById("gif4").hidden=true
    document.getElementById("gif5").hidden=false
    document.getElementById("tocar09").hidden=true
    document.getElementById("tocar10").hidden=false
    document.getElementById("parar09").hidden=true
    document.getElementById("parar10").hidden=false
    tocar9.pause()

}else if(resposta == "resposta95"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}

//-----------------FASE 10-----------------------
if(resposta == "resposta101"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta102"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta103"){
    clicar.play()
    contador += 550
    clicar.play()
    document.getElementById("botoes10").hidden=true
    document.getElementById("btnfase11").hidden=false
    document.getElementById("btn2fase11").hidden=false
    document.getElementById("btn3fase11").hidden=false
    document.getElementById("btn4fase11").hidden=false
    document.getElementById("btn5fase11").hidden=false
    document.getElementById("gif5").hidden=true
    document.getElementById("gif1").hidden=false
    document.getElementById("tocar10").hidden=true
    document.getElementById("tocar11").hidden=false
    document.getElementById("parar10").hidden=true
    document.getElementById("parar11").hidden=false
    tocar101.pause()

}else if(resposta == "resposta104"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta105"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}

//-----------------FASE 11-----------------------
if(resposta == "resposta111"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta112"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta113"){
    clicar.play()
    contador += 700
    clicar.play()
    document.getElementById("botoes11").hidden=true
    document.getElementById("btnfase12").hidden=false
    document.getElementById("btn2fase12").hidden=false
    document.getElementById("btn3fase12").hidden=false
    document.getElementById("btn4fase12").hidden=false
    document.getElementById("btn5fase12").hidden=false
    document.getElementById("gif1").hidden=true
    document.getElementById("gif2").hidden=false
    document.getElementById("tocar11").hidden=true
    document.getElementById("tocar12").hidden=false
    document.getElementById("parar11").hidden=true
    document.getElementById("parar12").hidden=false
    tocar111.pause()

}else if(resposta == "resposta114"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta115"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}

//-----------------FASE 12-----------------------
if(resposta == "resposta121"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta122"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta123"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()


}else if(resposta == "resposta124"){
    clicar.play()
    alert("Resposta errada, tente novamente")
    window.location.href = "derrota.html"
    clicar.play()

}else if(resposta == "resposta125"){
    clicar.play()
    contador += 1000
    clicar.play()
    tocar121.pause()

}

    Swal.fire({
        title: "Parabéns!!! Você acumulou "+contador+" pontos..",
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
        `
    })
    //recuperar o id do usuário logado
    var idLogado = localStorage.getItem('jogadorLogado')
    //adiconar a pontuação no respectivo usuário logado
    var jogadores = JSON.parse(localStorage.getItem("jogador"))
    //atualizo o valor da contador da pontuação no array
    jogadores[idLogado].pontuacao = contador
    //salvar no local/storage
    localStorage.setItem("jogador", JSON.stringify(jogadores))
    
    


}

}

function ranking2(){
    var json=JSON.parse(localStorage.getItem('jogador'))
    json.sort(function(b,a){
        return a.pontuacao-b.pontuacao
        //console.log(json)
    })
}


//------------------TELA PRETA DERROTA---------------------

function derrota(){
    window.location.href = "pontuação.html"
    clicar.play()
    document.write(localStorage.getItem("usuario"))
    ranking2()
}

