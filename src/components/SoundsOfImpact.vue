<template>
  <div id="background">
    <h3 id="messageTwo">{{ msg2 }}</h3> 

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
    <h2 id="time" class="messageOne">{{ msg }}</h2>
    <h1 class="messageThree" v-bind:style="{ color: activeColor}">{{ msg3 }}</h1> 
    <h3>{{ msg4 }}</h3> 
    <Modal v-show="isModalVisible" @voice="this.reInitiateVoiceControl" @close="isModalVisible = false"/> 
    <button id="generateButton" v-if="!isHidden" v-on:click="aboutHidden=true; voiceHidden=true; isHidden=true; isHidden3=true; biome()">Generate Soundscape</button>
    <button id="nineteenSeventyButton" v-if="isHidden2" v-on:click="nineteenSeventy">Play 1970</button>
    <button id="twentyTwentyButton" v-if="isHidden2" v-on:click="twentyTwenty">Play Today</button>
    <p>
      <button id="resetButton" v-if="isHidden2" v-on:click="aboutHidden=false; isHidden=false; isHidden2=false; reset(); voiceHidden=false">Reset</button>
      <button id="aboutButton" v-if="!aboutHidden" v-on:click="isModalVisible=true">About</button>
      <button id="voiceButton" v-if="!voiceHidden" v-on:click="initiateVoiceControl()">Enable Voice Control</button>
    </p>
    <canvas></canvas>
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
      msg3: '', 
      msg4: '',   
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
      birdAudio1Pan: '',
      birdAudio2Pan: '',
      birdAudio3Pan: '',
      birdAudio4Pan: '',
      birdAudio5Pan: '', 
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
      twentyStop: false, 
      resultsType: '', 
      flipCard1: false, 
      flipCard2: false, 
      flipCard3: false, 
      flipCard4: false, 
      flipCard5: false, 
      flipCardA: false, 
      flipCardB: false, 
      flipCardC: false, 
      flipCardD: false, 
      flipCardE: false, 
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
  this.msg2 = "Select a Biome"
  this.msg = ""
  },
  isWoodLand: function (){
    this.woodLand = true
    this.msg3 = "Woodlands"
    this.activeColor = "green"
    this.resultsType = "Woodlands"
  },
	isCoast: function (){
         alert('Coming soon! For now, current variables are set to Woodlands.')
//       this.coast = true
//       this.msg3 = "Coast"
//       this.activeColor = "lightblue"
//       this.resultsType = "Coast"
  },
    isBackYard: function (){
      alert('Coming soon! For now, current variables are set to Woodlands.')
      //this.msg3 = "Back Yard"
      //this.activeColor = "limegreen"
      //this.backYard = true
      //this.resultsType = "Back Yard"
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
      
     var numberOfFilteredObjects = Object.keys(self.filteredResults).length
     console.log("Total number of " + self.resultsType + " birds is: " + numberOfFilteredObjects)
     
		var randomEntries = [];

		function getRandomEntry() {
		return self.filteredResults[Math.round(Math.random() * (self.filteredResults.length - 1))];
		}

		function entryExists(soundScapeVariables) {
		return randomEntries.indexOf(soundScapeVariables) > -1;
		}

		for (var i=0; i<5; i++) {
		var soundScapeVariables
		do {

		soundScapeVariables = getRandomEntry();

		} while(entryExists(soundScapeVariables))

		randomEntries.push(soundScapeVariables);

		}
		console.log("Random entries retrieved:" + randomEntries)

          self.msg2 = "Soundscape Variables Generated"
          self.msg4 = "Select a Time Period to Listen"
          
          var probability = Math.random() * 10
            console.log("Probability number is: " + probability)
            console.log(randomEntries[0].frequency_1970 * 100)
          
          
          var soundConstructor = "sound" + Math.floor(Math.random()*4+1) + "_url"

//BIRD 1          
          self.birdName1 = randomEntries[0].species
          self.birdNumber1 = randomEntries[0][soundConstructor]
          var birdProbability1 = randomEntries[0].frequency_1970 * 100
          var birdProbabilityA = randomEntries[0].frequency_2017 * 100
          var panValue1 = Math.random()*2 - 1
            if (probability <= birdProbability1) {
              self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.birdSound1.volume = randomEntries[0].frequency_1970 
              self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSound1.addEffect(self.birdSound1Pan)
              });
              self.flipCard1 = true
            }
            if (probability >= birdProbability1) {
              self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSound1.volume = 0
              self.birdSound1.addEffect(self.birdSound1Pan)
              });
              self.flipCard1 = false
            }
            if (probability <= birdProbabilityA) {
              self.birdAudio1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.birdAudio1.volume = randomEntries[0].frequency_2017
              self.birdAudio1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio.addEffect(self.birdAudio1Pan)
              });
              self.flipCardA = true
            }
            if (probability >= birdProbabilityA) {
              self.birdAudio1 = new Pizzicato.Sound(self.birdNumber1,  function() {
              self.birdAudio1.volume = 0
              self.birdAudio1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio1.addEffect(self.birdAudio1Pan)
              });
              self.flipCardA = false
            }
            
//BIRD 2            
          self.birdName2 = randomEntries[1].species
          self.birdNumber2 = randomEntries[1][soundConstructor]
          var birdProbability2 = randomEntries[1].frequency_1970 * 100
          var birdProbabilityB = randomEntries[1].frequency_2017 * 100
          var panValue2 = Math.random()*2 - 1
            if (probability <= birdProbability2) {
              self.birdSound2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.birdSound2.volume = randomEntries[1].frequency_1970 
              self.birdSound2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue2});
              self.birdSound2.addEffect(self.birdSound2Pan)
              });
              self.flipCard2 = true
            }
            if (probability >= birdProbability2) {
              self.birdSound2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.birdSound2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue2});
              self.birdSound2.volume = 0
              self.birdSound2.addEffect(self.birdSound2Pan)
              });
              self.flipCard2 = false
            }
            if (probability <= birdProbabilityB) {
              self.birdAudio2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.birdAudio2.volume = randomEntries[1].frequency_2017
              self.birdAudio2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio2.addEffect(self.birdAudio2Pan)
              });
              self.flipCardB = true
            }
            if (probability >= birdProbabilityB) {
              self.birdAudio2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.birdAudio2.volume = 0
              self.birdAudio2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio2.addEffect(self.birdAudio2Pan)
              });
              self.flipCardB = false
            }
            
//BIRD 3  
          self.birdName3 = randomEntries[2].species
          self.birdNumber3 = randomEntries[2][soundConstructor]
          var birdProbability3 = randomEntries[2].frequency_1970 * 100
          var birdProbabilityC = randomEntries[2].frequency_2017 * 100
          var panValue3 = Math.random()*2 - 1
            if (probability <= birdProbability3) {
              self.birdSound3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.birdSound3.volume = randomEntries[2].frequency_1970 
              self.birdSound3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue3});
              self.birdSound3.addEffect(self.birdSound3Pan)
              });
              self.flipCard3 = true
            }
            if (probability >= birdProbability3) {
              self.birdSound3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.birdSound3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue3});
              self.birdSound3.volume = 0
              self.birdSound3.addEffect(self.birdSound3Pan)
              });
              self.flipCard3 = false
            }
            if (probability <= birdProbabilityC) {
              self.birdAudio3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.birdAudio3.volume = randomEntries[2].frequency_2017
              self.birdAudio3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio3.addEffect(self.birdAudio3Pan)
              });
              self.flipCardC = true
            }
            if (probability >= birdProbabilityC) {
              self.birdAudio3 = new Pizzicato.Sound(self.birdNumber3,  function() {
              self.birdAudio3.volume = 0
              self.birdAudio3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio3.addEffect(self.birdAudio3Pan)
              });
              self.flipCardC = false
            }

//BIRD 4
          self.birdName4 = randomEntries[3].species
          self.birdNumber4 = randomEntries[3][soundConstructor]
          var birdProbability4 = randomEntries[3].frequency_1970 * 100
          var birdProbabilityD = randomEntries[3].frequency_2017 * 100
          var panValue4 = Math.random()*2 - 1
            if (probability <= birdProbability4) {
              self.birdSound4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.birdSound4.volume = randomEntries[3].frequency_1970 
              self.birdSound4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue4});
              self.birdSound4.addEffect(self.birdSound4Pan)
              });
              self.flipCard4 = true
            }
            if (probability >= birdProbability4) {
              self.birdSound4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.birdSound4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue4});
              self.birdSound4.volume = 0
              self.birdSound4.addEffect(self.birdSound4Pan)
              });
              self.flipCard4 = false
            }
            if (probability <= birdProbabilityD) {
              self.birdAudio4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.birdAudio4.volume = randomEntries[3].frequency_2017
              self.birdAudio4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio4.addEffect(self.birdAudio4Pan)
              });
              self.flipCardD = true
            }
            if (probability >= birdProbabilityD) {
              self.birdAudio4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.birdAudio4.volume = 0
              self.birdAudio4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio4.addEffect(self.birdAudio4Pan)
              });
              self.flipCardD = false
            }

//BIRD 5
          self.birdName5 = randomEntries[4].species
          self.birdNumber5 = randomEntries[4][soundConstructor]
          var birdProbability5 = randomEntries[4].frequency_1970 * 100
          var birdProbabilityE = randomEntries[4].frequency_2017 * 100
          var panValue5 = Math.random()*2 - 1
            if (probability <= birdProbability5) {
              self.birdSound5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.birdSound5.volume = randomEntries[4].frequency_1970 
              self.birdSound5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue5});
              self.birdSound5.addEffect(self.birdSound5Pan)
              });
              self.flipCard5 = true
            }
            if (probability >= birdProbability5) {
              self.birdSound5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.birdSound5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue5});
              self.birdSound5.volume = 0
              self.birdSound5.addEffect(self.birdSound5Pan)
              });
              self.flipCard5 = false
            }
            if (probability <= birdProbabilityE) {
              self.birdAudio5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.birdAudio5.volume = randomEntries[4].frequency_2017
              self.birdAudio5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio5.addEffect(self.birdAudio5Pan)
              });
              self.flipCardE = true
            }
            if (probability >= birdProbabilityE) {
              self.birdAudio5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.birdAudio5.volume = 0
              self.birdAudio5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio5.addEffect(self.birdAudio5Pan)
              });
              self.flipCardE = false
            }
          
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
        this.msg4 = ""
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
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.stop = false; 
        
        if (this.flipCard1 == true) {
          this.card1 = true; 
        }
        
        if (this.flipCard2 == true) {
          this.card2 = true; 
        }
        if (this.flipCard3 == true) {
          this.card3 = true; 
        }
        if (this.flipCard4 == true) {
          this.card4 = true; 
        }
        if (this.flipCard5 == true) {
          this.card5 = true; 
        }
        
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
        this.msg4 = ""
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
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.stop = false; 
        
        if (this.flipCardA == true) {
          this.card1 = true; 
        }
        
        if (this.flipCardB == true) {
          this.card2 = true; 
        }
        if (this.flipCardC == true) {
          this.card3 = true; 
        }
        if (this.flipCardD == true) {
          this.card4 = true; 
        }
        if (this.flipCardE == true) {
          this.card5 = true; 
        }
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
        this.msg4 = ""
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
canvas { 
}
#messageTwo {
font-size: 50px;
}
.card {
border-style: solid; 
border-width: 1px;
padding: 5px; 
}
.landscape {
height: 200px; 
width: 150px; 
}
#time {
font-size: 100px;
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
