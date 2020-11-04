import './styles/style.css';
import './styles/style.scss';

window.onload = () => {
    let scrollPage;
    let navigation = document.querySelector('.navigation');
    let signIn = document.querySelector('.navigation__sign-in');
    let wrapper = document.querySelector('.wrapper')
    let authentication = document.querySelector('.navigation__authentication');
    let navigationPhoneSearch = document.querySelector('.navigation__phone-search');
    let footerItems = document.querySelectorAll('.footer-menu-for-phone-item__show-item');

    document.addEventListener('scroll', () => {
        scrollPage = window.pageYOffset;
        if(navigation) {
            if(scrollPage>24) {
                navigation.classList.add('navigation--fixed')
            } else {
                navigation.classList.remove('navigation--fixed')
            }
        }
    });

    signIn.addEventListener('click', (e) => {
        if(e.target.tagName==='A') {
            document.querySelector('.wrapper').classList.add('wrapper--active'); 
            signIn.innerHTML = `
            Hi, Angels!
            `
            let cartLength = document.createElement('div');
            cartLength.className = 'navigation-cart-length';
            cartLength.innerHTML = `99`;
            authentication.appendChild(cartLength);
        } else{ e.preventDefault }
    })
    if(navigationPhoneSearch) {
        navigationPhoneSearch.addEventListener('click', () => {
            document.getElementById('phone-search').classList.toggle('phone');
            if(document.getElementById('phone-search').classList.contains('phone')) {
                document.getElementById('search-icon').className='fas fa-times'
            } else {
                document.getElementById('search-icon').className='fas fa-search'
            }
        })
    }
 
    for(let i = 0;i< footerItems.length;i++) {
        footerItems[i].addEventListener('click', (e)=> {
            e.target.parentElement.parentElement.nextElementSibling.classList.toggle('footer-menu-list--show-list');
            e.target.parentElement.classList.toggle('rotate')
        })
    }
 }