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
            const img = nodo.querySelector("img");
            
            
            url = img.src;

            // alto del viewport
            const alto = window.innerHeight;
            

            // alto de la imagen.
            const altoImg = img.naturalHeight;

            // ancho de la imagen.
            const anchoImg = img.naturalWidth;

            // Es una imagen vertical cuando el alto es mayor al ancho.
            const esVertical = altoImg > anchoImg;

            // Si el alto de la imagen es menor al alto del viewport, entonces la imagen no se ajusta al viewport.
            if ( esVertical ){
                document.querySelector("article#photo-view-full img").classList.remove("no-full-height");
                document.querySelector("article#photo-view-full img").classList.add("full-height");
            } else {
            
                document.querySelector("article#photo-view-full img").classList.remove("full-height");
                document.querySelector("article#photo-view-full img").classList.add("no-full-height");
            }


            document.querySelector("article#photo-view-full img").src = url;
          
        });
    }

   



} );