<template>
    <div class="container mt-5 mb-3">
        <h1> 📚 Oder Your Book </h1>
        <br>
        <p> Please Enter your Book Details below you copied from Library Dashbord</p>
        <hr>
            <form @submit.prevent="submitForm" >

            <div class="form-group">
            <label for="exampleInputEmail1">Book ID</label>
            <input type="text" class="form-control"  placeholder="Enter Book ISBN" v-model="item.book_id">
            <small id="emailHelp" class="form-text text-muted">Enter Book ISBN as on the Home tab</small>
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">Book Title</label>
            <input type="text" class="form-control"  placeholder="Enter Book Title " v-model="item.bookt_title">
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">Book Description</label>
            <input type="text-area" class="form-control"  placeholder="Enter Book Description " v-model="item.bookt_desc">
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">Book Type</label>
            <input type="text" class="form-control"  placeholder="Enter Book Type " v-model="item.bookt_type">
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Book Price</label>
            <input type="text" class="form-control"  placeholder="Enter Book Type " v-model="item.bookt_price">
            </div>
            <br>
            <button type="submit" class="btn btn-primary">Add to cart</button>
            </form>
            </div>
</template>

<script setup>
        export default{
            data(){
                return{
                    item:{
                        book_id:'',
                        bookt_title:'',
                        bookt_desc:'',
                        bookt_type:'',
                        bookt_price:'',
                    }
                    
                }

            }
                
        },

        methods:{
            submitForm(){
                this.$http.post("http://localhost:8000/api/additem",this.item)
                .then(function(response)){
                    
                }
            }
        }

</script>

<style lang="scss" scoped>




</style>