// sidebar
const menuItems = document.querySelectorAll('.menu-item');
// message
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#search-message');

// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.costumize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
// =================== SIDEBAR ====================
function changeActiveItem() {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}
menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id !== 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// ==================== MESSAGE ====================
// search chat
const searchMessage = () => {
    const val = messageSearch.value.toUpperCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toUpperCase();
        if (name.indexOf(val) !== -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000);
})


const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('costumize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click',closeThemeModal)
theme.addEventListener('click',openThemeModal);

const removeSizeSelector = () =>{
    fontSizes.forEach(size=>{
        size.classList.remove('active')
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left','-10rem');
            root.style.setProperty('----sticky-top-right','-33rem');
        }
    document.querySelector('html').style.fontSize = fontSize;
    })
})
const changeColorActiveClass = () =>{
    colorPallete.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

colorPallete.forEach(color =>{
    color.addEventListener('click', () => {
        let primary;
        changeColorActiveClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click',()=>{
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})
Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})