// Obtengo las imágenes de la galería.
const images = [ ... document.querySelectorAll("#works li")];

// Recorro las imágenes.
images.forEach( (li, pos ) => {

    // console.log(li);

    const clases = li.className.split(" ");
    

    let figcaption = false;
    if ( li.querySelector("figcaption span") ){
        figcaption = li.querySelector("figcaption span");
        figcaption.textContent = clases.join(" - ");
    }

    let hover = false;
    if ( li.querySelector(".hover .text ul") ){
        
        hover = li.querySelector(".hover .text ul");

        //hover.setAttribute("data-li-position", pos);

        let categories = "";
        clases.forEach( (clase , i) => {
            categories += `<li>${clase}</li>`;
            if ( i < clases.length - 1 ){
                categories += `<li> - </li>`;
            }
        });

        hover.innerHTML = categories;
    }

    let link = "";
    if ( li.querySelector("a") ){
        link = li.querySelector("a");
        link.addEventListener("click", (e) => {
            const nodo = e.target;
            const parent = nodo.parentElement.parentElement.parentElement;
            url = parent.querySelector("img").src;

            document.querySelector("article#photo-view-full img").src = url;
          
        });
    }

   



} );