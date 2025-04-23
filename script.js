function agregarAlCarrito(nombreProducto) {
    alert(`🛒 "${nombreProducto}" ha sido agregado al carrito.`);
}

// Opcional: Validación de formulario (básico)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Gracias por tu mensaje. ¡Te contactaremos pronto!");
        form.reset();
    });
});
