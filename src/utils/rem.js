function setRem() {
    let deviceWidth = document.documentElement.clientWidth;
    // if (deviceWidth > 750) deviceWidth = 750;
    // if (deviceWidth < 320) deviceWidth = 320;
    // set 1 rem = viewWidth / 10
    document.documentElement.style.fontSize = (deviceWidth / 10) + 'px';
    document.body.style.fontSize = '0.5rem';
}

setRem();
window.addEventListener('resize', setRem);
