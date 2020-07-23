<template>
  <div id="background">
    <h1 class="messageOne">{{ msg }}</h1>
    <h3 class="messageTwo">{{ msg2 }}</h3> 
    <span></span>
    <ul id="birds" >
      <li class="card" v-bind:style="{color: birdColor1}" v-show="card1"><!-- <img class="card" :alt="birdName1" :src="birdImage1"> -->{{birdName1}}</li>
      <li class="card" v-bind:style="{color: birdColor2}" v-show="card2"><!-- <img class="card" :alt="birdName2" :src="birdImage2"> -->{{birdName2}}</li>
      <li class="card" v-bind:style="{color: birdColor3}" v-show="card3"><!-- <img class="card" :alt="birdName3" :src="birdImage3"> -->{{birdName3}}</li>
      <li class="card" v-bind:style="{color: birdColor4}" v-show="card4"><!-- <img class="card" :alt="birdName4" :src="birdImage4"> -->{{birdName4}}</li>
    </ul>
    <Modal v-show="isModalVisible" @voice="this.reInitiateVoiceControl" @close="isModalVisible = false"/> 
    <button id="generateButton" v-if="!isHidden" v-on:click="aboutHidden=true; isHidden=true; generateSoundscape()">Generate Soundscape</button>
    <button id="nineteenSeventyButton" v-if="isHidden" v-on:click="nineteenSeventy">Play 1970</button>
    <button id="twentyTwentyButton" v-if="isHidden" v-on:click="twentyTwenty">Play Today</button>
    <p>
      <button id="resetButton" v-if="isHidden" v-on:click="aboutHidden=false; isHidden=false;reset()">Reset</button>
      <button id="aboutButton" v-if="!aboutHidden" v-on:click="isModalVisible=true">About</button>
      <button id="voiceButton" v-if="!aboutHidden" v-on:click="initiateVoiceControl()">Enable Voice Control</button>
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
      birdImage1: '',
      birdNumber1: '', 
      birdSound1: '',
      birdSound1Pan: '',
      birdName2: '', 
      birdImage2: '',
      birdNumber2: '',  
      birdSound2: '',
      birdSound2Pan: '',
      birdName3: '', 
      birdImage3: '', 
      birdNumber3: '',
      birdSound3: '',
      birdSound3Pan: '',
      birdName4: '', 
      birdImage4: '', 
      birdNumber4: '',
      birdSound4: '',
      birdSound4Pan: '',
      group1: [],
      group2: [],
      isHidden: false, 
      aboutHidden: false, 
      card1: false, 
      card2: false, 
      card3: false, 
      card4: false, 
      twenty: false, 
      placeHolder: [], 
      birdColor1: 'salmon', 
      birdColor2: 'turquoise', 
      birdColor3: 'violet',
      birdColor4: 'orange',
      isModalVisible: false,
      stop: false, 
      doItAgain: false
    }
  },
mounted: function () {
      this.msg = "BYRD BOT"
      this.msg2 = ""
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
            this.isHidden = true
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
            this.isHidden = false
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
     generateSoundscape: function () {
     var self = this; 
     Pizzicato.context.resume();
       axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdData.json")
       .then(function (response) { 
       
          self.msg = "Soundscape Variables Generated"
          self.msg2 = "Select a Time Period to Listen"
       
          self.birdName1 = response.data.raptors[1][0]
          self.birdImage1 = response.data.raptors[1][2]
          self.birdNumber1 = response.data.raptors[1][Math.floor(Math.random()*4+3)]
          self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
          self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound1.volume = Math.random(); 
          self.birdSound1.addEffect(self.birdSound1Pan);
          self.birdAudio1 = self.birdSound1.clone();
          });
          
          self.birdName2 =  response.data.raptors[3][0]
          self.birdImage2 = response.data.raptors[3][2]
          self.birdNumber2 = response.data.raptors[1][Math.floor(Math.random()*4+3)]
          self.birdSound2 = new Pizzicato.Sound(self.birdNumber2, function() {
          self.birdSound2Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound2.volume = Math.random(); 
          self.birdSound2.addEffect(self.birdSound2Pan);
          self.birdAudio2 = self.birdSound2.clone();
          });
          
          self.birdName3 =  response.data.finches[1][0]
          self.birdImage3 = response.data.finches[1][2]
          self.birdNumber3 = response.data.finches[1][Math.floor(Math.random()*4+3)]
          self.birdSound3 = new Pizzicato.Sound(self.birdNumber3, function() {
          self.birdSound3Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound3.volume = Math.random(); 
          self.birdSound3.addEffect(self.birdSound3Pan);
          self.birdAudio3 = self.birdSound3.clone();
          });
          
          self.birdName4 =  response.data.finches[3][0]
          self.birdImage4 = response.data.finches[3][2]
          self.birdNumber4 = response.data.finches[3][Math.floor(Math.random()*4+3)]
          self.birdSound4 = new Pizzicato.Sound(self.birdNumber4, function() {
          self.birdSound4Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound4.volume = Math.random(); 
          self.birdSound4.addEffect(self.birdSound4Pan);
          self.birdAudio4 = self.birdSound4.clone();
          });
          
          self.group1 = new Pizzicato.Group([self.birdSound1, self.birdSound2, self.birdSound3, self.birdSound4]);

       })
       .catch(function (error) {
       console.log(error);
       })
    }, 
    sleep: function (milliseconds){
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    },
    nineteenSeventy: function (){
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        this.group1.stop();
        this.msg = "1970"
        this.msg2 = ""
        this.group1.removeSound(this.birdSound1)
        this.group1.removeSound(this.birdSound2)
        this.placeHolder = this.group1
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = true; 
        this.card4 = true;
        this.stop = true; 
        this.sleep(500).then(() => {
          this.visualizeNineteenSeventy()
        })
    },
    twentyTwenty: function (){
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        this.group1.stop();
        this.msg = "2020"
        this.msg2 = ""
        this.group1.addSound(this.birdSound1)
        this.group1.addSound(this.birdSound2)
        this.placeHolder = this.group1
        this.card1 = true; 
        this.card2 = true; 
        this.card3 = true; 
        this.card4 = true;
        this.stop = true; 
        this.sleep(500).then(() => {
          this.visualizeTwentyTwenty()
        })
    },
    end: function (){
      this.placeHolder.stop();
    },
    reset: function () {
        this.msg = "BYRD BOT"
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        if (this.stop == false){
          this.placeHolder = new Pizzicato.Sound("https://wompwompwomp.com/audio/f06f6a8e.sad-trombone-56.mp3")
          this.end()
        }
        if (this.stop == true){
          this.end()
        }
     },   
     visualizeNineteenSeventy: function (){
       this.placeHolder.play()
       var audioContext = Pizzicato.context;
       
       var canvas = document.getElementsByTagName("canvas")[0]
       canvas.width = window.innerWidth
       canvas.height = window.innerHeight
       
       var analyser = Pizzicato.context.createAnalyser();
       this.placeHolder.connect(analyser);
       
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
       this.placeHolder.play()
       var canvas = document.getElementsByTagName("canvas")[0]
       canvas.width = window.innerWidth
       canvas.height = window.innerHeight
       
       var analyser = Pizzicato.context.createAnalyser();
       this.placeHolder.connect(analyser);
       
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
background-color: limegreen;  
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
