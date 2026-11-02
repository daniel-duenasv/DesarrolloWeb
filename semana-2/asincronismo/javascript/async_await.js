function hacerTarea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tarea terminada");
    }, 2000);
  });
}

async function main() {
  const mensaje = await hacerTarea();
  console.log(mensaje);
}

main();
