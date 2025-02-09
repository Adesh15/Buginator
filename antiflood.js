//   Author: Antonio Pitasi (@Zaphodias)
const AntiFlood = () => {
    this.users = {}

    this.isFlooding = userId => {
        this.users[userId] = (this.users[userId] || 0) + 1
        return this.users[userId] >= 2
    }

    setInterval(() => {
        for (var i in this.users) {
            if (this.users[i] <= 0) {
                delete this.users[i]
            } else if (this.users[i] > 10) {
                this.users[i] = 10
            } else {
                this.users[i]--
            }
        }
    }, 4500)
}

module.exports = AntiFlood
