document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");
    
    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan komputer secara random atau otomatis
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    // console.log(Math.round(Math.random()*2))
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(()=>alert("DRAW"), 300);
    }

    // Jika pilihan komputer menang
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer Win");
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer WINN");
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer WINNN");
    }

    // Jika pilihan user menang
    if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User Win");
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User WINN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User WINNN");
    }
}