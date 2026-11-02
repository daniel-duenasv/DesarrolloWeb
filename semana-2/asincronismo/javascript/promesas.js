function hacerTarea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tarea terminada");
    }, 2000);
  });
}

hacerTarea().then((mensaje) => {
  console.log(mensaje);
});
