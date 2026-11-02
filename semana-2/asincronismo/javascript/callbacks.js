function hacerTarea(callback) {
  setTimeout(() => {
    callback("Tarea terminada");
  }, 2000);
}

hacerTarea((mensaje) => {
  console.log(mensaje);
});
