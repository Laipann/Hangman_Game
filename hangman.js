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
    getCanvas()

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
                if (loseCount == 1){head()}
                if (loseCount == 2){body()}
                if (loseCount == 3){rigthHand()}
                if (loseCount == 4){leftHand()}
                if (loseCount == 5){rigthLeg()}
                if (loseCount == 6){leftLeg()
                    blocker()
                }

            }
        })
    })

}

const canvas = document.getElementById('myCanvas')
const c = canvas.getContext('2d')

function getCanvas() {

    c.beginPath()

    c.moveTo(20,160)
    c.lineTo(20,130)
    c.lineTo(150,130)
    c.lineTo(150,160)
    c.moveTo(65,130)
    c.lineTo(65,40)
    c.lineTo(110,40)
    c.lineTo(110,60)
    c.stroke()

}



function head() {
    c.beginPath()
    c.arc(110,70,10,0,2 * Math.PI)
    c.stroke()
}

function body(){
    c.beginPath() 
    c.moveTo(110,80)
    c.lineTo(110,105)
    c.stroke()
}

function rigthHand(){
    c.beginPath() 
    c.moveTo(110,90)
    c.lineTo(125,80)
    c.stroke()
}
function leftHand(){
    c.beginPath() 
    c.moveTo(110,90)
    c.lineTo(95,80)
    c.stroke()
}
function rigthLeg(){
    c.beginPath()
    c.moveTo(110,105)
    c.lineTo(120,115)
    c.stroke()
}
function leftLeg(){
    c.beginPath()
    c.moveTo(110,105)
    c.lineTo(100,115)
    c.stroke()
}



pilihKategori()

