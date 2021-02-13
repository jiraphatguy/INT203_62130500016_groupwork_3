const app = {
    data() {
        return {
            tasks: [{image : './images/guy1.jpg',title: '우리는 서로를 찾아 ',done: false},
                    {image : './images/guy2.jpg',title: '우리 이야기', done: false},
                    {image : './images/guy3.jpg',title: '내가 너의 Boss', done: false}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    }
,
computed: {
    countdone(){
        return this.tasks.filter( t => t.done ).length
    }
}
}
Vue.createApp(app).mount('#app')