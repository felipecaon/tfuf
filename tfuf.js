const timer = setInterval(() => {
    init();
}, 300);

const speeds = ['0.25', '0.5', '1', '1.25', '1.5'];

function init(){
    const header = document.getElementsByTagName('header')[0];

    if (header) {
        clearInterval(timer); 
        const div = document.createElement('div');
        div.setAttribute('id', 'speed');
        
        const speedSelector = document.createElement('select');
        speedSelector.setAttribute('id', 'speedSelector');
        speedSelector.classList.add('select-options');  

        speeds.forEach(speed => {
            var speedOption = document.createElement('option');
            speedOption.setAttribute('value', `${speed}`);
            speedOption.textContent = `${speed}x`
            speedSelector.appendChild(speedOption);    
        });

        speedSelector.addEventListener("change", () => {
            const audios = document.querySelectorAll("audio");
            let speed = speedSelector.value;

            audios.forEach(audio => {
                audio.playbackRate = speed;    
            });
        });

        div.appendChild(speedSelector);
        header.appendChild(div);
    }
}
    