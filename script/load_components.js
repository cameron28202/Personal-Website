async function loadComponent(url, elementId){
    try{
        if (elementId  === 'header-container') {
            if (window.location.pathname.includes('_HTML')) {
                url = url.replace('header.html', 'header_HTML.html');
            }
        }
        
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Error loading ${url}: ${response.status}`);
        }
        
        const htmlContent = await response.text();
        document.getElementById(elementId).innerHTML = htmlContent;

        if(elementId === 'header-container'){
            setupMenu();
        }
    }
    catch(error){
        console.error('Error loading component:', error);
        document.getElementById(elementId).innerHTML = 'Error loading component';
    }
}

function setupMenu(){
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');
    const logoNameContainer = document.getElementById('logoNameContainer');


    if(logoNameContainer){
        logoNameContainer.addEventListener('click', function(){

            if (window.location.pathname.includes('_HTML')) {
                window.location.href = 'index_HTML.html';
            }
            else{
                window.location.href = 'index.html';
            }
        });
    }

    if(menuButton && navLinks){
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('open');
            navLinks.classList.toggle('open');
        })
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('/~cameron28202/components/header.html', 'header-container');
    loadComponent('/~cameron28202/components/footer.html', 'footer-container');
});

