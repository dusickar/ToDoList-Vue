const { createApp } = Vue
      
createApp({
        data() {
                return {
                        newTask: '',
                        characters: [

                        ]
                }
        },
        methods: {
                add() {
                        if (!this.newTask) return //ak sa na neyplní políčko s úlohou, metóda add končí

                        this.characters.push(
                                this.newTask //premennú newTask natlač do characters
                        )

                        this.newTask = '' //po pridaní novej úlohy zostane input prázdny

                        this.$refs.new.focus() //po pridaní novej úlohy sa kurzor automaticky nastaví na input
                },
                remove(newTask) {
                        this.characters = this.characters.filter(item => item !== newTask) //odfiltruj z characters všetky itemy ktoré nie sú newTask
        },
    }
}).mount('#app')











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
















