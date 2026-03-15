class UserBehaviorTracker {
    constructor(username) {
        this.username = username;
        this.clicks = [];
        this.typing = [];
        this.scrolls = [];
        this.sectionTimes = {};
        this.idleTime = 0;
        this.lastInteraction = Date.now();
        this.typingStart = null;
        this.activeSection = null;
        this.sectionStartTime = null;

        this._startIdleTimer();
        this._setupListeners();
        this._savePeriodically();
    }

    _startIdleTimer() {
        setInterval(() => {
            const now = Date.now();
            if (now - this.lastInteraction > 5000) {
                this.idleTime += 1;
            }
        }, 1000);
    }

    _setupListeners() {
        document.addEventListener('click', e => {
            this.clicks.push({ x: e.clientX, y: e.clientY, time: new Date().toISOString() });
            this.lastInteraction = Date.now();
        });

        document.addEventListener('keydown', e => {
            const now = Date.now();
            this.typing.push({
                key: e.key,
                delay: this.typingStart ? now - this.typingStart : 0,
                time: new Date().toISOString()
            });
            this.typingStart = now;
            this.lastInteraction = now;
        });

        window.addEventListener('scroll', () => {
            this.scrolls.push({ scrollY: window.scrollY, time: new Date().toISOString() });
            this.lastInteraction = Date.now();
        });

        this._observeSections();
    }

    _observeSections() {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (this.activeSection && this.sectionStartTime) {
                        const duration = (Date.now() - this.sectionStartTime) / 1000;
                        this.sectionTimes[this.activeSection] = (this.sectionTimes[this.activeSection] || 0) + duration;
                    }
                    this.activeSection = id;
                    this.sectionStartTime = Date.now();
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(sec => observer.observe(sec));
    }

    _savePeriodically() {
        setInterval(() => {
            const data = {
                username: this.username,
                clicks: this.clicks,
                typing: this.typing,
                scrolls: this.scrolls,
                sectionTimes: this.sectionTimes,
                idleTime: this.idleTime
            };
            const sessionId = `session-${this.username}-${new Date().toISOString()}`;

            localStorage.setItem(sessionId, JSON.stringify(data));
        }, 10000);
    }
}


