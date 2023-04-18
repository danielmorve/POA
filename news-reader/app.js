const noticiasContainer = document.getElementById('noticias-container');
const noticiaModal = new bootstrap.Modal(document.getElementById('noticia-modal'));
const noticiaModalTitle = document.getElementById('noticia-modal-title');
const noticiaModalBody = document.getElementById('noticia-modal-body');
const loaderModal = new bootstrap.Modal(document.getElementById('loader-modal'));
const API = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=20';
loaderModal.show();
fetch(API)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((noticia) => {
            const noticiaHTML = `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
            <img src="${noticia.imageUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${noticia.title}</h5>
                <p class="card-text">${noticia.summary}</p>
                <a href="#" 
                class="btn btn-primary" 
                data-bs-toggle="modal"
                data-bs-target="#noticia-modal"
                data-noticia-id="${noticia.id}"
                >
                Leer más
            </a>
            </div>
        </div>
    </div>
        `;
            noticiasContainer.innerHTML += noticiaHTML;
        }); // ForEach
        const btnLeerMas = document.querySelectorAll('[data-bs-toggle="modal"]');
        btnLeerMas.forEach((boton) => {
            boton.addEventListener('click', (event) => {
                const noticiaId = event.target.getAttribute('data-noticia-id');
                const noticiaSeleccionada =
                    data.find(noticia => noticia.id == noticiaId);
                noticiaModalTitle.innerText = noticiaSeleccionada.title;
                noticiaModalBody.innerHTML = `
            <img src="${noticiaSeleccionada.imageUrl}" 
            class="img-fluid" alt="${noticiaSeleccionada.title}">
            <p class="my-4">${noticiaSeleccionada.summary}</p>
            <a href="${noticiaSeleccionada.url}" class="btn btn-primary" 
            target="_blank">Leer noticia completa</a>
            `;
            }); // EventListener
        }); // ForEach Botones
    }).then(() => {
        console.log('Noticias cargadas');
        loaderModal.hide();
    }).catch((error) => {
        console.error(error);
        loaderModal.hide();
    });