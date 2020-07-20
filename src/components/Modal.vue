<script>
  export default {
    name: 'Modal',
    methods: {
    close: function(){
    this.$emit("close")
    }
    }
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            About 

            
 
        </header>
        <div
          class="modal-body"
          id="modalDescription"
        >
            Byrd Bot expresses differences in bird populations between 1970 and 2020 as unique soundscapes, composed computationally using known bird population data and the Audubon Society's database of bird songs. <p>The application is born out of the Sounds of Human Impact project, a collaborative effort between communication studies and environmental science scholars interested to explore the role of sound as a means to expressing the impacts of the Anthroprocene. </p><p>When the user clicks <button id="generate">Generate Soundscape</button> the software will generate a new soundscape, based on probabilities in which birds might be heard in <button id="nineteenSeventy">1970</button>. Then, the system generates a soundscape of those very same bird sounds, using probabilities for <button id="twentyTwenty">2020</button>. </p><p> The listener is invited to listen deeply for the differences in ecology between these two time periods.  </p>

        </div>
        <footer class="modal-footer">
         
<button @click="close">Close </button>
       
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
button {
  background-color: purple; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;  
  font-size: large;  
}
#generate {
background-color: mediumturquoise;
}

#nineteenSeventy {
background-color: limegreen;  
}
#twentyTwenty {
background-color: salmon; 
}
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: black; 
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    font-size: large;
    font-size: 45px;
  }
  #modalTitle {
  text-align: center; 
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    text-align: left; 
    position: relative;
    padding: 20px 10px;
  }


</style>