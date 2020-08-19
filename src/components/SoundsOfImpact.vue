<template>
  <div id="background">
    <h2 class="messageOne">{{ msg }}</h2>
    <h1 class="messageThree" v-bind:style="{ color: activeColor}">{{ msg3 }}</h1> 
    <h3 class="messageTwo">{{ msg2 }}</h3> 
    <span></span>
    <button class="landscape" id="woodlands" v-if="isHidden3" v-on:click="; isWoodLand(); generateSoundscape(); isHidden3=false; isHidden2=true">Woodlands</button>  
    <button class="landscape" id="coast" v-if="isHidden3" v-on:click="; isCoast(); generateSoundscape(); isHidden3=false; isHidden2=true">Coast</button>  
    <button class="landscape" id="backyard" v-if="isHidden3" v-on:click="; isBackyard(); generateSoundscape(); isHidden3=false; isHidden2=true">Backyard</button>  
    <ul id="birds" >
      <li class="card" v-bind:style="{color: birdColor1}" v-show="card1"><!-- <img class="card" :alt="birdName1" :src="birdImage1"> -->{{birdName1}}</li>
      <li class="card" v-bind:style="{color: birdColor2}" v-show="card2"><!-- <img class="card" :alt="birdName2" :src="birdImage2"> -->{{birdName2}}</li>
      <li class="card" v-bind:style="{color: birdColor3}" v-show="card3"><!-- <img class="card" :alt="birdName3" :src="birdImage3"> -->{{birdName3}}</li>
      <li class="card" v-bind:style="{color: birdColor4}" v-show="card4"><!-- <img class="card" :alt="birdName4" :src="birdImage4"> -->{{birdName4}}</li>
      <li class="card" v-bind:style="{color: birdColor5}" v-show="card5"><!-- <img class="card" :alt="birdName4" :src="birdImage4"> -->{{birdName5}}</li>

    </ul>
    <Modal v-show="isModalVisible" @voice="this.reInitiateVoiceControl" @close="isModalVisible = false"/> 
    <button id="generateButton" v-if="!isHidden" v-on:click="aboutHidden=true; voiceHidden=true; isHidden=true; isHidden3=true; biome()">Generate Soundscape</button>
    <button id="nineteenSeventyButton" v-if="isHidden2" v-on:click="nineteenSeventy">Play 1970</button>
    <button id="twentyTwentyButton" v-if="isHidden2" v-on:click="twentyTwenty">Play Today</button>
    <p>
      <button id="resetButton" v-if="isHidden2" v-on:click="aboutHidden=false; isHidden=false; isHidden2=false; reset(); voiceHidden=false">Reset</button>
      <button id="aboutButton" v-if="!aboutHidden" v-on:click="isModalVisible=true">About</button>
      <button id="voiceButton" v-if="!voiceHidden" v-on:click="initiateVoiceControl()">Enable Voice Control</button>
    </p>
   <p><canvas></canvas></p> 
  </div>
</template>

<script>
import axios from 'axios'
import Pizzicato from 'pizzicato'
import Oscilloscope from 'oscilloscope'
import Modal from './Modal.vue'
export default {
  name: 'SoundsOfImpact',
  components: {
    Modal
  },
  data () {
    return {
      msg: '',
      msg2: '',  
      birdName1: '', 
      birdNumber1: '', 
      birdSound1: '',
      birdSound1Pan: '',
      birdAudio1: '', 
      birdName2: '', 
      birdNumber2: '',  
      birdSound2: '',
      birdSound2Pan: '',
      birdAudio2: '',
      birdName3: '', 
      birdNumber3: '',
      birdSound3: '',
      birdSound3Pan: '',
      birdAudio3: '',
      birdName4: '', 
      birdSound4: '',
      birdSound4Pan: '',
      birdAudio4: '',
      birdName5: '', 
      birdSound5: '',
      birdSound5Pan: '',
      birdAudio5: '',
      group: [],
      isHidden2: false, 
      aboutHidden: false, 
      card1: false, 
      card2: false, 
      card3: false, 
      card4: false, 
      card5: false, 
      twenty: false, 
      placeHolder: [], 
      placeHolder2: [], 
      birdColor1: 'salmon', 
      birdColor2: 'turquoise', 
      birdColor3: 'violet',
      birdColor4: 'orange',
      birdColor5: 'yellow',
      isModalVisible: false,
      stop: false, 
      doItAgain: false, 
      woodLand: false, 
      activeColor: "white", 
      integer: "", 
      coast: false, 
      backYard: false,
      filteredResults: [], 
      seventyStop: false, 
      twentyStop: false 
    }
  },
mounted: function () {
      this.msg = "BYRD BOT"
      this.msg2 = ""
      if ('webkitSpeechRecognition' in window) {
        this.voiceHidden = false; 
      } else {
        this.voiceHidden = true; 
	}
    },
  methods: {
  initiateVoiceControl: function () {
  console.log('voice control initiated')
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  let finalTranscript = '';
  let recognition = new window.SpeechRecognition();

  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.continuous = true;

  recognition.onresult = (event) => {
  let interimTranscript = '';
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
      let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
          if (interimTranscript == "generate soundscape") {
            this.generateSoundscape()
            this.isHidden2 = true
            this.aboutHidden = true
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "about") {
            this.isModalVisible = true
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "close") {
            this.isModalVisible = false
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "play 1970") {
            this.nineteenSeventy()
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "play today") {
            this.twentyTwenty()
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "reset") {
            this.reset()
            this.aboutHidden = false
            this.isHidden2 = false
            this.doItAgain = true
            this.reInitiateVoiceControl()
          }
          if (interimTranscript == "disable voice control") {
             recognition.abort();
             console.log('voice control disabled')
             this.doItAgain = false
          }
          else {
              this.sleep(3500).then(() => {
              this.reInitiateVoiceControl()
              }) 
          }
      }
    console.log("transcript: " + finalTranscript)
  }
recognition.start()
  },
     reInitiateVoiceControl: function (){
     console.log('reinitiate')
     if (this.doItAgain == true){
       this.initiateVoiceControl()
       }
  },
  biome: function (){
  this.msg = "Select a Biome"
  },
  isWoodLand: function (){
    this.woodLand = true
    this.msg3 = "Woodlands"
    this.activeColor = "green"
  },
	isCoast: function (){
      alert('Coming soon! Current variables are set to Woodlands.')
      this.msg3 = "Woodlands"
      this.activeColor = "green"
      //this.cast = true
  },
    isBackYard: function (){
      alert('Coming soon! Current variables are set to Woodlands.')
      this.msg3 = "Woodlands"
      this.activeColor = "green"
      //this.backYard = true
  },
     generateSoundscape: function () {
     var self = this; 
     Pizzicato.context.resume();
       axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdsAndSounds.json")
       .then(function (response) { 
      
      if (self.woodLand ==true) { 
        self.filteredResults = response.data.filter(function(item){
        return item.scape == "woodlands";         
        })
      }
      
      if (self.coast ==true) { 
        self.filteredResults = response.data.filter(function(item){
        return item.scape == "coast";         
        })
      }
      
      if (self.backYard ==true) { 
        self.filteredResults = response.data.filter(function(item){
        return item.scape == "backyard";         
        })
      }
       
     console.log("filtered results: " + self.filteredResults )
     
          self.msg = "Soundscape Variables Generated"
          self.msg2 = "Select a Time Period to Listen"
          
          
          var soundConstructor = "sound" + Math.floor(Math.random()*4+1) + "_url"
          self.integer = Math.random()
          console.log(self.integer)
       
       
          self.birdName1 = self.filteredResults[0].species
          self.birdNumber1 = self.filteredResults[0][soundConstructor]
          self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
          self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound1.volume = Math.random(); 
          self.birdSound1.addEffect(self.birdSound1Pan)
          self.birdAudio1 = self.birdSound1
          });
          
          self.birdName2 =  self.filteredResults[1].species
          self.birdNumber2 = self.filteredResults[1][soundConstructor]
          self.birdSound2 = new Pizzicato.Sound(self.birdNumber2, function() {
          self.birdSound2Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound2.volume = Math.random(); 
          self.birdSound2.addEffect(self.birdSound2Pan)
          self.birdAudio2 = self.birdSound2
          });
          
          self.birdName3 =  self.filteredResults[2].species
          self.birdNumber3 = self.filteredResults[2][soundConstructor]
          self.birdSound3 = new Pizzicato.Sound(self.birdNumber3, function() {
          self.birdSound3Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound3.volume = Math.random(); 
          self.birdSound3.addEffect(self.birdSound3Pan)
          self.birdAudio3 = self.birdSound3
          });
          
          self.birdName4 =  self.filteredResults[3].species
          self.birdNumber4 = self.filteredResults[3][soundConstructor]
          self.birdSound4 = new Pizzicato.Sound(self.birdNumber4, function() {
          self.birdSound4Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound4.volume = Math.random(); 
          self.birdSound4.addEffect(self.birdSound4Pan)
          self.birdAudio4 = self.birdSound4
          });
          
          self.birdName5 =  self.filteredResults[4].species
          self.birdNumber5 = self.filteredResults[4][soundConstructor]
          self.birdSound5 = new Pizzicato.Sound(self.birdNumber5, function() {
          self.birdSound5Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound5.volume = Math.random(); 
          self.birdSound5.addEffect(self.birdSound5Pan)
          self.birdAudio5 = self.birdSound5
          });
          
          self.group = new Pizzicato.Group([]);
       })
       .catch(function (error) {
       console.log(error);
       })
    }, 
    sleep: function (milliseconds){
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    },
        loopOne: function () {
      this.nineteenSeventy()
    }, 
        loopTwo: function () {
      this.twentyTwenty()
    },
    nineteenSeventy: function (){
        if (this.seventyStop == true) {
          this.group.stop()
          this.group.removeSound(this.birdAudio1)
          this.group.removeSound(this.birdAudio2)
          this.group.removeSound(this.birdAudio3)
          this.group.removeSound(this.birdAudio4)
          this.group.removeSound(this.birdAudio5)
          this.seventyStop = false
          this.sleep(700).then(() => {
            this.loopOne()
          })
          
        }
        else {
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        this.group.addSound(this.birdSound1)
        this.group.addSound(this.birdSound2)
        this.group.addSound(this.birdSound3)
        this.group.addSound(this.birdSound4)
        this.group.addSound(this.birdSound5)
        
        this.msg = "1970"
        this.msg2 = ""
        this.card1 = true; 
        this.card2 = true; 
        this.card3 = true; 
        this.card4 = true;
        this.card5 = true;
        this.stop = true; 
        this.sleep(700).then(() => {
          this.visualizeNineteenSeventy()
        })
        }
    },
    twentyTwenty: function (){
        if (this.twentyStop == true) {
          this.group.stop()
          this.group.removeSound(this.birdSound1)
          this.group.removeSound(this.birdSound2)
          this.group.removeSound(this.birdSound3)
          this.group.removeSound(this.birdSound4)
          this.group.removeSound(this.birdSound5)
          this.twentyStop = false
          this.sleep(700).then(() => {
            this.loopTwo()
          })
        }
        else {
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        this.group.addSound(this.birdAudio1)
        this.group.addSound(this.birdAudio2)
        this.group.addSound(this.birdAudio3)
        this.group.addSound(this.birdAudio4)
        this.group.addSound(this.birdAudio5)
        
        this.msg = "Today"
        this.msg2 = ""
        this.card1 = true; 
        this.card2 = true; 
        this.card3 = true; 
        this.card4 = true;
        this.card5 = true;
        this.stop = true; 
        this.sleep(700).then(() => {
          this.visualizeTwentyTwenty()
        })
        }
    },
    end: function (){
      this.group.stop();
    },
    reset: function () {
        this.msg = "BYRD BOT"
        this.msg2 = ""
        this.msg3 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        if (this.stop == false){
          this.placeHolder = new Pizzicato.Sound("https://wompwompwomp.com/audio/f06f6a8e.sad-trombone-56.mp3")
          this.placeHolder2 = new Pizzicato.Sound("https://wompwompwomp.com/audio/f06f6a8e.sad-trombone-56.mp3")
          this.end()
        }
        if (this.stop == true){
          this.end()
        }
     },   
     visualizeNineteenSeventy: function (){
       var audioContext = Pizzicato.context;
       this.group.play()
       this.twentyStop = true

       
       var canvas = document.getElementsByTagName("canvas")[0]
       canvas.width = window.innerWidth
       canvas.height = window.innerHeight
       
       var analyser = Pizzicato.context.createAnalyser();
       this.group.connect(analyser);
       
       var scope = new Oscilloscope(analyser)

       analyser.connect(audioContext.destination)

       var ctx = canvas.getContext('2d')
       ctx.lineWidth = 3
       ctx.shadowBlur = 4
       ctx.shadowColor = 'white'

       function drawLoop () {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          var centerY = canvas.height / 3
          ctx.strokeStyle = 'limegreen'
          scope.draw(ctx, 0, centerY, undefined, centerY)

          window.requestAnimationFrame(drawLoop)
       }
      drawLoop()
    },
    visualizeTwentyTwenty: function () {
       var audioContext = Pizzicato.context;
       this.group.play()
       this.seventyStop = true
       
       var canvas = document.getElementsByTagName("canvas")[0]
       canvas.width = window.innerWidth
       canvas.height = window.innerHeight
       
       var analyser = Pizzicato.context.createAnalyser();
       this.group.connect(analyser);
       
       var scope = new Oscilloscope(analyser)

       analyser.connect(audioContext.destination)

       var ctx = canvas.getContext('2d')
       ctx.lineWidth = 3
       ctx.shadowBlur = 4
       ctx.shadowColor = 'white'

       function drawLoop () {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          var centerY = canvas.height / 3
          ctx.strokeStyle = 'salmon'
          scope.draw(ctx, 0, centerY, undefined, centerY)

          window.requestAnimationFrame(drawLoop)
       }
      drawLoop()
    }
  },
  closeModal: function () {
     this.isModalVisible = false; 
  }, 
}
</script>


<!-- Add "scoped" attribute to limit CSS to self component only -->
<style scoped>
.card {
border-style: solid; 
border-width: 1px;
padding: 5px; 
}
.landscape {
height: 200px; 
width: 150px; 
}
#woodlands {
  background-color: green;
}
#coast {
  background-color: lightblue;
}
#backyard {
  background-color: limegreen;
}
button {
  background-color: limegreen; /* Green */
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
#generateButton {
background-color: mediumturquoise;
}
#voiceButton {
background-color: orange; 
font-size: small; 
font-size: 12; 
padding: 7px 16px;
}
#aboutButton {
background-color: purple;
font-size: small; 
font-size: 12; 
padding: 7px 16px;
}
#resetButton {
background-color: black;  
font-size: 16px;
padding: 8px 8px;
}
#resetButton:hover {
  background-color: violet;
}
#nineteenSeventyButton{
background-color: mediumturquoise;  
}
#twentyTwentyButton {
background-color: salmon; 
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding-bottom: 25px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
