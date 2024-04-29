var count = 0;

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('heart').style.display = 'block';
    this.style.display = 'none';
    document.getElementById('btn2').addEventListener('mouseover', desvia);

    var audio_player = document.getElementById('audioPlayer');
    audio_player.volume = 0.15;
    audio_player.play();
});

document.getElementById('btn1').addEventListener('click', button_sim);

function desvia() {
    console.log('Certo!');
    var button = document.getElementById('btn2');
    button.style.position = 'absolute';
    button.style.left = random_int(0, 100);
    button.style.bottom = random_int(0, 100);
    count++;
    if(count>10){
        alert('Não vou desistirrrr meu amor, te amo! Perdoa o Tu!!');
        count = 9;
    }
    
}

function button_sim(){
    console.log('Também certo!');
    var button = document.getElementById('btn1');
    alert('TE AMO TE AMO TE AMO!!!!');
}

function random_int(min, max){
    return Math.random() * ((max - min) + min) + '%';
}
