function enableUpload(){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load",()=>{
            const uploadImage = reader.result

            changePicture(uploadImage)
        })
    })
}

async function mapImageList(){
    const memes =[
        {"name": "It's Fine",
        "path" : "img/meme_this_is_fine_dog.png"},
        {"name": "icon",
        "path": "img/fine.png"},
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

async function changePicture(photo){
    let displayImage = document.querySelector("#displayImage")
    displayImage.src= photo.path
    displayImage.alt= photo.name
}

async function main(){
    const memesImageList = await mapImageList()
    enableUpload()
    await createGallery(memesImageList)
   // await changePicture(memesImageList[1].path)

}

main()