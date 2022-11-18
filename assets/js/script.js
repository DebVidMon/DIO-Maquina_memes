function enableUpload(){
    const imageInput = document.querySelector("#image-input")
    console.log("preparou")
    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        console.log("engatilhou")
        reader.addEventListener("load",()=>{
            const uploadImage = reader.result
            console.log(uploadImage)
            changePicture(uploadImage,"")
            
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memes =[
        {"name": "Amando",
        "path" : "./assets/img/amando.jpeg"},
        {"name": "Amigos",
        "path": "./assets/img/amigos.jpeg"},
        {"name": "Assustado",
        "path": "./assets/img/assustado.jpg"},
        {"name": "Atrapalhando",
        "path" : "./assets/img/atrapalhando.jpeg"},
        {"name": "Bravo",
        "path": "./assets/img/bravo.jpg"},
        {"name": "Chorando",
        "path": "./assets/img/chorando.jpg"},
        {"name": "De Olho",
        "path" : "./assets/img/deOlho.jpeg"},
        {"name": "Desconfiado",
        "path": "./assets/img/desconfiado.png"},
        {"name": "Dormindo",
        "path": "./assets/img/dormindo.jpg"},
        {"name": "Escondido",
        "path" : "./assets/img/escondido.jpg"},
        {"name": "Feliz",
        "path": "./assets/img/feliz.jpeg"},
        {"name": "Frágil",
        "path": "./assets/img/fragil.jpeg"},
        {"name": "Lençol",
        "path": "./assets/img/naCama.jpeg"},
        {"name": "Mal-Humorado",
        "path" : "./assets/img/malHumorado.jpg"},
        {"name": "Martini",
        "path": "./assets/img/martini.jpg"},
        {"name": "Microfone",
        "path": "./assets/img/microfone.jpg"},
        {"name": "Mistério",
        "path" : "./assets/img/misterio.jpeg"},
        {"name": "Palhaço",
        "path": "./assets/img/palhaco.jpeg"},
        {"name": "Raiva",
        "path": "./assets/img/raiva.png"},
        {"name": "Trabalhando",
        "path": "./assets/img/trabalhando.jpeg"}    
    ]
    return memes
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#memeList")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changePicture(path, name){
    let displayImage = document.querySelector("#displayImage")
    displayImage.src= path
    displayImage.alt= name

}
async function main(){
    const memesImageList = await mapImageList()
    enableUpload()
    await createGallery(memesImageList)

}

main()