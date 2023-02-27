
        <template>
            
                
<div class="container mx-auto mt-4">
    <h1>Your Book Cart 🛒</h1>
    <br>
  <div class="row" v-for="item-in-items">
    <div class="col-md-4">
      <div class="card" style="width: 18rem;">
  <img src="../images/ZTkt4I5.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Book 1</h5>
        <h6 class="card-subtitle mb-2 text-muted"> Book Type: Finance</h6>
        <h6 class="card-subtitle mb-2 text-muted"> ISBN 9780446677455</h6>
        <h6 class="card-subtitle mb-2 text-muted"> $12.69</h6>
        <a href="#" class="btn "> Edit</a>
        <a href="#" class="btn "> Delete Book</a>
  </div>
  </div>
    </div>    
    <div class="col-md-4">
      <div class="card" style="width: 18rem;">
  <img src="../images/ZTkt4I5.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" >{{ item.book_id }}</h5>
        <h6 class="card-subtitle mb-2 text-muted"> {{ item.bookt_title }}</h6>
        <h6 class="card-subtitle mb-2 text-muted"> {{ item.bookt_desc }}</h6>
        <h6 class="card-subtitle mb-2 text-muted"> {{ item.bookt_type }}</h6>
        <h6 class="card-subtitle mb-2 text-muted"> {{ item.bookt_price }}</h6>
        <a href="#" class="btn "> Edit</a>
        <a href="#" class="btn " @click="deleteitem($event)" v-bind:id = "item.id"> Delete Book</a>
  </div>
  </div>
    </div>   
  
       <div class="col-md-4">

  </div>
    </div>    
</div>  


        </template>

            <script setup>
import { createDOMCompilerError } from '@vue/compiler-dom';

            export default{
              data()
              return{
                items:[]
              }

            },
            created(){
              this.$http.get("http://localhost:8000/api/getitem")
              .then(function(response)){
                this.items7=response.body.allitems;
              }
            },
            methods:{
                deleteItem(event){
                  this.$http.delete("http://localhost:8000/api/deleteItem/"+event.target.id)
                  .then(function(response)){
                   var position = this.items.findIndex(function (element)){
                    return element.id == event.target.id;
                   };
                   this.items.splice(position,1)
              }
                }
            }
            </script>

<style lang="scss" scoped>

</style>