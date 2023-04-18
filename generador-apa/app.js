const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const yearInput = document.getElementById('year');
const publisherInput = document.getElementById('publisher');
const citationInput = document.getElementById('citation');
const button = document.querySelector('button[type="button"]');

function generateApa(){
    const author = authorInput.value.trim();
    const title = titleInput.value.trim();
    const year = yearInput.value.trim();
    const publisher = publisherInput.value.trim();

    if(author === '' || title === '' || year === '' || publisher === ''){
        alert ('Ingrese datos válidos');
        return;
    }

    const citation = `${author} (${year}). ${title}. ${publisher}`;
    citationInput.value = citation;
}

button.addEventListener('click', generateApa);