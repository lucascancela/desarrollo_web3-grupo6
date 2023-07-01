const preguntas = [
    {
        pregunta: "preguntas aca",
        respuestas:[
            {text: "respuestas aca", correct: false},
            {text: "dasasasd", correct: true},
            {text: "dsasdasdasda", correct: false},
            {text: "dsasadsadsad", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "poner respuestas aca", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
    {
        pregunta: "",
        respuestas:[
            {text: "", correct: false},
            {text: "", correct: true},
            {text: "", correct: false},
            {text: "", correct: false}
        ]
    },
]

let sumPuntos = false
const pregElement = document.getElementById("pregunta")
const btnRespuestas = document.getElementById("btnRta")
const btnSig = document.getElementById("btnSig")

let currentIndexPreg = 0
let puntaje = 0

function startQuiz(){
    currentIndexPreg = 0
    puntaje=0
    btnSig.innerHTML = "siguiente"
    mostrarPregunta()

}

function mostrarPregunta(){
    resetEstado()
    let currentPreg = preguntas[currentIndexPreg]
    let preguntaNo = currentIndexPreg+1;
    pregElement.innerHTML = preguntaNo + ". " + currentPreg.pregunta;

    currentPreg.respuestas.forEach(rta => {
        const boton = document.createElement("boton")
        boton.innerHTML = rta.text
        boton.classList.add("btn")
        btnRespuestas.appendChild(boton)
        if(rta.correct){
            boton.dataset.correct=rta.correct
        }
        boton.addEventListener("click", elegirRta)
        
    })
}

function resetEstado(){
    btnSig.style.display ="none";
    while(btnRespuestas.firstChild){
        btnRespuestas.removeChild(btnRespuestas.firstChild);
    }
}

function elegirRta(a){
    const elegirBtn =a.target
    const isCorrect = elegirBtn.dataset.correct==="true";
    if(isCorrect){
        elegirBtn.classList.add("correcto")
        puntaje++
    }else{
        elegirBtn.classList.add("incorrecto")
    }
    Array.from(btnRespuestas.children).forEach(btn=>{
        if(btn.dataset.correct === "true"){
            btn.classList.add("correcto")
        }
        btn.disabled=true
    })    
    btnSig.style.display="block"

}

function mostratPuntaje(){
    resetEstado()
    pregElement.innerHTML = `tu puntaje fue de ${puntaje} de ${preguntas.length}`
    btnSig.innerHTML = "volver a jugar"
    btnSig.style.display="block"
}

function usarSgBtn(){
    currentIndexPreg++
    if(currentIndexPreg<preguntas.length){
        mostrarPregunta()
    }else{
        mostratPuntaje()
    }
}

btnSig.addEventListener("click",()=>{
    if(currentIndexPreg<preguntas.length){
        usarSgBtn()
    }else{
        startQuiz()
    }
})

startQuiz()