class ClockReminder {
    constructor() {
      this.reminders = [];
    }
  
    addReminder(time, message) {
      this.reminders.push({ time, message });
    }
  
    start() {
      setInterval(() => {
        const now = new Date();
        const currentTime = now.getHours() + ":" + now.getMinutes();
  
        this.reminders.forEach(reminder => {
          if (reminder.time === currentTime) {
            console.log(Reminder: ${reminder.message});
          }
        });
      }, 1000); // Check every second
    }
  }
  
  module.exports = ClockReminder;