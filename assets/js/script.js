const tareas = [
    {
        id: Date.now(),
        nombre: 'ir al colegio',
        estado: false
    },
    {
        id: Date.now() + 1,
        nombre: 'visitar a la abuela',
        estado: false
    },
    {
        id: Date.now() + 2,
        nombre: 'pasear al perro',
        estado: false
    }
];

const botonAgregar = document.querySelector('#btn-agregar');
const completadas = document.querySelector('#realizadas');

function datosPorDefectos() {
    let html = '';
    let listaDeTareas = document.querySelector('.cuerpo');
    let realizada = 0;
    for (let tarea of tareas) {
        const color = tarea.estado ? 'rgba(6, 129, 251, 0.781)' : '';
        const letra = tarea.estado ? 'Roboto Mono' : '';
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td class="table-active" style="background-color: ${color}; font-family: ${letra};">${tarea.nombre}</td>
                <td>
                    <input id='listo' type="checkbox" ${tarea.estado ? 'checked' : ''} onclick="cambiarEstado(${tarea.id})" />
                    <i class="fa-solid m-1 fa-trash" onclick='borrar(${tarea.id})'></i>
                </td>
            </tr>`;
        if (tarea.estado) {
            realizada++;
        }
    }
    listaDeTareas.innerHTML = html;
    document.querySelector('#total-tarea').innerHTML = tareas.length;
    completadas.innerHTML = realizada;
}

datosPorDefectos();

botonAgregar.addEventListener('click', () => {
    let agregarTarea = document.querySelector('#agregar-tarea');
    if (agregarTarea.value !== '') {
        const nuevaTarea = { id: Date.now(), nombre: agregarTarea.value, estado: false };
        tareas.push(nuevaTarea);
        agregarTarea.value = '';
        datosPorDefectos();
    } else {
        alert('Debes ingresar una tarea');
    }
});

function borrar(id) {
    let buscando = tareas.findIndex((e) => e.id === id);
    tareas.splice(buscando, 1);
    datosPorDefectos();
}

function cambiarEstado(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.estado = !tarea.estado;
        datosPorDefectos();
    }
}
