var pg={imgGallery:document.querySelectorAll(".gallery__group li img"),bodyDOM:document.querySelector("body"),pathImage:null,lightbox:null,modal:null},mg={startGalllery:()=>{pg.imgGallery.forEach(l=>{l.addEventListener("click",l=>{pg.pathImage=l.target,mg.ligthBox(pg.pathImage)})})},ligthBox:l=>{pg.bodyDOM.appendChild(document.createElement("DIV")).setAttribute("id","lightbox"),pg.lightbox=document.getElementById("lightbox"),pg.lightbox.style.width="100%",pg.lightbox.style.height="100%",pg.lightbox.style.position="fixed",pg.lightbox.style.zIndex="10",pg.lightbox.style.background="rgba(0,0,0,.8)",pg.lightbox.style.top="0",pg.lightbox.style.left="0",pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id","modal"),pg.modal=document.querySelector("#modal"),pg.modal.innerHTML=l.outerHTML+"<div>x</div>",pg.modal.style.display="block",pg.modal.style.position="absolute",pg.modal.firstChild.style.width="100%",pg.modal.firstChild.style.border="15px solid #FFF",window.matchMedia("(max-width:1000px)").matches?(pg.modal.style.width="90%",pg.modal.firstChild.style.border="10px solid #FFF"):pg.modal.style.width="60%",pg.modal.style.top=0,pg.modal.style.left="50%",pg.modal.style.transform="translate(-50%, -50%)",pg.modal.style.webkitTransform="translate(-50%, -50%)",setTimeout(()=>{pg.modal.style.transition=".6s top ease",pg.modal.style.top="50%",pg.modal.style.left="50%",pg.modal.style.transform="translate(-50%, -50%)",pg.modal.style.webkitTransform="translate(-50%, -50%)"},50),pg.modal.childNodes[1].style.position="absolute",pg.modal.childNodes[1].style.right="5px",pg.modal.childNodes[1].style.top="5px",pg.modal.childNodes[1].style.color="silver",pg.modal.childNodes[1].style.cursor="pointer",pg.modal.childNodes[1].style.fontSize="30px",pg.modal.childNodes[1].style.width="40px",pg.modal.childNodes[1].style.height="40px",pg.modal.childNodes[1].style.textAlign="center",pg.modal.childNodes[1].style.background="#FFF",pg.modal.childNodes[1].style.boderRadius="0px 0px 0px 5px",pg.modal.childNodes[1].addEventListener("click",()=>pg.lightbox.remove())}};mg.startGalllery();

var pg = {
    imgGallery: document.querySelectorAll('.gallery__group li img'),
    bodyDOM: document.querySelector('body'),
    pathImage: null,
    lightbox: null,
    modal: null
}

var mg = {

    startGalllery : ()=>{
        pg.imgGallery.forEach((image)=>{
            image.addEventListener('click',(image)=>{
                pg.pathImage = image.target;
                mg.ligthBox(pg.pathImage);
            })
        });
    },

    ligthBox: (path)=> {

        pg.bodyDOM.appendChild(document.createElement("DIV")).setAttribute('id', 'lightbox');
        pg.lightbox = document.getElementById('lightbox');
        pg.lightbox.style.width = '100%';
        pg.lightbox.style.height = '100%';
        pg.lightbox.style.position = 'fixed';
        pg.lightbox.style.zIndex = '10';
        pg.lightbox.style.background = 'rgba(0,0,0,.8)';
        pg.lightbox.style.top = '0';
        pg.lightbox.style.left = '0';

        pg.lightbox.appendChild(document.createElement("DIV")).setAttribute('id', 'modal');
        pg.modal = document.querySelector('#modal');
        pg.modal.innerHTML = path.outerHTML+'<div>x</div>';

        pg.modal.style.display = 'block';
        pg.modal.style.position = 'absolute';
        pg.modal.firstChild.style.width = '100%';
        pg.modal.firstChild.style.border = '15px solid #FFF';

        if(window.matchMedia('(max-width:1000px)').matches){
            pg.modal.style.width = '90%';
            pg.modal.firstChild.style.border = '10px solid #FFF';
        }else{
            pg.modal.style.width = '60%';
        }

        // MODAL EFFECT
        pg.modal.style.top = 0;
        pg.modal.style.left = '50%';
        pg.modal.style.transform =  'translate(-50%, -50%)';
        pg.modal.style.webkitTransform = 'translate(-50%, -50%)';

        setTimeout(()=>{
            pg.modal.style.transition = '.6s top ease';
            pg.modal.style.top = '50%';
            pg.modal.style.left = '50%';
            pg.modal.style.transform =  'translate(-50%, -50%)';
            pg.modal.style.webkitTransform = 'translate(-50%, -50%)';
        },50)


        pg.modal.childNodes[1].style.position = 'absolute';
        pg.modal.childNodes[1].style.right = '5px';
        pg.modal.childNodes[1].style.top = '5px';
        pg.modal.childNodes[1].style.color = 'silver';
        pg.modal.childNodes[1].style.cursor = 'pointer';
        pg.modal.childNodes[1].style.fontSize = '30px';
        pg.modal.childNodes[1].style.width = '40px';
        pg.modal.childNodes[1].style.height = '40px';
        pg.modal.childNodes[1].style.textAlign = 'center';
        pg.modal.childNodes[1].style.background = '#FFF';
        pg.modal.childNodes[1].style.boderRadius = '0px 0px 0px 5px';

        pg.modal.childNodes[1].addEventListener('click',()=>pg.lightbox.remove());

    },

}

mg.startGalllery();