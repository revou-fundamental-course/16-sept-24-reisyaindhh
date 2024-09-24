// menghapus form yg sudah di isi
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName ("form")) {
        form.reset();
    }

}

let menuBtn = document.querySelector('#contact');
let closeBtn = document.querySelector('#contact');

// belum selesai hehhehe maaf