const btnJudul = document.getElementById("ubahJudul")
const btnTambahKomen = document.getElementById("tambahKomen")
const btnHapusKomen = document.getElementById("ubahKomen")

btnJudul.addEventListener("click", function () {
    let judulBaru = prompt("Masukan Judul Baru:");
    if (judulBaru !== null && judulBaru !== "") {
        let h1 = document.querySelector(".h1")

        h1.innerText = judulBaru;
    }
})

function tambahKomen() {
    const textKomen = document.getElementById("komen").value;
    if(textKomen !== "") {
        let divKomen = document.createElement("div")
        divKomen.className = "komen"
        let upKomen = document.createElement("p")
        upKomen.className = "isiKomen"
        upKomen.innerText = textKomen;
        divKomen.appendChild(upKomen)
        let kolomKomen = document.querySelector(".kolomKomen")
        kolomKomen.appendChild(divKomen)
        document.getElementById("komen").value ="";
    }
}
function hapusKomen() {
    const kolomKomen = document.querySelector(".kolomKomen")
    const hapusKomen = kolomKomen.querySelector(".komen")
    if (hapusKomen) {
        hapusKomen.remove()
    }
}