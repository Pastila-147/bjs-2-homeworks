class AlarmClock {

	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		} else if (this.alarmCollection.find(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		return this.alarmCollection.push({
			callback,
			time,
			canCall: true
		})

	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
	}
	getCurrentFormattedTime() {
		return new Date().toTimeString().substring(0, 5);
	}

	start() {
		if (this.intervalId != null) {
			return
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm) =>
			alarm.canCall = true)
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}