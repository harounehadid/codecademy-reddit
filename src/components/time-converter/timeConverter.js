
const timeSince = time => {

    // Turn it into milliseconds because new Date().getTime() is in milliseconds
    time *= 1000;
    let seconds = Math.floor((new Date().getTime() - time) / 1000);

    // Years
    let interval = seconds / 31536000;
    if (interval >= 1) {
        // I chose to compare with 2 cause interval is a float
        return interval >= 2 ? Math.floor(interval) + ' years ago' : '1 year ago';
    }
    
    // Months
    interval = seconds / 2592000;
    if (interval >= 1) {
        return interval >= 2 ? Math.floor(interval) + ' months ago' : '1 month ago';
    }

    // Days
    interval = seconds / 86400;
    if (interval > 1) {
        return interval >= 2 ? Math.floor(interval) + ' days ago' : '1 day ago';
    }

    // Hours
    interval = seconds / 3600;
    if (interval > 1) {
        return interval >= 2 ? Math.floor(interval) + ' hours ago' : '1 hour ago';
    }

    // Minutes
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    
    // Less than 2 minutes
    return 'just now';
}

export default timeSince;
