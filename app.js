window.onload = function() {
    const tg = window.Telegram.WebApp;
    let clickCount = 0;

    document.getElementById('clickButton').addEventListener('click', function() {
        clickCount += 1;
        tg.sendData(String(clickCount)); // Send the click count to the bot
    });

    tg.ready();
};
