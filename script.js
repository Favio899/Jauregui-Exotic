/* =====================================
   1. CATÁLOGO DE 15 PRODUCTOS EXÓTICOS (RUTAS .JPG EN CARPETA img/)
===================================== */

const productos = [
    {
        id: 1,
        nombre: "Bota Full Exotic en Piel de Cocodrilo Café Tabaco",
        categoria: "Botas",
        precio: 12950,
        imagen: "img/bota_cocodrilo.jpg",
        descripcion: "Corte artesanal en lomo de cocodrilo genuino con suela de cuero y acabado a mano."
    },
    {
        id: 2,
        nombre: "Bota Vaquera en Piel de Avestruz Coñac",
        categoria: "Botas",
        precio: 7850,
        imagen: "img/bota_avestruz.jpg",
        descripcion: "Piel de avestruz de primera selección con tubo bordado y forro de piel natural."
    },
    {
        id: 3,
        nombre: "Bota Rodeo en Piel de Pitón Reticulado",
        categoria: "Botas",
        precio: 6900,
        imagen: "img/bota_piton.jpg",
        descripcion: "Escama natural de pitón con brillo satinado y construcción Goodyear Welt."
    },
    {
        id: 4,
        nombre: "Botín de Vestir en Piel de Mantarraya",
        categoria: "Botas",
        precio: 8400,
        imagen: "img/bota_mantarraya.jpg",
        descripcion: "Piel perlada de mantarraya altamente resistente con cierre lateral discreto."
    },
    {
        id: 5,
        nombre: "Bota Tradicional en Piel de Caimán Miel",
        categoria: "Botas",
        precio: 9600,
        imagen: "img/bota_caiman.jpg",
        descripcion: "Panza de caimán genuino curtido en tono miel envejecido con horma clásica."
    },
    {
        id: 6,
        nombre: "Zapato Derby en Piel de Lagarto Teju Café",
        categoria: "Botas",
        precio: 6450,
        imagen: "img/bota_lagarto.jpg",
        descripcion: "Textura fina de lagarto teju, ligero y elegante para vestir de etiqueta."
    },
    {
        id: 7,
        nombre: "Sombrero Texana 1000X Pelo de Castor",
        categoria: "Sombreros",
        precio: 8900,
        imagen: "img/sombrero_castor.jpg",
        descripcion: "Texana chocolate en pelo de castor con toquilla de piel exótica y herraje."
    },
    {
        id: 8,
        nombre: "Sombrero Fino con Toquilla de Cocodrilo",
        categoria: "Sombreros",
        precio: 4250,
        imagen: "img/sombrero_cocodrilo.jpg",
        descripcion: "Copa estructurada en lana fina australiana con banda genuina de cocodrilo."
    },
    {
        id: 9,
        nombre: "Sombrero Bangora con Banda de Pitón",
        categoria: "Sombreros",
        precio: 2850,
        imagen: "img/sombrero_piton.jpg",
        descripcion: "Tejido fresco artesanal ideal para temporada cálida con toquilla de pitón."
    },
    {
        id: 10,
        nombre: "Sombrero Shantung Tostado Banda Avestruz",
        categoria: "Sombreros",
        precio: 3300,
        imagen: "img/sombrero_avestruz.jpg",
        descripcion: "Acabado artesanal tostado con tafilete de piel suave y banda de avestruz."
    },
    {
        id: 11,
        nombre: "Cinturón en Piel Genuina de Cocodrilo",
        categoria: "Cintos",
        precio: 3450,
        imagen: "img/cinto_cocodrilo.jpg",
        descripcion: "Cinturón de una pieza en cocodrilo café oscuro con hebilla metálica pulida."
    },
    {
        id: 12,
        nombre: "Cinturón en Piel de Avestruz Coñac",
        categoria: "Cintos",
        precio: 2650,
        imagen: "img/cinto_avestruz.jpg",
        descripcion: "Confeccionado en piel de avestruz legítima con forro interior de vaqueta."
    },
    {
        id: 13,
        nombre: "Cinturón Piteado con Piel de Pitón",
        categoria: "Cintos",
        precio: 3100,
        imagen: "img/cinto_piton.jpg",
        descripcion: "Piel de pitón natural combinada con bordado tradicional en hilo de pita."
    },
    {
        id: 14,
        nombre: "Cartera Billetera en Piel de Mantarraya",
        categoria: "Accesorios",
        precio: 1950,
        imagen: "img/cartera_mantarraya.jpg",
        descripcion: "Diseño compacto con piedra central de mantarraya y tarjeteros en piel fina."
    },
    {
        id: 15,
        nombre: "Chamarra de Piel con Aplicaciones de Avestruz",
        categoria: "Accesorios",
        precio: 14500,
        imagen: "img/chamarra_avestruz.jpg",
        descripcion: "Chamarra en piel café espresso con detalles de avestruz en hombros y bolsillos."
    }
];


/* =====================================
   2. MENÚ MÓVIL
===================================== */
const btnMenuMovil = document.getElementById("btnMenuMovil");
const navPrincipal = document.getElementById("navPrincipal");

if (btnMenuMovil && navPrincipal) {
    btnMenuMovil.addEventListener("click", () => {
        navPrincipal.classList.toggle("abierto");
    });
}


/* =====================================
   3. MANEJO DE SESIÓN ACTIVA DEL USUARIO
===================================== */
function obtenerUsuarioActivo() {
    const guardado = sessionStorage.getItem("jaugueri_usuario");
    return guardado ? JSON.parse(guardado) : null;
}

function guardarUsuarioActivo(usuario) {
    sessionStorage.setItem("jaugueri_usuario", JSON.stringify(usuario));
    actualizarInterfazSesion();
}

function cerrarSesionUsuario() {
    sessionStorage.removeItem("jaugueri_usuario");
    actualizarInterfazSesion();
}

function actualizarInterfazSesion() {
    const usuario = obtenerUsuarioActivo();

    const nombreHeader = document.getElementById("nombreUsuarioHeader");
    if (nombreHeader) {
        if (usuario) {
            nombreHeader.textContent = usuario.nombre.split(" ")[0];
            nombreHeader.classList.remove("oculto");
        } else {
            nombreHeader.textContent = "";
            nombreHeader.classList.add("oculto");
        }
    }

    const panelCuenta = document.getElementById("panelCuentaActiva");
    const bloqueAcceso = document.getElementById("bloqueAccesoUsuarios");

    if (panelCuenta && bloqueAcceso) {
        if (usuario) {
            document.getElementById("perfilNombre").textContent = "Hola, " + usuario.nombre;
            document.getElementById("perfilCorreo").textContent = "Correo: " + usuario.correo;
            document.getElementById("perfilTelefono").textContent =
                usuario.telefono ? "Teléfono: " + usuario.telefono : "Cuenta verificada · Jaugueri Exotic";

            panelCuenta.classList.remove("oculto");
            bloqueAcceso.classList.add("oculto");
        } else {
            panelCuenta.classList.add("oculto");
            bloqueAcceso.classList.remove("oculto");
        }
    }

    const inputNombrePedido = document.getElementById("nombreCliente");
    const inputCorreoPedido = document.getElementById("correoCliente");
    const inputTelPedido = document.getElementById("telefonoCliente");

    if (usuario && inputNombrePedido && !inputNombrePedido.value) {
        inputNombrePedido.value = usuario.nombre;
        if (inputCorreoPedido) inputCorreoPedido.value = usuario.correo;
        if (inputTelPedido && usuario.telefono) inputTelPedido.value = usuario.telefono;
    }
}

document.getElementById("btnCerrarSesion")?.addEventListener("click", () => {
    cerrarSesionUsuario();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

actualizarInterfazSesion();


/* =====================================
   4. FORMATO DE PRECIO Y TARJETAS
===================================== */
function formatearPrecio(precio) {
    return "$" + Number(precio).toLocaleString("es-MX", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " MXN";
}

function crearTarjetaProducto(item) {
    return `
        <article class="producto-card">
            <div class="producto-media">
                <span class="badge-exotico">Full Exotic</span>
                <img src="${item.imagen}" alt="${item.nombre}"
                     onerror="this.src='https://via.placeholder.com/400x500/3d2314/FFFFFF?text=Jaugueri+Exotic'">
            </div>
            <div class="producto-info">
                <span class="producto-cat">${item.categoria}</span>
                <h3 class="producto-titulo">${item.nombre}</h3>
                <p class="producto-desc">${item.descripcion}</p>
                <p class="producto-precio">${formatearPrecio(item.precio)}</p>
                <a href="pedidos.html?producto=${item.id}" class="btn-pedir-card">Solicitar Pieza</a>
            </div>
        </article>
    `;
}


/* =====================================
   5. DESTACADOS EN INICIO (index.html)
===================================== */
const destacadosInicio = document.getElementById("destacadosInicio");
if (destacadosInicio) {
    destacadosInicio.innerHTML = productos.slice(0, 4).map(crearTarjetaProducto).join("");
}


/* =====================================
   6. CATÁLOGO Y FILTROS (productos.html)
===================================== */
const catalogoContenedor = document.getElementById("catalogoProductos");
const buscadorProductos = document.getElementById("buscadorProductos");
const filtroCategoria = document.getElementById("filtroCategoria");
const ordenPrecio = document.getElementById("ordenPrecio");
const contadorProductos = document.getElementById("contadorProductos");

function mostrarCatalogo() {
    if (!catalogoContenedor) return;

    const texto = buscadorProductos ? buscadorProductos.value.toLowerCase().trim() : "";
    const categoria = filtroCategoria ? filtroCategoria.value : "todas";
    const orden = ordenPrecio ? ordenPrecio.value : "destacados";

    let filtrados = productos.filter(item => {
        const coincideTexto =
            item.nombre.toLowerCase().includes(texto) ||
            item.descripcion.toLowerCase().includes(texto);
        const coincideCat = categoria === "todas" || item.categoria === categoria;
        return coincideTexto && coincideCat;
    });

    if (orden === "menor") {
        filtrados.sort((a, b) => a.precio - b.precio);
    } else if (orden === "mayor") {
        filtrados.sort((a, b) => b.precio - a.precio);
    }

    if (contadorProductos) {
        contadorProductos.textContent = `${filtrados.length} productos`;
    }

    if (filtrados.length === 0) {
        catalogoContenedor.innerHTML = "<p>No se encontraron piezas con esos filtros.</p>";
        return;
    }

    catalogoContenedor.innerHTML = filtrados.map(crearTarjetaProducto).join("");
}

if (catalogoContenedor) {
    const params = new URLSearchParams(window.location.search);
    const catUrl = params.get("cat");
    if (catUrl && filtroCategoria) {
        filtroCategoria.value = catUrl;
    }

    buscadorProductos?.addEventListener("input", mostrarCatalogo);
    filtroCategoria?.addEventListener("change", mostrarCatalogo);
    ordenPrecio?.addEventListener("change", mostrarCatalogo);
    mostrarCatalogo();
}


/* =====================================
   7. SELECTOR Y TOTAL EN PEDIDOS (pedidos.html)
===================================== */
const selectProductoPedido = document.getElementById("productoPedido");
const inputCantidadPedido = document.getElementById("cantidadPedido");
const totalPedidoTexto = document.getElementById("totalPedidoTexto");

function actualizarTotalPedido() {
    if (!selectProductoPedido || !totalPedidoTexto) return;
    const idSeleccionado = Number(selectProductoPedido.value);
    const cantidad = Number(inputCantidadPedido?.value || 1);
    const prod = productos.find(p => p.id === idSeleccionado);

    if (prod && cantidad > 0) {
        totalPedidoTexto.textContent = formatearPrecio(prod.precio * cantidad);
    } else {
        totalPedidoTexto.textContent = "$0.00 MXN";
    }
}

if (selectProductoPedido) {
    productos.forEach(item => {
        const opcion = document.createElement("option");
        opcion.value = item.id;
        opcion.textContent = `${item.nombre} — ${formatearPrecio(item.precio)}`;
        selectProductoPedido.appendChild(opcion);
    });

    const params = new URLSearchParams(window.location.search);
    const prodIdUrl = params.get("producto");
    if (prodIdUrl) {
        selectProductoPedido.value = prodIdUrl;
        actualizarTotalPedido();
    }

    selectProductoPedido.addEventListener("change", actualizarTotalPedido);
    inputCantidadPedido?.addEventListener("input", actualizarTotalPedido);
}


/* =====================================
   8. VENTANAS DE USUARIOS (usuarios.html)
===================================== */
const opcionesUsuarios = document.getElementById("opcionesUsuarios");
const formularioLogin = document.getElementById("formularioLogin");
const formularioRegistro = document.getElementById("formularioRegistro");

document.querySelectorAll("[data-formulario]").forEach(boton => {
    boton.addEventListener("click", function() {
        const tipo = this.dataset.formulario;

        opcionesUsuarios?.classList.add("oculto");
        formularioLogin?.classList.add("oculto");
        formularioRegistro?.classList.add("oculto");

        if (tipo === "login") formularioLogin?.classList.remove("oculto");
        if (tipo === "registro") formularioRegistro?.classList.remove("oculto");

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.querySelectorAll("[data-volver]").forEach(boton => {
    boton.addEventListener("click", function() {
        opcionesUsuarios?.classList.remove("oculto");
        formularioLogin?.classList.add("oculto");
        formularioRegistro?.classList.add("oculto");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


/* =====================================
   9. VALIDACIÓN DE FORMULARIOS EN ROJO/VERDE
===================================== */
function configurarFormulario(idFormulario, idRespuesta, callbackExito) {
    const formulario = document.getElementById(idFormulario);
    if (!formulario) return;

    const respuesta = document.getElementById(idRespuesta);
    if (!respuesta) return;

    const boton = formulario.querySelector("button[type='submit']");
    const campos = formulario.querySelectorAll(
        "input:not([type='checkbox']):not([type='hidden']), textarea, select"
    );
    const aceptacion = formulario.querySelector("input[type='checkbox'][required]");

    function validarCampo(campo) {
        const vacio = campo.value.trim() === "";
        if (vacio && !campo.required) {
            campo.classList.remove("valido", "invalido");
            return true;
        }
        const correcto = !vacio && campo.checkValidity();
        campo.classList.toggle("valido", correcto);
        campo.classList.toggle("invalido", !correcto);
        return correcto;
    }

    campos.forEach(campo => {
        campo.addEventListener("input", () => {
            validarCampo(campo);
            respuesta.className = "respuesta-formulario";
            respuesta.textContent = "";
        });
        campo.addEventListener("change", () => validarCampo(campo));
        campo.addEventListener("blur", () => {
            if (campo.value.trim() !== "") validarCampo(campo);
        });
        campo.addEventListener("invalid", () => {
            campo.classList.add("invalido");
            campo.classList.remove("valido");
        });
    });

    if (aceptacion) {
        aceptacion.addEventListener("change", () => {
            aceptacion.classList.toggle("invalido", !aceptacion.checked);
        });
        aceptacion.addEventListener("invalid", () => {
            aceptacion.classList.add("invalido");
        });
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        respuesta.className = "respuesta-formulario";
        respuesta.textContent = "";

        let formularioValido = true;

        campos.forEach(campo => {
            if (!validarCampo(campo)) formularioValido = false;
        });

        if (aceptacion && !aceptacion.checked) {
            aceptacion.classList.add("invalido");
            formularioValido = false;
        }

        if (!formularioValido) {
            respuesta.textContent =
                "Error: revisa los campos marcados en rojo y completa la información obligatoria.";
            respuesta.classList.add("error");
            formulario.reportValidity();
            return;
        }

        if (boton) {
            boton.classList.add("cargando");
            boton.disabled = true;
        }

        setTimeout(function() {
            if (boton) {
                boton.classList.remove("cargando");
                boton.disabled = false;
            }

            if (typeof callbackExito === "function") {
                callbackExito(respuesta);
            } else {
                respuesta.textContent =
                    "¡Gracias! Tu pedido fue registrado correctamente en Jaugueri Exotic.";
                respuesta.classList.add("exito");
            }

            formulario.reset();
            actualizarTotalPedido();

            campos.forEach(campo => campo.classList.remove("valido", "invalido"));
            if (aceptacion) aceptacion.classList.remove("invalido");
        }, 800);
    });
}

configurarFormulario("formPedido", "respuestaPedido");

configurarFormulario("formLogin", "respuestaLogin", function() {
    const correo = document.getElementById("correoLogin").value.trim();
    const nombreDesdeCorreo = correo.split("@")[0].replace(/[._-]/g, " ");
    const nombreFormateado = nombreDesdeCorreo.charAt(0).toUpperCase() + nombreDesdeCorreo.slice(1);

    guardarUsuarioActivo({
        nombre: nombreFormateado,
        correo: correo,
        telefono: ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
});

configurarFormulario("formRegistroUsuario", "respuestaRegistroUsuario", function() {
    const nombre = document.getElementById("nombreUsuario").value.trim();
    const correo = document.getElementById("correoUsuario").value.trim();
    const telefono = document.getElementById("telefonoUsuario").value.trim();

    guardarUsuarioActivo({
        nombre: nombre,
        correo: correo,
        telefono: telefono
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
});