class Logger {
    colors = {
        LOG: '\x1b[37m',
        INFO: '\x1b[36m',
        WARN: '\x1b[33m',
        ERROR: '\x1b[31m',
        DEBUG: '\x1b[35m',
        RESET: '\x1b[0m',
    };

    format(level, message, ...args) {
        const color = this.colors[level];
        const timestamp = new Date().toISOString();
        const tag = `${color}[${level}]${this.colors.RESET}`;
        console.log(`${tag} ${timestamp} - ${message}`, ...args);
    }

    log(message, ...args) {
        this.format('LOG', message, ...args);
    }

    info(message, ...args) {
        this.format('INFO', message, ...args);
    }

    warn(message, ...args) {
        this.format('WARN', message, ...args);
    }

    error(message, ...args) {
        const color = this.colors.ERROR;
        const reset = this.colors.RESET;
        const timestamp = new Date().toISOString();
        console.error(`${color}[ERROR]${reset} ${timestamp} - ${message}`, ...args);
    }

    debug(message, ...args) {
        this.format('DEBUG', message, ...args);
    }
}

module.exports = { Logger: new Logger() };
