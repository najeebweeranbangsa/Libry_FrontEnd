<template>
    <div class="container mt-5 mb-3">
        <h1>Hi. there! 😇</h1>
<hr>
        
<!DOCTYPE html>
<html lang="en">

  <body>
 <header class="intro">
 <h1> Welcome to Library Dashbord</h1>
 <p> Search your Favorite books below and add book details to Order section</p>

<hr>
 
 </header>
  
 <main>

<section class="container cd-table-container">
  <h2 class="cd-title">Search Your Book :</h2>
  <br>
  <input type="text" class="form-control" data-table="order-table" placeholder="Books to search" />
    <br>
  <table class="cd-table order-table table" style="border: 1px;color: black;">
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Book Title</th>
        <th>Book Description</th>
        <th>Book Type</th>
        <th>Price</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Book 1</td>
        <td>none </td>
        <td>0123456789</td>
        <td>Finance</td>
        <td>12.69</td>
      </tr>
      <tr>
        <td>Book 2</td>
        <td>book 2 sample title </td>
        <td>book 2 desc</td>
        <td>book 2 type</td>
        <td>12.69</td>
      </tr>

        
    </tbody>
  </table>

</section>

 </main>
 

  
  
  </body>
</html>
        

    </div>
</template>

<script setup>

        (function() {
	'use strict';

var TableFilter = (function() {
 var Arr = Array.prototype;
		var input;
  
		function onInputEvent(e) {
			input = e.target;
			var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
			Arr.forEach.call(table1, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, filter);
				});
			});
		}

		function filter(row) {
			var text = row.textContent.toLowerCase();
       //console.log(text);
      var val = input.value.toLowerCase();
      //console.log(val);
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = onInputEvent;
				});
			}
		};
 
	})();


 TableFilter.init(); 
})();


  
</script>

<style lang="scss" scoped>

</style>