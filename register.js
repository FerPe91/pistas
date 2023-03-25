/* Hacer una lista de documentos, con un formulario 
para agregar documentos con información 
correspondiente al título, al autor, al contenido 
temático y a la fecha de creación.
Sobre esa lista proveer al menos 3 de los siguientes 
servicios de consulta:
A) autor con más documentos.-B) cantidad de documentos con más de un año de 
antigüedad.
C) lista de documentos de un tema determinado.  -D) título más moderno
-E) título más antiguo  -F) tema mas tratado */

btnAdd = document.getElementById('btnAdd')
btnTopOne = document.getElementById('btnTopOne')
let documentos=[]

const addElements =()=>{
    let autor = document.getElementById('autor').value
    let tittle = document.getElementById('tittle').value
    let content = document.getElementById('content').value
    let year = document.getElementById('year').value
    
    let register={
        "autor":autor,
        "pista":[{
            "tittle":tittle,
            "content":content,
            "year":Number(year)
        }]
    }

    documentos.push(register)
    


    

    console.log(documentos);
    showElements();
}


const showElements =()=>{
    let fill = document.getElementById('info')
    let elements='';
    for (let i of documentos){
        elements+=`<span> AUTOR: ${i.autor}</span>
        <span> TITTLE: ${i.pista[0].tittle}</span>
        <span> CONTENT: ${i.pista[0].content}</span>
        <span> AÑO:${i.pista[0].year}</span> </br>`
    }
    fill.innerHTML=elements
    
}

 /* for(let i = 0; i<documentos.length; i ++){
            if(documentos[pos].autor.pistas==documentos[i].autor.pistas){
                count++
            }
        } */

const showTop1=()=>{
    let consultaShowTop1 = document.getElementById('documentsMax')
    max=0
    maxAutor=''
    for(let pos = 0; pos<documentos.length; pos ++){
        if(documentos[pos].pista.length>max){
            max=documentos[pos].pista.length
            maxAutor=`${documentos[pos].autor} es el que mas publicaciones tiene, publico ${max} veces`
        }    
    }
    console.log("Mostrar document");
    console.log("longitud:", documentos[0].pista.length);
    consultaShowTop1.innerHTML=`${maxAutor}`
}

const max1year =()=>{
    let olderOneYear= document.getElementById('olderOneYear')
    count=0
    div='';

    for(let y of documentos){
        let resultado=2023-y.pista.year
        console.log(y.pista.year)
        if(resultado>1){
            div+=`<p class="parrafos">El titulo ${y.pista.tittle} del Autor ${y.autor}, cuenta con mas de un año de antiguedad ${resultado} años</p>`
        }
    }
    olderOneYear.innerHTML=div
}


btnAdd.addEventListener('click', addElements)
btnTopOne.addEventListener('click', showTop1)
btnOldYear.addEventListener('click', max1year)



