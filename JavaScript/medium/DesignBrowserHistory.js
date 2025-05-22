class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.current = 0;
    }

    visit(url) {
        this.history = this.history.slice(0, this.current + 1);
        this.history.push(url);
        this.current++;
    }

    back(steps) {
        this.current = Math.max(0, this.current - steps);
        return this.history[this.current];
    }

    forward(steps) {
        this.current = Math.min(this.history.length - 1, this.current + steps);
        return this.history[this.current];
    }
}

const browserHistory = new BrowserHistory("leetcode.com");

browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");

console.log(browserHistory.back(1));  
console.log(browserHistory.back(1));     
console.log(browserHistory.forward(1));

browserHistory.visit("linkedin.com");
console.log(browserHistory.forward(2)); 
console.log(browserHistory.back(2));    
console.log(browserHistory.back(7));