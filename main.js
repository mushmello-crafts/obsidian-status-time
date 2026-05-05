const obsidian = require('obsidian');

class CleanClockPlugin extends obsidian.Plugin {
    async onload() {
        this.statusBarItemEl = this.addStatusBarItem();
        this.updateTime();
        this.registerInterval(
            window.setInterval(() => this.updateTime(), 60000)
        );
    }

    updateTime() {
        const currentTime = obsidian.moment().format('h:mm A');
        this.statusBarItemEl.setText(currentTime);
    }
}

module.exports = CleanClockPlugin;
