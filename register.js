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
let id=1
const addElements =()=>{
    let autor = document.getElementById('autor').value
    let tittle = document.getElementById('tittle').value
    let content = document.getElementById('content').value
    let year = document.getElementById('year').value
    

    let datos={
        "id":id++,
        "pista":[
            {
            "autor":autor,
            "tittle":tittle,
            "content":content,
            "year":Number(year),
            "totalCanciones":Number(0)
            }
        ]
    }

    console.log(datos);
    documentos.push(datos)
    


    console.log(documentos);
    showElements();
}


const showElements =()=>{
    let fill = document.getElementById('info')
    let elements='';
    documentos.id=+1
    for (let i of documentos){
        elements+=`
        <span> ID: ${i.id}</span>
        <span> AUTOR: ${i.pista[0].autor}</span>
        <span> TITTLE: ${i.pista[0].tittle}</span>
        <span> CONTENT: ${i.pista[0].content}</span>
        <span> AÑO:${i.pista[0].year}</span> </br>`
    }
    fill.innerHTML=elements
    
}

 

const showTop1=()=>{
    let consultaShowTop1 = document.getElementById('documentsMax')
    let max=0
    let count=0
    let top1=""
    let totalElementos=0
    let totalPistas=[]
    
    
    console.log("soy el lenght: ",documentos.length);

    //console.log("asi se llega al autor: ", documentos[1].pista[0].autor)
    for(let i=1 ; i<documentos.length;i++){
        let autorAContar=documentos[i].pista[0].autor
        documentos[i].pista[0].totalCanciones=+1
        //console.log(i,  documentos[i].pista[0].autor)

        for (let j of documentos){//comparo cada valor
            if(autorAContar  == j.pista[0].autor){
                count=count+1
                documentos[i].pista[0].totalCanciones=count
                totalPistas.push(documentos[i].pista[0].tittle)
                
            }
            
        }
        
        totalElementos=documentos[i].pista[0].totalCanciones
        

        console.log("De", autorAContar," hay: ",totalElementos );
        
        if(totalElementos>=max){
            top1="El Autor con mas canciones es:" + documentos[i].pista[0].autor
            max=totalElementos
            console.log("soy la lista de pistas",totalPistas );
        }
        count=0
    }
    console.log(top1);
    console.log(documentos);
    totalPistas=[]

}






const max1year =()=>{
    let olderOneYear= document.getElementById('olderOneYear')
    count=0
    div='';

    for(let y of documentos){
        let resultado=2023-y.pista[0].year
        console.log(y.pista[0].year)
        if(resultado>1){
            div+=`<p class="parrafos">El titulo ${y.pista[0].tittle} del Autor ${y.pista[0].autor}, cuenta con mas de un año de antiguedad ${resultado} años</p>`
        }
    }
    olderOneYear.innerHTML=div
}


btnAdd.addEventListener('click', addElements)
btnTopOne.addEventListener('click', showTop1)
btnOldYear.addEventListener('click', max1year)



