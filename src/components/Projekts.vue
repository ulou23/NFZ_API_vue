<template>
    <div class="projekts">
        
            <b-card v-for="(page, index) in pages" :key="index" class="page">
                <b-card-title primary-title>
                <div> <h3 class="headline mb-0">{{ page.title }} tit + {{ index }} </h3></div>
                <div> {{ page.content }} cont</div>
                </b-card-title>
            </b-card>
          
                 <b-button size="lg" variant="info" class="mb-1"  @click="newNote()">Add Note
       <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
    </b-button>
                   
            
        

    </div>
</template>
<script>
export default {
    name: 'Projekts',
    props: [ 'pages'],
    methods: {
        newNote(){
            this.$emit('new-note')
        }
    }
}
</script>

<style scoped>
a {
    color: #4422bb;
}
</style>