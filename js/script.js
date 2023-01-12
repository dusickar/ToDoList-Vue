$('.deletedTasks').on('click', function() {
        $('.activeTasks').removeClass('active text-primary');
        $('.activeTasks').addClass('text-secondary');
        
        $('.deletedTasks').removeClass('text-secondary');
        $('.deletedTasks').addClass('active text-primary');
});

$('.activeTasks').on('click', function() {
        $('.deletedTasks').removeClass('active text-primary');
        $('.deletedTasks').addClass('text-secondary');
        
        $('.activeTasks').removeClass('text-secondary');
        $('.activeTasks').addClass('active text-primary');
});
















