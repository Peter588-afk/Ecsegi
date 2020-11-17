function Termek(id,nev,ar,foto){
    this.id=id;
    this.nev=nev;
    this.ar=ar;
    this.foto=foto;
}
t1=new Termek(1,"Concord", 10000, "images/utcai1.jpg")
t2=new Termek(2,"Freak 2", 20000, "images/kosar1.jpg")
t3=new Termek(3,"Papucs", 30000, "images/papucs1.jpg")
Termekek=[t1,t2,t3]

window.addEventListener('load', init)

function init(){
    console.log("OK");
    TermekekMegjelenitese()
    //document.getElementsByName('btn').forEach(e=>addEventListener('click', kirajzol))
    document.addEventListener('click', tablazatotKirajzol)
}

function tablazatotKirajzol(e){
console.log(e.target.tagName);
if(e.target.tagName=="BUTTON" && e.target.name){
    console(e.target.id);
    id=parseInt(e.target.id);
    termek=Termekek.filter(obj => {return obj.id===id})
    console.log(Object.keys(termek));
    console.log(termek[0].nev);
    document.getElementById('tablazat').innerHTML+="<tr><td>"+termek[0].nev+"</td><td>"+termek[0].ar+"</td></tr>";
    }
}
function TermekekMegjelenitese(){

    for(const obj of Termekek){
        console.log(obj.nev);
    

    div=document.createElement("DIV");
    div.classList.add("col-md-4");
    document.getElementById('sor').appendChild(div);
    console.log(obj.foto);
    kep=new Image();
    kep.src=obj.foto;
    h4=document.createElement("H4");
    h4.innerHTML=obj.nev;
    div.appendChild(h4);
    p=document.createElement("P");
    p.innerHTML="Ár: "+obj.ar;
    p.classList.add("price");
    p.classList.add("text-success");
    div.appendChild(p);
    img=document.createElement("IMG");
    img.src=kep.src;
    img.classList.add("images");
    div.appendChild(img);
    br=document.createElement("BR");
    div.appendChild(br);
    btn=document.createElement("BUTTON");
    btn.innerHTML = "Megveszem";
    btn.classList.add("btn");
    btn.classList.add("btn-success");
    btn.id=obj.id;
    btn.name="gomb";
    div.appendChild(btn);
}
}