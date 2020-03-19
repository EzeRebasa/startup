
let drop_zone = document.getElementById("drop-zone");

const dropHandle = (event) => {
    event.stopPropagation();
    event.preventDefault();

    let files = event.dataTransfer.files;
    console.log(files);

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        console.log(file);
        if (file.type == "text/plain") {
            let read = new FileReader();
            read.onload = onFileLoaded;
            read.readAsText(file);
        } else {
            drop_zone.textContent += "Not a .txt file";
        }
    }

}

function dragOverHandle(event) {
    event.stopPropagation();
    event.preventDefault();
    drop_zone.classList.add("target-zone");
}

function dragAndLeave(event) {
    event.stopPropagation();
    event.preventDefault();
    drop_zone.classList.remove("target-zone");
}

function onFileLoaded(event) {
    
    drop_zone.textContent += event.target.result;
}

drop_zone.addEventListener("dragover", dragOverHandle);
drop_zone.addEventListener("drop", dropHandle);
drop_zone.addEventListener("dragleave", dragAndLeave);


