console.log('funguju!');

const html = Number(prompt("Zadej svoji úroveň HTML na škále od 1 do 100"));
const css = Number(prompt("Zadej svoji úroveň CSS na škále od 1 do 100"));
const javaScript = Number(prompt("Zadej svoji úroveň Java Script na škále od 1 do 100"));




const updateSkill = (idcko,uroven)=>{
    const popisOsy = document.querySelector(`#${idcko} .skill__value`);
    popisOsy.innerHTML = `${uroven} /100` ;
    const hodnota = document.querySelector(`#${idcko} .skill__progress`);
    console.log(hodnota);
    hodnota.style.width = `${uroven}%`;
}

updateSkill("skill1",html);
updateSkill("skill2",css);
updateSkill("skill3",javaScript);
