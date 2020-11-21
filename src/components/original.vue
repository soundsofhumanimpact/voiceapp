<template>
  <div id="background">
  <h2 id="time" class="messageOne">{{ msg }}</h2>
    <h3 id="messageTwo">{{ msg2 }}</h3> 
    <span></span>
    <button class="landscape" id="woodlands" v-if="isHidden3" v-on:click="isWoodLand(); generateSoundscape(); isHidden3=false; isHidden2=true">Woodlands</button>  
    <button class="landscape" id="coast" v-if="isHidden3" v-on:click="isCoast(); generateSoundscape(); isHidden3=false; isHidden2=true">Coast</button>  
    <button class="landscape" id="backyard" v-if="isHidden3" v-on:click="isBackYard(); generateSoundscape(); isHidden3=false; isHidden2=true">Backyard</button>  
    <ul id="birds" >
      <li class="card" v-bind:style="{color: birdColor1, fontSize: birdSoundVolume1*75 +'px'}" v-show="card1"><!-- <img class="card" :alt="birdName1" :src="birdImage1"> -->{{birdName1}}</li>
      <li class="card" v-bind:style="{color: birdColor2, fontSize: birdSoundVolume2*75 +'px'}" v-show="card2"><!-- <img class="card" :alt="birdName2" :src="birdImage2"> -->{{birdName2}}</li>
      <li class="card" v-bind:style="{color: birdColor3, fontSize: birdSoundVolume3*75 +'px'}" v-show="card3"><!-- <img class="card" :alt="birdName3" :src="birdImage3"> -->{{birdName3}}</li>
      <li class="card" v-bind:style="{color: birdColor4, fontSize: birdSoundVolume4*75 +'px'}" v-show="card4"><!-- <img class="card" :alt="birdName4" :src="birdImage4"> -->{{birdName4}}</li>
      <li class="card" v-bind:style="{color: birdColor5, fontSize: birdSoundVolume5*75 +'px'}" v-show="card5"><!-- <img class="card" :alt="birdName5" :src="birdImage5"> -->{{birdName5}}</li>
      <li class="card" v-bind:style="{color: birdColor6, fontSize: birdSoundVolume6*75 +'px'}" v-show="card6"><!-- <img class="card" :alt="birdName6" :src="birdImage6"> -->{{birdName6}}</li>
      <li class="card" v-bind:style="{color: birdColor7}" v-show="card7"><!-- <img class="card" :alt="birdName7" :src="birdImage7"> -->{{birdName7}}</li>
      <li class="card" v-bind:style="{color: birdColor8}" v-show="card8"><!-- <img class="card" :alt="birdName8" :src="birdImage8"> -->{{birdName8}}</li>
      <li class="card" v-bind:style="{color: birdColor9}" v-show="card9"><!-- <img class="card" :alt="birdName9" :src="birdImage9"> -->{{birdName9}}</li>
      <li class="card" v-bind:style="{color: birdColor10}" v-show="card10"><!-- <img class="card" :alt="birdName10" :src="birdImage10"> -->{{birdName10}}</li>
      <li class="card" v-bind:style="{color: birdColor11}" v-show="card11"><!-- <img class="card" :alt="birdName11" :src="birdImage11"> -->{{birdName11}}</li>
      <li class="card" v-bind:style="{color: birdColor12}" v-show="card12"><!-- <img class="card" :alt="birdName12" :src="birdImage12"> -->{{birdName12}}</li>
      <li class="card" v-bind:style="{color: birdColor13}" v-show="card13"><!-- <img class="card" :alt="birdName13" :src="birdImage13"> -->{{birdName13}}</li>
      <li class="card" v-bind:style="{color: birdColor14}" v-show="card14"><!-- <img class="card" :alt="birdName14" :src="birdImage14"> -->{{birdName14}}</li>
      <li class="card" v-bind:style="{color: birdColor15}" v-show="card15"><!-- <img class="card" :alt="birdName15" :src="birdImage15"> -->{{birdName15}}</li>
      <li class="card" v-bind:style="{color: birdColor16}" v-show="card16"><!-- <img class="card" :alt="birdName16" :src="birdImage15"> -->{{birdName16}}</li>
    </ul>
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
    <p id="canvas"><canvas></canvas></p>
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
      birdName2: '', 
      birdName3: '',
      birdName4: '',
      birdName5: '',
      birdName6: '',
      birdName7: '',
      birdName8: '',
      birdName9: '',
      birdName10: '',
      birdName11: '',
      birdName12: '',
      birdName13: '',
      birdName14: '',
      birdName15: '',
      birdName16: '',
      
      birdNumber1: '', 
      birdNumber2: '',
      birdNumber3: '',
      birdNumber4: '',
      birdNumber5: '',
      birdNumber6: '', 
      birdNumber7: '', 
      birdNumber8: '', 
      birdNumber9: '', 
      birdNumber10: '', 
      birdNumber11: '', 
      birdNumber12: '', 
      birdNumber13: '', 
      birdNumber14: '', 
      birdNumber15: '', 
      birdNumber16: '',  
      
      birdSound1: '',
      birdSound2: '',
      birdSound3: '',
      birdSound4: '',
      birdSound5: '',
      birdSound6: '',
      birdSound7: '',
      birdSound8: '',
      birdSound9: '',
      birdSound10: '',
      birdSound11: '',
      birdSound12: '',
      birdSound13: '',
      birdSound14: '',
      birdSound15: '',
      birdSound16: '',
      
      birdSound1Pan: '',
      birdSound2Pan: '',
      birdSound3Pan: '',
      birdSound4Pan: '',
      birdSound5Pan: '',
      birdSound6Pan: '',
      birdSound7Pan: '',
      birdSound8Pan: '',
      birdSound9Pan: '',
      birdSound10Pan: '',
      birdSound11Pan: '',
      birdSound12Pan: '',
      birdSound13Pan: '',
      birdSound14Pan: '',
      birdSound15Pan: '',
      birdSound16Pan: '',
      
      birdAudio1: '', 
      birdAudio2: '',
      birdAudio3: '',
      birdAudio4: '',
      birdAudio5: '',
      birdAudio6: '',
      birdAudio7: '',
      birdAudio8: '',
      birdAudio9: '',
      birdAudio10: '',
      birdAudio11: '',
      birdAudio12: '',
      birdAudio13: '',
      birdAudio14: '',
      birdAudio15: '',
      birdAudio16: '',
      
      birdSoundVolume1: '',
      birdSoundVolume2: '',
      birdSoundVolume3: '',
      birdSoundVolume4: '',
      birdSoundVolume5: '',
      birdSoundVolume6: '',
      birdSoundVolume7: '',
      birdSoundVolume8: '',
      birdSoundVolume9: '',
      birdSoundVolume10: '',
      birdSoundVolume11: '',
      birdSoundVolume12: '',
      birdSoundVolume13: '',
      birdSoundVolume14: '',
      birdSoundVolume15: '',
      birdSoundVolume16: '',
      
      nineteenSeventyVolume1: '', 
      nineteenSeventyVolume2: '', 
      nineteenSeventyVolume3: '', 
      nineteenSeventyVolume4: '', 
      nineteenSeventyVolume5: '', 
      nineteenSeventyVolume6: '', 
      
      twentyTwentyVolume1: '',
      twentyTwentyVolume2: '',
      twentyTwentyVolume3: '',
      twentyTwentyVolume4: '',
      twentyTwentyVolume5: '',
      twentyTwentyVolume6: '', 
      
      birdAudio1Pan: '',
      birdAudio2Pan: '',
      birdAudio3Pan: '',
      birdAudio4Pan: '',
      birdAudio5Pan: '',
      birdAudio6Pan: '',
      birdAudio7Pan: '',
      birdAudio8Pan: '',
      birdAudio9Pan: '',
      birdAudio10Pan: '',
      birdAudio11Pan: '',
      birdAudio12Pan: '',
      birdAudio13Pan: '',
      birdAudio14Pan: '',
      birdAudio15Pan: '',
      birdAudio16Pan: '', 
      
      card1: false, 
      card2: false, 
      card3: false, 
      card4: false, 
      card5: false,
      card6: false, 
      card7: false, 
      card8: false, 
      card9: false, 
      card10: false, 
      card11: false, 
      card12: false, 
      card13: false, 
      card14: false, 
      card15: false, 
      card16: false,  
      
      birdColor1: 'salmon', 
      birdColor2: 'turquoise', 
      birdColor3: 'violet',
      birdColor4: 'orange',
      birdColor5: 'yellow',
      birdColor6: 'red', 
      birdColor7: 'green', 
      birdColor8: 'brown', 
      birdColor9: 'blue', 
      birdColor10: 'bisque', 
      birdColor11: 'aquamarine', 
      birdColor12: 'chartreuse', 
      birdColor13: 'cyan', 
      birdColor14: 'coral', 
      birdColor15: 'white', 
      birdColor16: 'gray', 
      
      flipCard1: false, 
      flipCard2: false, 
      flipCard3: false, 
      flipCard4: false, 
      flipCard5: false, 
      flipCard6: false, 
      flipCard7: false, 
      flipCard8: false, 
      flipCard9: false, 
      flipCard10: false, 
      flipCard11: false, 
      flipCard12: false, 
      flipCard13: false, 
      flipCard14: false, 
      flipCard15: false, 
      flipCard16: false, 
      
      
      flipCardA: false, 
      flipCardB: false, 
      flipCardC: false, 
      flipCardD: false, 
      flipCardE: false, 
      flipCardF: false,
      flipCardG: false,
      flipCardH: false,
      flipCardI: false,
      flipCardJ: false,
      flipCardK: false,
      flipCardL: false,
      flipCardM: false,
      flipCardN: false,
      flipCardO: false,
      flipCardP: false,
      
      
      twenty: false, 
      group: [],
      isHidden: false, 
      isHidden2: false, 
      isHidden3: false, 
      aboutHidden: false, 
      voiceHidden: false, 
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
         this.woodLand = true //remove after updating data set
  },
    isBackYard: function (){
      alert('Coming soon! For now, current variables are set to Woodlands.')
      //this.msg3 = "Back Yard"
      //this.activeColor = "limegreen"
      //this.backYard = true
      //this.resultsType = "Back Yard"
      this.woodLand = true //remove after updating data set

  },
     generateSoundscape: function () {
     var self = this; 
     let churn = true; 
     var returnedResults = []
     Pizzicato.context.resume();
        axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/bird_data_mod.json")
       .then(function (response) { 
		
		if (churn == true){
		returnedResults = response.data.filter(function(item){
		return item.sound1 !== "" && item.sound2 !== "" && item.sound3 !== "" && item.sound4 !== "" && item.sound5 !== ""
		})
		}
      
      if (self.woodLand == true) { 
        self.filteredResults = returnedResults.filter(function(item){
        return item.scape === "woodland"
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

		for (var i=0; i<16; i++) {
		var soundScapeVariables
		do {

		soundScapeVariables = getRandomEntry();

		} while(entryExists(soundScapeVariables))

		randomEntries.push(soundScapeVariables);

		}
		console.log("Random entries retrieved:" + soundScapeVariables)

          self.msg2 = "Soundscape Variables Generated"
          self.msg4 = "Select a Time Period to Listen"
          
          var probability = Math.random()*10
            console.log("Probability number is: " + probability)
          
          
          var soundConstructor = "sound" + Math.floor(Math.random()*4+1) 

//BIRD 1 - 10 Meters - 100% Volume          
          self.birdName1 = randomEntries[0].species
          self.birdNumber1 = randomEntries[0][soundConstructor]
          var birdProbability1 = randomEntries[0].score_1970 * 100
          var birdProbabilityA = randomEntries[0].score_2017 * 100
          var panValue1 = Math.random()*2 - 1
            if (probability <= birdProbability1) {
              self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.nineteenSeventyVolume1 = randomEntries[0].score_1970
              self.birdSound1.volume = randomEntries[0].score_1970
              self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSound1.addEffect(self.birdSound1Pan)
              });
              self.flipCard1 = true
            }
            if (probability >= birdProbability1) {
              self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSound1.volume = self.birdSoundVolume1
              self.birdSound1.addEffect(self.birdSound1Pan)
              });
              self.flipCard1 = false
            }
            if (probability <= birdProbabilityA) {
              self.birdAudio1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.twentyTwentyVolume1 = randomEntries[0].score_2017
              self.birdAudio1.volume = randomEntries[0].score_2017
              self.birdAudio1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdAudio1.addEffect(self.birdAudio1Pan)
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
            
//BIRD 2 - 20 Meters - 100% Volume            
          self.birdName2 = randomEntries[1].species
          self.birdNumber2 = randomEntries[1][soundConstructor]
          var birdProbability2 = randomEntries[1].score_1970 * 100
          var birdProbabilityB = randomEntries[1].score_2017 * 100
          var panValue2 = Math.random()*2 - 1
            if (probability <= birdProbability2) {
              self.birdSound2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.nineteenSeventyVolume2 = randomEntries[1].score_1970
              self.birdSound2.volume = randomEntries[1].score_1970 
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
              self.twentyTwentyVolume2 = randomEntries[1].score_2017
              self.birdAudio2.volume = randomEntries[1].score_2017
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
            
//BIRD 3 - 30 Meters - 100% Volume  
          self.birdName3 = randomEntries[2].species
          self.birdNumber3 = randomEntries[2][soundConstructor]
          var birdProbability3 = randomEntries[2].score_1970 * 100
          var birdProbabilityC = randomEntries[2].score_2017 * 100
          var panValue3 = Math.random()*2 - 1
            if (probability <= birdProbability3) {
              self.birdSound3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.nineteenSeventyVolume3 = randomEntries[2].score_1970
              self.birdSound3.volume = randomEntries[2].score_1970 
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
              self.twentyTwentyVolume3 = randomEntries[2].score_2017
              self.birdAudio3.volume = randomEntries[2].score_2017
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

//BIRD 4 - 40 Meters - 100% Volume 
          self.birdName4 = randomEntries[3].species
          self.birdNumber4 = randomEntries[3][soundConstructor]
          var birdProbability4 = randomEntries[3].score_1970 * 100
          var birdProbabilityD = randomEntries[3].score_2017 * 100
          var panValue4 = Math.random()*2 - 1
            if (probability <= birdProbability4) {
              self.birdSound4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.nineteenSeventyVolume4 = randomEntries[3].score_1970
              self.birdSound4.volume = randomEntries[3].score_1970 
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
              self.twentyTwentyVolume4 = randomEntries[3].score_2017
              self.birdAudio4.volume = randomEntries[3].score_2017
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

//BIRD 5 - 50 Meters - 50% Volume 
          self.birdName5 = randomEntries[4].species
          self.birdNumber5 = randomEntries[4][soundConstructor]
          var birdProbability5 = randomEntries[4].score_1970 * 100
          var birdProbabilityE = randomEntries[4].score_2017 * 100
          var panValue5 = Math.random()*2 - 1
            if (probability <= birdProbability5) {
              self.birdSound5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.nineteenSeventyVolume5 = randomEntries[4].score_1970
              self.birdSound5.volume = randomEntries[4].score_1970 
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
              self.twentyTwentyVolume5 = randomEntries[4].score_2017
              self.birdAudio5.volume = randomEntries[4].score_2017
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
            
//BIRD 6 - 60 Meters - 25% Volume 
          self.birdName6 = randomEntries[5].species
          self.birdNumber6 = randomEntries[5][soundConstructor]
          var birdProbability6 = randomEntries[5].score_1970 * 100
          var birdProbabilityF = randomEntries[5].score_2017 * 100
          var panValue6 = Math.random()*2 - 1
            if (probability <= birdProbability6) {
              self.birdSound6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.nineteenSeventyVolume6 = randomEntries[5].score_1970
              self.birdSound6.volume = randomEntries[5].score_1970 
              self.birdSound6Pan = new Pizzicato.Effects.StereoPanner({pan: panValue5});
              self.birdSound6.addEffect(self.birdSound6Pan)
              });
              self.flipCard6 = true
            }
            if (probability >= birdProbability6) {
              self.birdSound6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.birdSound6Pan = new Pizzicato.Effects.StereoPanner({pan: panValue6});
              self.birdSound6.volume = 0
              self.birdSound6.addEffect(self.birdSound6Pan)
              });
              self.flipCard5 = false
            }
            if (probability <= birdProbabilityF) {
              self.birdAudio6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.twentyTwentyVolume6 = randomEntries[5].score_2017
              self.birdAudio6.volume = randomEntries[5].score_2017
              self.birdAudio6Pan = new Pizzicato.Effects.StereoPanner({pan: panValue6});
              self.birdAudio6.addEffect(self.birdAudio6Pan)
              });
              self.flipCardF = true
            }
            if (probability >= birdProbabilityF) {
              self.birdAudio6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.birdAudio6.volume = 0
              self.birdAudio6Pan = new Pizzicato.Effects.StereoPanner({pan: panValue6});
              self.birdAudio6.addEffect(self.birdAudio6Pan)
              });
              self.flipCardF = false
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
          this.group.removeSound(this.birdAudio6)
          this.seventyStop = false
          this.sleep(200).then(() => {
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
        this.group.addSound(this.birdSound6)
        
        this.msg = "1970"
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.stop = false; 
        
        this.birdSoundVolume1 = this.nineteenSeventyVolume1;
        this.birdSoundVolume2 = this.nineteenSeventyVolume2; 
        this.birdSoundVolume3 = this.nineteenSeventyVolume3; 
        this.birdSoundVolume4 = this.nineteenSeventyVolume4; 
        this.birdSoundVolume5 = this.nineteenSeventyVolume5; 
        this.birdSoundVolume6 = this.nineteenSeventyVolume6;  
        
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
        if (this.flipCard6 == true) {
          this.card6 = true; 
        }
        
        if (this.flipCard1 == false && this.flipCard2 == false && this.flipCard3 == false && this.flipCard4 == false && this.flipCard5 == false && this.flipCard6 == false ) {
          this.msg4 = "Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."
        }
        
        this.sleep(500).then(() => {
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
          this.group.removeSound(this.birdSound6)
          this.twentyStop = false
          this.sleep(200).then(() => {
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
        this.group.addSound(this.birdAudio6)
        
        this.msg = "Today"
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.stop = false; 
        
        this.birdSoundVolume1 = this.twentyTwentyVolume1;
        this.birdSoundVolume2 = this.twentyTwentyVolume2;
        this.birdSoundVolume3 = this.twentyTwentyVolume3;
        this.birdSoundVolume4 = this.twentyTwentyVolume4;
        this.birdSoundVolume5 = this.twentyTwentyVolume5;
        this.birdSoundVolume6 = this.twentyTwentyVolume6; 
        
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
         if (this.flipCardF == true) {
          this.card6 = true; 
        }
        if (this.flipCardA == false && this.flipCardB == false && this.flipCardC== false && this.flipCardD == false && this.flipCardE == false && this.flipCardF == false ) {
          this.msg4 = "Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."
        }
        this.stop = true; 
        this.sleep(500).then(() => {
          this.visualizeTwentyTwenty()
        })
        }
    },
    end: function (){
      this.group.stop();
    },
    reset: function () {
        this.group.stop()
        this.woodLand = false; 
        this.coast = false; 
        this.backYard = false; 
        this.msg = "BYRD BOT"
        this.msg2 = ""
        this.msg3 = ""
        this.msg4 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        if (this.stop == false){
          this.group.stop()
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
#canvas { 
height: 50px; 
padding-top: -250px; 
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
