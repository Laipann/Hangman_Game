const huruf = document.getElementById('huruf')

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

const opsi = {
    hewan: [
        'ayam',
        'burung',
        'kucing',
        'ikan',
        'bebek'
    ],
    buah: [
        'pisang',
        'apel',
        'semangka',
        'anggur',
        'jeruk'
    ],
    negara: [
        'indonesia',
        'jepang',
        'kanada',
        'brazil',
        'italia'
    ],
    warna: [
        'merah',
        'biru',
        'kuning',
        'hijau',
        'ungu'
    ],
    'alatmusik': [
        'gitar',
        'piano',
        'biola',
        'drum',
        'saxofon'
    ],
    kendaraan: [
        'mobil',
        'motor',
        'sepeda',
        'kereta',
        'kapal'
    ]
};

const banKategories = [{
    kategories: ['hewan','buah','negara','warna','alatmusik','kendaraan'
    ]
}];



function blocker() {
    let options = document.querySelectorAll('.options')
    options.forEach((button) => {
        button.disabled = true
    })
}



function pilihKategori() {
    const pilihKategori = banKategories[0].kategories
    pilihKategori.forEach((char, i) => {
        const kategori = document.getElementById('kategori')
        const btn = document.createElement('button')
        btn.textContent = char
        btn.className = 'pick'
        btn.id = char
        btn.onclick = () => getId(char)
        kategori.appendChild(btn)
    })
}



let chosenWord = ''
let winCount = 0
let loseCount = 0
let iniKategori = ''



function getId(char) {
    iniKategori = char
    document.querySelector('.mainmenu').style.display = 'none'
    document.querySelector('.container').style.display = 'block'
    quess()
}


function quess() {
    const g = Math.floor(Math.random() * opsi[iniKategori].length)
    const t = opsi[iniKategori][g]
    const z = t.split("")
    const ty = z.map(h => `<span class='dashes'>_</span>`)
    huruf.innerHTML = ty.join("")


    const soal = alphabet
    soal.forEach((soal) => {
        const options = document.getElementById('options')
        const btn = document.createElement('button')
        btn.textContent = soal
        btn.className = 'options'
        btn.id = soal
        options.appendChild(btn)   
        let dashes = document.getElementsByClassName('dashes') 

        btn.addEventListener('click', () => {
            if(z.includes(btn.id)){
                z.forEach((char,index) => {
                    if(char === btn.id){
                        dashes[index].innerText = char
                        winCount++
                    }
                    if(winCount === z.length){
                        blocker()
                    }
                })
       
            } else {
                loseCount++
                if(loseCount === 5){
                    alert('lu kalah')
                    blocker()
                }
            }
        })
    })

}


pilihKategori()

