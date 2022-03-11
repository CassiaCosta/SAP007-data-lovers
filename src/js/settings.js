const buttonMenu = document.querySelector(".checkbox-menu");
buttonMenu.addEventListener('click', () => {
    const options = document.querySelectorAll(".menu-item");
    options.forEach(item => { 
        item.classList.toggle("hide");
    })
});

const buttonDescription = document.getElementById('btnDescription');

function showAndHideDescription() {
    let description = document.getElementById('description').style.display;
    if(description == 'none') {
        document.getElementById('description').style.display = 'block';
        document.getElementById('explanation').style.display = 'none';
        document.getElementById('aboutGames').style.display = 'none';
        document.getElementById('aboutAnime').style.display = 'none';
    }
}
buttonDescription.addEventListener('click', function() {
    showAndHideDescription();
});

const buttonInstruction = document.getElementById('btnExplanation');

function showAndHideInstruction() {
    let instruction = document.getElementById('explanation').style.display;
    if(instruction == 'none') {
        document.getElementById('description').style.display = 'none';
        document.getElementById('explanation').style.display = 'block';
        document.getElementById('aboutGames').style.display = 'none';
        document.getElementById('aboutAnime').style.display = 'none';
    }
}

buttonInstruction.addEventListener('click', function() {
    showAndHideInstruction();
});

const buttonGames = document.getElementById('btnAboutGames');

function showAndHideAboutGames() {
    let games = document.getElementById('aboutGames').style.display;
    if(games == 'none') {
        document.getElementById('description').style.display = 'none';
        document.getElementById('explanation').style.display = 'none';
        document.getElementById('aboutGames').style.display = 'block';
        document.getElementById('aboutAnime').style.display = 'none';
    }
}

buttonGames.addEventListener('click', function() {
    showAndHideAboutGames();
});

const buttonAnime = document.getElementById('btnAboutAnime');

function showAndHideAboutAnime() {
    let anime = document.getElementById('aboutAnime').style.display;
    if(anime == 'none') {
        document.getElementById('description').style.display = 'none';
        document.getElementById('explanation').style.display = 'none';
        document.getElementById('aboutGames').style.display = 'none';
        document.getElementById('aboutAnime').style.display = 'block';
    } else {
        document.getElementById('aboutAnime').style.display = 'none';
    }
}
buttonAnime.addEventListener('click', function() {
    showAndHideAboutAnime();
});