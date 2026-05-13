const countdownDays = 90;

const today = new Date();

const targetDate = new Date(
    today.getTime() + countdownDays * 24 * 60 * 60 * 1000
);

function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;

    const days = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    const daysElement = document.getElementById("days");

    if (difference > 0) {
        daysElement.textContent = days;
    } else {
        daysElement.textContent = "00";
    }
}

updateCountdown();

setInterval(updateCountdown, 1000);