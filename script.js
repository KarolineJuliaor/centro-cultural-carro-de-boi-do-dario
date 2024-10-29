function showActivity(activityId) {
    document.querySelectorAll('.activity-content').forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(activityId).style.display = 'block';
}
