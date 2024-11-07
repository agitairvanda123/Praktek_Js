function showCurrentTime() {
    try {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        console.log("Waktu saat ini:", timeString);
    } catch (error) {
        console.error("Error saat mengambil waktu:", error.message);
    }
}

setInterval(showCurrentTime, 1000);
