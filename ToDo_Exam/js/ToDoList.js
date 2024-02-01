//contador
let idCounter = 0;
//seleccionamos el input type = text
const input = document.querySelector("input[type='text']");
//capturamos el evento
userInput.addEventListener("submit", (event) => {
    event.preventDefault();//para que no se nos borre el mensaje de consola
    console.log('Hola desde el formulario');
    addTask();
});

list.addEventListener ("click",(event)=>{
    //console.log (event);
    //console.log (event.srcElement.nodeName);
    if (event.srcElement.nodeName == "INPUT"){
        actualizarStats();
    } else if (event.srcElement.nodeName == "IMG"){
        //console.log(event.srcElement.parentNode.id);
        deleteTarea(event.srcElement.parentNode.id);

    }
});

function addTask (){
    idCounter++;
    let newvalue = input.value;
    if (input.value !=""){
    list.innerHTML += 
    `<div class="task-container" id='${idCounter}'>
    <label>
        <input type="checkbox">
        ${newvalue}
    </label>
    <img src="./img/cubo-de-basura.png" class="close-btn">
</div>`
input.value="";
actualizarStats();
}};

function actualizarStats() {
   
    let elementList = list.querySelectorAll("div");
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    let TareaPendientes = elementList.length-checkbox.length; 
    stats.innerHTML = `<p>Tareas pendientes: ${TareaPendientes} Tareas completadas: ${checkbox.length}</p>`   
};
    

function deleteTarea (id) {
    let tareaBorrada = document.getElementById (id);
    list.removeChild (tareaBorrada);
    actualizarStats();
};