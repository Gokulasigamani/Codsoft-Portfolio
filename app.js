
let body=document.getElementById('bg');
let themebtn=document.getElementById('theme')

function toggleTheme()
{
    let theme=localStorage.getItem('theme');

    if(theme=='light')
    {
         document.getElementById('theme').innerHTML='<i class="bi bi-brightness-high"></i>'
         body.classList.add('mbg')
         themebtn.style.color='black'
         themebtn.style.border='2px solid black'
         
         
         
         
    }
    else
    {
        document.getElementById('theme').innerHTML='<i class="bi bi-moon-stars"></i>';
        body.classList.remove('mbg')
        body.style.backgroundColor='black'
        themebtn.style.color='white'
        themebtn.style.border='1px solid lightgrey'
         
        

    }
}

toggleTheme()

 function update()
 {
    let theme=localStorage.getItem('theme')
    if(theme=='light')
    {
         localStorage.setItem('theme','dark');
         toggleTheme()
    }
    else
    {
        localStorage.setItem('theme','light');
        toggleTheme()

    }
 }

