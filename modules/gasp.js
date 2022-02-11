gsap.registerPlugin(TextPlugin);

var intervalID = 0;
var timerID = setInterval(() =>{
    getTime()
}, 1000);

function getTime(){
    var currentDate = new  Date();
    var currentTime = currentDate.toLocaleTimeString();
    console.log(currentTime);     
}


// var text = document.getElementByClass('words');
// text.onclick = fadeOut();

// var opacity = 100;
// var intervalID = 0;

// function fadeOut(){
//     setInterval(disappear, 500);

// }

// function disappear(){
//     opacity = Number(window.getComputedStyle(text).getPropertyValue("opacity"));
//     if (opacity = 100) {
//         opacity = opacity - 0.1;
//         text.style.opacity = opacity
//     } else {
//         clearInterval(intervalID)
//     }
// }

const par1 = 'His name is Haig Baronian. He was a boy. The destination was the Euphrates River. He had forgotten how many days the decimated caravan he is in had marched down south, but one thing he did remember: as time passed, the caravan got smaller and smaller. Liras and gold coins were handed to the gendarmes in exchange for their mercy, yet execution was inevitable after people were milked of what little money they had.'
const par2 = 'They marched through mountain roads & valleys; he witnessed the deaths of those who could not keep up, they were put out of their misery. There were more deaths. Bodies were strewn by the sideway: twisted, blackened, bloated. Stench was everywhere. He looked up, vultures were circling in the sky. They were waiting, waiting for the exhausted deportees to collapse so as to enjoy an evening meal.'
const par3 = 'The caravan kept getting smaller.'
const par4 = 'At one place, his grandmother, or Nana, as he called her. as if she were Jeremiah incarnate, started cursing the Turkish government inhumanity. Pointing to the children as she asked: "what is the fault of children to be subject to such suffering." It invoked the rage in one of the gendarme: the lives of children was too much for him to bare. He pulled out his dagger & plunged into Nanas back over and over. But Nana persisted as she asked for curses on the gendarme and his kind. She could not be silenced with dagger thrusts. Bullets were shot into her body; her life ended in the hands of gendarme, just like Haig uncle before her. She was left by the side of the road, unmourned and unburied.'
const par5 = 'The caravan moved on.'

const display1 = () => {
    return gsap.to("#pgii",{
        duration: 7,
        text: par1,
        ease: 'linear'
    });
}

const display2 = () => {
    return gsap.to("#pgii",{
        duration: 7,
        text: par2,
        ease: 'linear'
    });
}

const display3 = () => {
    return gsap.to("#pgii",{
        duration: 3,
        text: par3,
        ease: 'linear'
    });
}

const display4 = () => {
    return gsap.to("#pgii",{
        duration: 10,
        text: par4,
        ease: 'linear'
    });
}

const display5 = () => {
    return gsap.to("#pgii",{
        duration: 3,
        text: par5,
        ease: 'linear'
    });
}

var master = new gsap.timeline({repeat: 0, repeatDelay: 1});
master.add('start')
master.add(display1(), '+=1');
master.add(display2(), '+=0.5');
master.add(display3(), '+=0.3');
master.add(display4(), '+=0.5');
master.add(display5(), '+=0.5');
master.add(pause());
