const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;//get all the variables of the css file

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleText.textContent = 'Light Mode';
    }else{
        toggleIcon.src='assets/icons/moon.svg';
        toggleText.textContent = 'Dark Mode';
    }
});

toggleColors.addEventListener("click", (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color);//change the primary color to the data attribute's color
})