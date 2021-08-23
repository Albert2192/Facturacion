const cero = document.querySelector(".cero");
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");

cero.addEventListener('click', ()=>{
    uno.classList.toggle('active');
    dos.classList.toggle('active');
    tres.classList.toggle('active');
});

uno.addEventListener('click',()=>{
    alert('clic en uno');
});

dos.addEventListener('click',()=>{
    alert('clic en dos');
});

tres.addEventListener('click',()=>{
    alert('clic en tres');
});