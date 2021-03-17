<template>
  <div id="background">
  <h1 id="messageThree" v-bind:style="{ color: activeColor}">{{ msg3 }}</h1> 
  <h2 id="time" class="messageOne">{{ msg }}</h2>
    <h3 id="messageTwo">{{ msg2 }}</h3> 
    <p id="overview" v-if="!isHidden">There are around 3 billion fewer birds alive in North America today than there were in 1970. 3 billion is one of those numbers that is so big, it is difficult to understand.<br><br>Interested to learn what 3 billion less birds in the environment sounds like, we built Byrd Bot, an online tool that generates artificial bird soundscapes that simulate what the woods would sound like at 3 different points in time: 1970, 2017, and 2065.<br><br>Users can compare the soundscapes to experience decades of past or projected future environmental change, expressed in the form of bird songs.<br><br>Click “Generate Soundscape” and the system will create a unique soundscape that spans across time periods.</p> 
    <button id="generateButton" v-if="!isHidden" v-on:click="aboutHidden=true; voiceHidden=true; isHidden=true; isHidden3=true;">Generate Soundscape</button>
      <p><button class="landscape" id="woodlands" v-if="isHidden3" v-on:click="isWoodLand(); generateSoundscape(); isHidden3=false; isHidden4=false; isHidden2=true; other()">Listen to Soundscape</button><p>
    <span>
    <p>
     <p id="surveyQuestion" v-if="!isHidden"><br><br><br><br>Are you interested to help us learn more about environmental communication by filling out a brief survey before and after interacting with Byrd Bot?
     <!-- <button id="aboutButton" v-if="!aboutHidden" v-on:click="isModalVisible=true">About</button>-->
     <!-- <button id="voiceButton" v-if="!voiceHidden" v-on:click="initiateVoiceControl()">Enable Voice Control</button>-->
     <br><button id="aboutButton" v-on:click="aboutHidden=true; voiceHidden=true; isHidden=true; isHidden3=true; isHidden4=true; biome()">Yes</button>
    </p>
    <iframe id="survey" v-if="isHidden4" src="https://docs.google.com/forms/d/e/1FAIpQLSeZH1_xjV_WbZ0Ive4t8VSOkBQi8ugxsZUmIVgmZj-d4b_gzA/viewform?embedded=true" width="640" height="2336" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </span> 
   <!-- <button class="landscape" id="coast" v-if="isHidden3" v-on:click="isCoast(); generateSoundscape(); isHidden3=false; isHidden2=true">Coast</button>  
    <button class="landscape" id="backyard" v-if="isHidden3" v-on:click="isBackYard(); generateSoundscape(); isHidden3=false; isHidden2=true">Backyard</button>-->  
    <ul class="birdBox" id="birds3" >
      <li class="card" v-bind:style="{color: birdColor6, fontSize: birdSoundVolume6/2 +'px'}" v-show="card6"><!-- <img class="card" :alt="birdName6" :src="birdImage6"> -->{{birdName6}}</li>
      <li class="card" v-bind:style="{color: birdColor7, fontSize: birdSoundVolume7/2 +'px'}" v-show="card7"><!-- <img class="card" :alt="birdName7" :src="birdImage7"> -->{{birdName7}}</li>
      <li class="card" v-bind:style="{color: birdColor8, fontSize: birdSoundVolume8/2 +'px'}" v-show="card8"><!-- <img class="card" :alt="birdName8" :src="birdImage8"> -->{{birdName8}}</li>
      <li class="card" v-bind:style="{color: birdColor9, fontSize: birdSoundVolume9/2 +'px'}" v-show="card9"><!-- <img class="card" :alt="birdName9" :src="birdImage9"> -->{{birdName9}}</li>
      <li class="card" v-bind:style="{color: birdColor10, fontSize: birdSoundVolume10/2 +'px'}" v-show="card10"><!-- <img class="card" :alt="birdName10" :src="birdImage10"> -->{{birdName10}}</li>
      <li class="card" v-bind:style="{color: birdColor11}" v-show="card11"><!-- <img class="card" :alt="birdName11" :src="birdImage11"> -->{{birdName11}}</li>
      <li class="card" v-bind:style="{color: birdColor12}" v-show="card12"><!-- <img class="card" :alt="birdName12" :src="birdImage12"> -->{{birdName12}}</li>
      <li class="card" v-bind:style="{color: birdColor13}" v-show="card13"><!-- <img class="card" :alt="birdName13" :src="birdImage13"> -->{{birdName13}}</li>
      <li class="card" v-bind:style="{color: birdColor14}" v-show="card14"><!-- <img class="card" :alt="birdName14" :src="birdImage14"> -->{{birdName14}}</li>
      <li class="card" v-bind:style="{color: birdColor15}" v-show="card15"><!-- <img class="card" :alt="birdName15" :src="birdImage15"> -->{{birdName15}}</li>
      <li class="card" v-bind:style="{color: birdColor16}" v-show="card16"><!-- <img class="card" :alt="birdName16" :src="birdImage15"> -->{{birdName16}}</li>
    </ul> <h4> {{ meters3 }} </h4>
    <ul class="birdBox" id="birds2" >
      <li class="card" v-bind:style="{color: birdColor3, fontSize: birdSoundVolume3/2 +'px'}" v-show="card3"><!-- <img class="card" :alt="birdName3" :src="birdImage3"> -->{{birdName3}}</li>
      <li class="card" v-bind:style="{color: birdColor4, fontSize: birdSoundVolume4/2 +'px'}" v-show="card4"><!-- <img class="card" :alt="birdName4" :src="birdImage4"> -->{{birdName4}}</li>
      <li class="card" v-bind:style="{color: birdColor5, fontSize: birdSoundVolume5/2 +'px'}" v-show="card5"><!-- <img class="card" :alt="birdName5" :src="birdImage5"> -->{{birdName5}}</li>
    </ul> <h4> {{ meters2 }} </h4>
     <ul class="birdBox" id="birds1" > 
      <li class="card" v-bind:style="{color: birdColor1, fontSize: birdSoundVolume1/2 +'px'}" v-show="card1"><!-- <img class="card" :alt="birdName1" :src="birdImage1"> -->{{birdName1}}</li>
      <li class="card" v-bind:style="{color: birdColor2, fontSize: birdSoundVolume2/2 +'px'}" v-show="card2"><!-- <img class="card" :alt="birdName2" :src="birdImage2"> -->{{birdName2}}</li>
	</ul> <h4> {{ meters1 }} </h4>
    <h3>{{ msg4 }}</h3> 
    <Modal v-show="isModalVisible" @voice="this.reInitiateVoiceControl" @close="isModalVisible = false"/> 
    <button id="nineteenSeventyButton" v-if="isHidden2" v-on:click="nineteenSeventy">Play 1970</button>
    <button id="twentyTwentyButton" v-if="isHidden2" v-on:click="twentyTwenty">Play 2017</button>
    <button id="twentyTwentyFiftyFive" v-if="isHidden2" v-on:click="fiftyFifty">Play 2065</button>
    <p><button id="resetButton" v-if="isHidden2" v-on:click="aboutHidden=false; isHidden=false; isHidden2=false; reset(); voiceHidden=false">Reset</button></p>
    <canvas id="canvas"></canvas>
    <iframe id="survey" v-if="surveyShow" src="https://docs.google.com/forms/d/e/1FAIpQLScEwpGGtoaN_ArWoJG3Qn7hGaNANefUaZnJu5fV4J33-ircuA/viewform?embedded=true" width="640" height="2511" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
      meters1: '', 
      meters2: '', 
      meters3: '', 
         
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
      
      birdSong1: '',
      birdSong2: '', 
      birdSong3: '', 
      birdSong4: '', 
      birdSong5: '', 
      birdSong6: '', 
      birdSong7: '', 
      birdSong8: '', 
      birdSong9: '', 
      birdSong10: '', 
      birdSong11: '', 
      birdSong12: '', 
      birdSong13: '', 
      birdSong14: '', 
      birdSong15: '', 
      birdSong16: '',  
      
      
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
      nineteenSeventyVolume7: '', 
      nineteenSeventyVolume8: '', 
      nineteenSeventyVolume9: '', 
      nineteenSeventyVolume10: '', 
      
      twentyTwentyVolume1: '',
      twentyTwentyVolume2: '',
      twentyTwentyVolume3: '',
      twentyTwentyVolume4: '',
      twentyTwentyVolume5: '',
      twentyTwentyVolume6: '', 
      twentyTwentyVolume7: '', 
      twentyTwentyVolume8: '', 
      twentyTwentyVolume9: '', 
      twentyTwentyVolume10: '', 
      
      twentySixtyFiveVolume1: '',
      twentySixtyFiveVolume2: '',
      twentySixtyFiveVolume3: '',
      twentySixtyFiveVolume4: '',
      twentySixtyFiveVolume5: '',
      twentySixtyFiveVolume6: '',
      twentySixtyFiveVolume7: '',
      twentySixtyFiveVolume8: '',
      twentySixtyFiveVolume9: '',
      twentySixtyFiveVolume10: '', 
      
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
       
       birdSongAudio1Pan: '',
       birdSongAudio2Pan: '',
       birdSongAudio3Pan: '',
       birdSongAudio4Pan: '',
       birdSongAudio5Pan: '',
       birdSongAudio6Pan: '',
       birdSongAudio7Pan: '',
       birdSongAudio8Pan: '',
       birdSongAudio9Pan: '', 
       birdSongAudio10Pan: '', 
      
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
      
      flipCardOne: false, 
      flipCardTwo: false, 
      flipCardThree: false, 
      flipCardFour: false, 
      flipCardFive: false, 
      flipCardSix: false,
      flipCardSeven: false,
      flipCardEight: false,
      flipCardNine: false,
      flipCardTen: false,
      flipCardElevent: false,
      flipCardTwelve: false,
      flipCardThirteen: false,
      flipCardFourteen: false,
      flipCardFifteen: false,
      flipCardSixteen: false,
      
      
      twenty: false, 
      group: [],
      isHidden: false, 
      isHidden2: false, 
      isHidden3: false, 
      isHidden4: false, 
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
      sixtyFiveStop: false,
      resultsType: '', 
      survey: false, 
      surveyShow: false
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
  this.msg2 = "Survey"
  this.msg = ""
    this.survey = true
  },
    other: function (){
  this.msg2 = ""
  this.msg = ""
  
  if (this.survey == true) {
	this.surveyShow = true 
  }
  else {
  this.surveyShow = false
  }
  },
  isWoodLand: function (){
    this.woodLand = true
    this.msg3 = ""
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
        axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/bird_data_simple_future.json")
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
		return self.filteredResults[Math.round(Math.random() * (self.filteredResults.length))];
		}

		for (var i=0; i<16; i++) {
		var soundScapeVariables
		
		soundScapeVariables = getRandomEntry();

		
		randomEntries.push(soundScapeVariables);

		}
		console.log("Random entries retrieved:" + randomEntries)

          self.msg2 = "Soundscape Variables Generated"
          self.msg4 = "Select a Time Period to Listen"
          
          //die roll
          var probability = Math.random()*100
            console.log("Probability number is: " + probability)
          
          
          var soundConstructor = "sound" + Math.floor(Math.random()*4+1) 

//BIRD 1 - 10-40 Meters - 100% Volume          
          self.birdName1 = randomEntries[0].species
          self.birdNumber1 = randomEntries[0][soundConstructor]
          var birdProbability1 = randomEntries[0].score_1970 * 100
          var birdProbabilityA = randomEntries[0].score_2017 * 100
          var birdProbabilityOne = randomEntries[0].score_2065 * 100
          var panValue1 = Math.random()*2 - 1
          
            //1970
            if (probability <= birdProbability1) {
              self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.nineteenSeventyVolume1 = birdProbability1
              self.birdSound1.volume = 1
              self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSound1.addEffect(self.birdSound1Pan)
              });
              self.flipCard1 = true
            }
            if (probability >= birdProbability1) {
              self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.birdSound1.volume = 0
              self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSound1.volume = self.birdSoundVolume1
              self.birdSound1.addEffect(self.birdSound1Pan)
              });
              self.flipCard1 = false
            }
            
            //2017
            if (probability <= birdProbabilityA) {
              self.birdAudio1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.twentyTwentyVolume1 = birdProbabilityA
              self.birdAudio1.volume = 1
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
            
            //2065
            if (probability <= birdProbabilityOne) {
              self.birdSong1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.twentySixtyFiveVolume1 = birdProbabilityOne
              self.birdSong1.volume = 1
              self.birdSong1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSong1.addEffect(self.birdSong1Pan)
              });
              self.flipCardOne = true
            }
            if (probability >= birdProbabilityOne) {
              self.birdSong1 = new Pizzicato.Sound(self.birdNumber1, function() {
              self.birdSong1.volume = 0
              self.birdSong1Pan = new Pizzicato.Effects.StereoPanner({pan: panValue1});
              self.birdSong1.addEffect(self.birdSong1Pan)
              });
              self.flipCardOne = false
            }
            
//BIRD 2 - 10-40 Meters - 100% Volume            
          self.birdName2 = randomEntries[1].species
          self.birdNumber2 = randomEntries[1][soundConstructor]
          var birdProbability2 = randomEntries[1].score_1970 * 100
          var birdProbabilityB = randomEntries[1].score_2017 * 100
          var birdProbabilityTwo = randomEntries[1].score_2065 * 100
          var panValue2 = Math.random()*2 - 1
          
          //1970
            if (probability <= birdProbability2) {
              self.birdSound2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.nineteenSeventyVolume2 = birdProbability2
              self.birdSound2.volume = 1 
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
            
            //2017
            if (probability <= birdProbabilityB) {
              self.birdAudio2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.twentyTwentyVolume2 = birdProbabilityB
              self.birdAudio2.volume = 1
              self.birdAudio2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue2});
              self.birdAudio2.addEffect(self.birdAudio2Pan)
              });
              self.flipCardB = true
            }
            if (probability >= birdProbabilityB) {
              self.birdAudio2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.birdAudio2.volume = 0
              self.birdAudio2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue2});
              self.birdAudio2.addEffect(self.birdAudio2Pan)
              });
              self.flipCardB = false
            }
            
            //2065
            if (probability <= birdProbabilityTwo) {
              self.birdSong2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.twentySixtyFiveVolume2 = birdProbabilityTwo
              self.birdSong2.volume = 1
              self.birdSong2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue2});
              self.birdSong2.addEffect(self.birdSong2Pan)
              });
              self.flipCardTwo = true
            }
            if (probability >= birdProbabilityTwo) {
              self.birdSong2 = new Pizzicato.Sound(self.birdNumber2, function() {
              self.birdSong2.volume = 0
              self.birdSong2Pan = new Pizzicato.Effects.StereoPanner({pan: panValue2});
              self.birdSong2.addEffect(self.birdSong2Pan)
              });
              self.flipCardTwo = false
            }
            
//BIRD 3 - 50 Meters - 50% Volume  
          self.birdName3 = randomEntries[2].species
          self.birdNumber3 = randomEntries[2][soundConstructor]
          var birdProbability3 = randomEntries[2].score_1970 * 100
          var birdProbabilityC = randomEntries[2].score_2017 * 100
          var birdProbabilityThree = randomEntries[2].score_2065 * 100
          var panValue3 = Math.random()*2 - 1
          
            //1970
            if (probability <= birdProbability3) {
              self.birdSound3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.nineteenSeventyVolume3 = birdProbability3
              self.birdSound3.volume = .5
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
            
            //2017
            if (probability <= birdProbabilityC) {
              self.birdAudio3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.twentyTwentyVolume3 = birdProbabilityC
              self.birdAudio3.volume = .5
              self.birdAudio3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue3});
              self.birdAudio3.addEffect(self.birdAudio3Pan)
              });
              self.flipCardC = true
            }
            if (probability >= birdProbabilityC) {
              self.birdAudio3 = new Pizzicato.Sound(self.birdNumber3,  function() {
              self.birdAudio3.volume = 0
              self.birdAudio3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue3});
              self.birdAudio3.addEffect(self.birdAudio3Pan)
              });
              self.flipCardC = false
            }
            
            //2065
            if (probability <= birdProbabilityThree) {
              self.birdSong3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.twentySixtyFiveVolume3 = birdProbabilityThree
              self.birdSong3.volume = .5
              self.birdSong3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue3});
              self.birdSong3.addEffect(self.birdSong3Pan)
              });
              self.flipCardThree = true
            }
            if (probability >= birdProbabilityThree) {
              self.birdSong3 = new Pizzicato.Sound(self.birdNumber3, function() {
              self.birdSong3.volume = 0
              self.birdSong3Pan = new Pizzicato.Effects.StereoPanner({pan: panValue3});
              self.birdSong3.addEffect(self.birdSong3Pan)
              });
              self.flipCardThree = false
            }

//BIRD 4 - 50 Meters - 50% Volume 
          self.birdName4 = randomEntries[3].species
          self.birdNumber4 = randomEntries[3][soundConstructor]
          var birdProbability4 = randomEntries[3].score_1970 * 100
          var birdProbabilityD = randomEntries[3].score_2017 * 100
          var birdProbabilityFour = randomEntries[3].score_2065 * 100
          var panValue4 = Math.random()*2 - 1
          
            //1970
            if (probability <= birdProbability4) {
              self.birdSound4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.nineteenSeventyVolume4 = birdProbability4
              self.birdSound4.volume = .5 
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
            
            //2017
            if (probability <= birdProbabilityD) {
              self.birdAudio4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.twentyTwentyVolume4 = birdProbabilityD
              self.birdAudio4.volume = .5
              self.birdAudio4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue4});
              self.birdAudio4.addEffect(self.birdAudio4Pan)
              });
              self.flipCardD = true
            }
            if (probability >= birdProbabilityD) {
              self.birdAudio4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.birdAudio4.volume = 0
              self.birdAudio4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue4});
              self.birdAudio4.addEffect(self.birdAudio4Pan)
              });
              self.flipCardD = false
            }
            
            //2065
            if (probability <= birdProbabilityFour) {
              self.birdSong4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.twentySixtyFiveVolume4 = birdProbabilityFour
              self.birdSong4.volume = .5
              self.birdSong4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue4});
              self.birdSong4.addEffect(self.birdSong4Pan)
              });
              self.flipCardFour = true
            }
            if (probability >= birdProbabilityFour) {
              self.birdSong4 = new Pizzicato.Sound(self.birdNumber4, function() {
              self.birdSong4.volume = 0
              self.birdSong4Pan = new Pizzicato.Effects.StereoPanner({pan: panValue4});
              self.birdSong4.addEffect(self.birdSong4Pan)
              });
              self.flipCardFour = false
            }

//BIRD 5 - 50 Meters - 50% Volume 
          self.birdName5 = randomEntries[4].species
          self.birdNumber5 = randomEntries[4][soundConstructor]
          var birdProbability5 = randomEntries[4].score_1970 * 100
          var birdProbabilityE = randomEntries[4].score_2017 * 100
          var birdProbabilityFive = randomEntries[4].score_2065 * 100
          var panValue5 = Math.random()*2 - 1
          
            //1970
            if (probability <= birdProbability5) {
              self.birdSound5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.nineteenSeventyVolume5 = birdProbability5
              self.birdSound5.volume = .5 
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
            
            //2017
            if (probability <= birdProbabilityE) {
              self.birdAudio5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.twentyTwentyVolume5 = birdProbabilityE
              self.birdAudio5.volume = .5
              self.birdAudio5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue5});
              self.birdAudio5.addEffect(self.birdAudio5Pan)
              });
              self.flipCardE = true
            }
            if (probability >= birdProbabilityE) {
              self.birdAudio5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.birdAudio5.volume = 0
              self.birdAudio5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue5});
              self.birdAudio5.addEffect(self.birdAudio5Pan)
              });
              self.flipCardE = false
            }
            
            //2065
            if (probability <= birdProbabilityFive) {
              self.birdSong5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.twentySixtyFiveVolume5 = birdProbabilityFive
              self.birdSong5.volume = .5
              self.birdSong5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue5});
              self.birdSong5.addEffect(self.birdSong5Pan)
              });
              self.flipCardFive = true
            }
            if (probability >= birdProbabilityFive) {
              self.birdSong5 = new Pizzicato.Sound(self.birdNumber5, function() {
              self.birdSong5.volume = 0
              self.birdSong5Pan = new Pizzicato.Effects.StereoPanner({pan: panValue5});
              self.birdSong5.addEffect(self.birdSong5Pan)
              });
              self.flipCardFive = false
            }
            
//BIRD 6 - 60 Meters - 25% Volume 
          self.birdName6 = randomEntries[5].species
          self.birdNumber6 = randomEntries[5][soundConstructor]
          var birdProbability6 = randomEntries[5].score_1970 * 100
          var birdProbabilityF = randomEntries[5].score_2017 * 100
          var birdProbabilitySix = randomEntries[5].score_2065 * 100
          var panValue6 = Math.random()*2 - 1
          
            //1970
            if (probability <= birdProbability6) {
              self.birdSound6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.nineteenSeventyVolume6 = birdProbability6
              self.birdSound6.volume = .25 
              self.birdSound6Pan = new Pizzicato.Effects.StereoPanner({pan: panValue6});
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
              self.flipCard6 = false
            }
            
            //2017
            if (probability <= birdProbabilityF) {
              self.birdAudio6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.twentyTwentyVolume6 = birdProbabilityF
              self.birdAudio6.volume = .25
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
            
            //2065
            if (probability <= birdProbabilitySix) {
              self.birdSong6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.twentySixtyFiveVolume6 = birdProbabilitySix
              self.birdSong6.volume = .25
              self.birdSong6Pan = new Pizzicato.Effects.StereoPanner({pan: panValue6});
              self.birdSong6.addEffect(self.birdSong6Pan)
              });
              self.flipCardSix = true
            }
            if (probability >= birdProbabilitySix) {
              self.birdSong6 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.birdSong6.volume = 0
              self.birdSong6Pan = new Pizzicato.Effects.StereoPanner({pan: panValue6});
              self.birdSong6.addEffect(self.birdSong6Pan)
              });
              self.flipCardSix = false
            }

//BIRD 7 - 60 Meters - 20% Volume 
          self.birdName7 = randomEntries[6].species
          self.birdNumber7 = randomEntries[6][soundConstructor]
          var birdProbability7 = randomEntries[6].score_1970 * 100
          var birdProbabilityG = randomEntries[6].score_2017 * 100
          var birdProbabilitySeven = randomEntries[6].score_2065 * 100
          var panValue7 = Math.random()*2 - 1
          
          //1970
            if (probability <= birdProbability7) {
              self.birdSound7 = new Pizzicato.Sound(self.birdNumber7, function() {
              self.nineteenSeventyVolume7 = birdProbability7
              self.birdSound7.volume = .20
              self.birdSound7Pan = new Pizzicato.Effects.StereoPanner({pan: panValue7});
              self.birdSound7.addEffect(self.birdSound7Pan)
              });
              self.flipCard7 = true
            }
            if (probability >= birdProbability7) {
              self.birdSound7 = new Pizzicato.Sound(self.birdNumber7, function() {
              self.birdSound7Pan = new Pizzicato.Effects.StereoPanner({pan: panValue7});
              self.birdSound7.volume = 0
              self.birdSound7.addEffect(self.birdSound7Pan)
              });
              self.flipCard7 = false
            }
            
            //2017
            if (probability <= birdProbabilityG) {
              self.birdAudio7 = new Pizzicato.Sound(self.birdNumber6, function() {
              self.twentyTwentyVolume7 = birdProbabilityG
              self.birdAudio7.volume = .20
              self.birdAudio7Pan = new Pizzicato.Effects.StereoPanner({pan: panValue7});
              self.birdAudio7.addEffect(self.birdAudio7Pan)
              });
              self.flipCardG = true
            }
            if (probability >= birdProbabilityG) {
              self.birdAudio7 = new Pizzicato.Sound(self.birdNumber7, function() {
              self.birdAudio7.volume = 0
              self.birdAudio7Pan = new Pizzicato.Effects.StereoPanner({pan: panValue7});
              self.birdAudio7.addEffect(self.birdAudio7Pan)
              });
              self.flipCardG = false
            }
            
            //2065
            if (probability <= birdProbabilitySeven) {
              self.birdSong7 = new Pizzicato.Sound(self.birdNumber7, function() {
              self.twentySixtyFiveVolume7 = birdProbabilitySeven
              self.birdSong7.volume = .20
              self.birdSong7Pan = new Pizzicato.Effects.StereoPanner({pan: panValue7});
              self.birdSong7.addEffect(self.birdSong7Pan)
              });
              self.flipCardSeven = true
            }
            if (probability >= birdProbabilitySeven) {
              self.birdSong7 = new Pizzicato.Sound(self.birdNumber7, function() {
              self.birdSong7.volume = 0
              self.birdSong7Pan = new Pizzicato.Effects.StereoPanner({pan: panValue7});
              self.birdSong7.addEffect(self.birdSong7Pan)
              });
              self.flipCardSeven = false
            }
            
//BIRD 8 - 70 Meters - 12% Volume 
          self.birdName8 = randomEntries[7].species
          self.birdNumber8 = randomEntries[7][soundConstructor]
          var birdProbability8 = randomEntries[7].score_1970 * 100
          var birdProbabilityH = randomEntries[7].score_2017 * 100
          var birdProbabilityEight = randomEntries[7].score_2065 * 100
          var panValue8 = Math.random()*2 - 1
          
          //1970
            if (probability <= birdProbability8) {
              self.birdSound8 = new Pizzicato.Sound(self.birdNumber8, function() {
              self.nineteenSeventyVolume8 = birdProbability8
              self.birdSound8.volume = .12
              self.birdSound8Pan = new Pizzicato.Effects.StereoPanner({pan: panValue8});
              self.birdSound8.addEffect(self.birdSound8Pan)
              });
              self.flipCard8 = true
            }
            if (probability >= birdProbability8) {
              self.birdSound8 = new Pizzicato.Sound(self.birdNumber8, function() {
              self.birdSound8Pan = new Pizzicato.Effects.StereoPanner({pan: panValue8});
              self.birdSound8.volume = 0
              self.birdSound8.addEffect(self.birdSound8Pan)
              });
              self.flipCard5 = false
            }
            
            //2017
            if (probability <= birdProbabilityH) {
              self.birdAudio8 = new Pizzicato.Sound(self.birdNumber7, function() {
              self.twentyTwentyVolume8 = birdProbabilityH
              self.birdAudio8.volume = .12
              self.birdAudio8Pan = new Pizzicato.Effects.StereoPanner({pan: panValue8});
              self.birdAudio8.addEffect(self.birdAudio8Pan)
              });
              self.flipCardH = true
            }
            if (probability >= birdProbabilityH) {
              self.birdAudio8 = new Pizzicato.Sound(self.birdNumber8, function() {
              self.birdAudio8.volume = 0
              self.birdAudio8Pan = new Pizzicato.Effects.StereoPanner({pan: panValue8});
              self.birdAudio8.addEffect(self.birdAudio8Pan)
              });
              self.flipCardH = false
            }
            //2065
            if (probability <= birdProbabilityEight) {
              self.birdSong8 = new Pizzicato.Sound(self.birdNumber8, function() {
              self.twentySixtyFiveVolume8 = birdProbabilityEight
              self.birdSong8.volume = .12
              self.birdSong8Pan = new Pizzicato.Effects.StereoPanner({pan: panValue8});
              self.birdSong8.addEffect(self.birdSong8Pan)
              });
              self.flipCardEight = true
            }
            if (probability >= birdProbabilityEight) {
              self.birdSong8 = new Pizzicato.Sound(self.birdNumber8, function() {
              self.birdSong8.volume = 0
              self.birdSong8Pan = new Pizzicato.Effects.StereoPanner({pan: panValue8});
              self.birdSong8.addEffect(self.birdSong8Pan)
              });
              self.flipCardEight = false
            }
            
//BIRD 9 - 90 Meters - 08% Volume 
          self.birdName9 = randomEntries[8].species
          self.birdNumber9 = randomEntries[8][soundConstructor]
          var birdProbability9 = randomEntries[8].score_1970 * 100
          var birdProbabilityI = randomEntries[8].score_2017 * 100
          var birdProbabilityNine = randomEntries[8].score_2065 * 100
          var panValue9 = Math.random()*2 - 1
         
          //1970
            if (probability <= birdProbability9) {
              self.birdSound9 = new Pizzicato.Sound(self.birdNumber9, function() {
              self.nineteenSeventyVolume9 = birdProbability9
              self.birdSound9.volume = .07
              self.birdSound9Pan = new Pizzicato.Effects.StereoPanner({pan: panValue9});
              self.birdSound9.addEffect(self.birdSound9Pan)
              });
              self.flipCard9 = true
            }
            if (probability >= birdProbability9) {
              self.birdSound9 = new Pizzicato.Sound(self.birdNumber9, function() {
              self.birdSound9Pan = new Pizzicato.Effects.StereoPanner({pan: panValue9});
              self.birdSound9.volume = 0
              self.birdSound9.addEffect(self.birdSound9Pan)
              });
              self.flipCard9 = false
            }
            
            //2017
            if (probability <= birdProbabilityI) {
              self.birdAudio9 = new Pizzicato.Sound(self.birdNumber8, function() {
              self.twentyTwentyVolume9 = birdProbabilityI
              self.birdAudio9.volume = .07
              self.birdAudio9Pan = new Pizzicato.Effects.StereoPanner({pan: panValue9});
              self.birdAudio9.addEffect(self.birdAudio9Pan)
              });
              self.flipCardI = true
            }
            if (probability >= birdProbabilityI) {
              self.birdAudio9 = new Pizzicato.Sound(self.birdNumber9, function() {
              self.birdAudio9.volume = 0
              self.birdAudio9Pan = new Pizzicato.Effects.StereoPanner({pan: panValue9});
              self.birdAudio9.addEffect(self.birdAudio9Pan)
              });
              self.flipCardI = false
            }
            
            //2065
            if (probability <= birdProbabilityNine) {
              self.birdSong9 = new Pizzicato.Sound(self.birdNumber9, function() {
              self.twentySixtyFiveVolume9 = birdProbabilityNine
              self.birdSong9.volume = .07
              self.birdSong9Pan = new Pizzicato.Effects.StereoPanner({pan: panValue9});
              self.birdSong9.addEffect(self.birdSong9Pan)
              });
              self.flipCardNine = true
            }
            if (probability >= birdProbabilityNine) {
              self.birdSong9 = new Pizzicato.Sound(self.birdNumber9, function() {
              self.birdSong9.volume = 0
              self.birdSong9Pan = new Pizzicato.Effects.StereoPanner({pan: panValue9});
              self.birdSong9.addEffect(self.birdSong9Pan)
              });
              self.flipCardNine = false
            }
            
//BIRD 10 - 100 Meters - 03% Volume 
          self.birdName10 = randomEntries[9].species
          self.birdNumber10 = randomEntries[9][soundConstructor]
          var birdProbability10 = randomEntries[9].score_1970 * 100
          var birdProbabilityJ = randomEntries[9].score_2017 * 100
          var birdProbabilityTen = randomEntries[9].score_2065 * 100
          var panValue10 = Math.random()*2 - 1
          
          //1970
            if (probability <= birdProbability10) {
              self.birdSound10 = new Pizzicato.Sound(self.birdNumber10, function() {
              self.nineteenSeventyVolume10 = birdProbability10
              self.birdSound10.volume = .03
              self.birdSound10Pan = new Pizzicato.Effects.StereoPanner({pan: panValue10});
              self.birdSound10.addEffect(self.birdSound10Pan)
              });
              self.flipCard10 = true
            }
            if (probability >= birdProbability10) {
              self.birdSound10 = new Pizzicato.Sound(self.birdNumber10, function() {
              self.birdSound10Pan = new Pizzicato.Effects.StereoPanner({pan: panValue10});
              self.birdSound10.volume = 0
              self.birdSound10.addEffect(self.birdSound10Pan)
              });
              self.flipCard10 = false
            }
            
            //2017
            if (probability <= birdProbabilityJ) {
              self.birdAudio10 = new Pizzicato.Sound(self.birdNumber10, function() {
              self.twentyTwentyVolume10 = birdProbabilityJ
              self.birdAudio10.volume = .03
              self.birdAudio10Pan = new Pizzicato.Effects.StereoPanner({pan: panValue10});
              self.birdAudio10.addEffect(self.birdAudio10Pan)
              });
              self.flipCardJ = true
            }
            if (probability >= birdProbabilityJ) {
              self.birdAudio10 = new Pizzicato.Sound(self.birdNumber10, function() {
              self.birdAudio10.volume = 0
              self.birdAudio10Pan = new Pizzicato.Effects.StereoPanner({pan: panValue10});
              self.birdAudio10.addEffect(self.birdAudio10Pan)
              });
              self.flipCardJ = false
            }
            
            //2065
            if (probability <= birdProbabilityTen) {
              self.birdSong10 = new Pizzicato.Sound(self.birdNumber10, function() {
              self.twentySixtyFiveVolume10 = birdProbabilityTen
              self.birdSong10.volume = .03
              self.birdSong10Pan = new Pizzicato.Effects.StereoPanner({pan: panValue10});
              self.birdSong10.addEffect(self.birdSong10Pan)
              });
              self.flipCardTen = true
            }
            if (probability >= birdProbabilityTen) {
              self.birdSong10 = new Pizzicato.Sound(self.birdNumber10, function() {
              self.birdSong10.volume = 0
              self.birdSong10Pan = new Pizzicato.Effects.StereoPanner({pan: panValue10});
              self.birdSong10.addEffect(self.birdSong10Pan)
              });
              self.flipCardTen = false
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
    
        loopThree: function () {
      this.fiftyFifty()
    },
    nineteenSeventy: function (){
        if (this.seventyStop == true) {
          this.group.stop()
          //turned off 
          //this.group.removeSound(this.birdAudio1)
          //this.group.removeSound(this.birdAudio2)
          this.group.removeSound(this.birdAudio3)
          this.group.removeSound(this.birdAudio4)
          this.group.removeSound(this.birdAudio5)
          this.group.removeSound(this.birdAudio6)
          this.group.removeSound(this.birdAudio7)
          this.group.removeSound(this.birdAudio8)
          this.group.removeSound(this.birdAudio9)
          this.group.removeSound(this.birdAudio10)
          this.seventyStop = false
          this.sleep(200).then(() => {
            this.loopOne()
          })
        }
        if (this.sixtyFiveStop == true) {
          this.group.stop()
          //this.group.removeSound(this.birdSong1)
          //this.group.removeSound(this.birdSong2)
          //this.group.removeSound(this.birdSong3)
          //this.group.removeSound(this.birdSong4)
          this.group.removeSound(this.birdSong5)
          this.group.removeSound(this.birdSong6)
          this.group.removeSound(this.birdSong7)
          this.group.removeSound(this.birdSong8)
          this.group.removeSound(this.birdSong9)
          this.group.removeSound(this.birdSong10)
          
          this.sixtyFiveStop = false
          this.sleep(200).then(() => {
            this.loopOne()
          })
        }
        else {
        this.msg4 = ""
        //this.meters1 = '--------------------------------------------------------------------------------   10-40 Meters   --------------------------------------------------------------------------------', 
        //this.meters2 = '--------------------------------------------------------------------------------   50 Meters   --------------------------------------------------------------------------------', 
        //this.meters3 = '--------------------------------------------------------------------------------   60+ Meters   -----------------------------------------------------------------------------------' 
        
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        this.group.addSound(this.birdSound1)
        this.group.addSound(this.birdSound2)
        this.group.addSound(this.birdSound3)
        this.group.addSound(this.birdSound4)
        this.group.addSound(this.birdSound5)
        this.group.addSound(this.birdSound6)
        this.group.addSound(this.birdSound7)
        this.group.addSound(this.birdSound8)
        this.group.addSound(this.birdSound9)
        this.group.addSound(this.birdSound10)
        
        this.msg = "1970"
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.card7 = false;
        this.card8 = false;
        this.card9 = false;
        this.card10 = false;
        this.stop = false; 
        
        this.birdSoundVolume1 = this.nineteenSeventyVolume1;
        this.birdSoundVolume2 = this.nineteenSeventyVolume2; 
        this.birdSoundVolume3 = this.nineteenSeventyVolume3; 
        this.birdSoundVolume4 = this.nineteenSeventyVolume4; 
        this.birdSoundVolume5 = this.nineteenSeventyVolume5; 
        this.birdSoundVolume6 = this.nineteenSeventyVolume6;
        this.birdSoundVolume7 = this.nineteenSeventyVolume7;   
        this.birdSoundVolume8 = this.nineteenSeventyVolume8;  
        this.birdSoundVolume9 = this.nineteenSeventyVolume9;  
        this.birdSoundVolume10 = this.nineteenSeventyVolume10;   
        
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
        if (this.flipCard7 == true) {
          this.card7 = true; 
        }
         if (this.flipCard8 == true) {
          this.card8 = true; 
        }
         if (this.flipCard9 == true) {
          this.card9 = true; 
        }
         if (this.flipCard10 == true) {
          this.card10 = true; 
        }
        
        if (this.flipCard1 == false && this.flipCard2 == false && this.flipCard3 == false && this.flipCard4 == false && this.flipCard5 == false && this.flipCard6 == false && this.flipCard7 == false && this.flipCard8 == false && this.flipCard9 == false && this.flipCard10 == false ) {
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
          this.group.removeSound(this.birdSound7)
          this.group.removeSound(this.birdSound8)
          this.group.removeSound(this.birdSound9)
          this.group.removeSound(this.birdSound10)
          this.twentyStop = false
          this.sleep(200).then(() => {
            this.loopTwo()
          })
        }
        if (this.sixtyFiveStop == true) {
          this.group.stop()
          //this.group.removeSound(this.birdSong1)
          //this.group.removeSound(this.birdSong2)
          //this.group.removeSound(this.birdSong3)
          //this.group.removeSound(this.birdSong4)
          this.group.removeSound(this.birdSong5)
          this.group.removeSound(this.birdSong6)
          this.group.removeSound(this.birdSong7)
          this.group.removeSound(this.birdSong8)
          this.group.removeSound(this.birdSong9)
          this.group.removeSound(this.birdSong10)
          
          this.sixtyFiveStop = false
          this.sleep(200).then(() => {
            this.loopTwo()
          })
        }
        
//         
//                   this.group.removeSound(this.birdSound1)
//           this.group.removeSound(this.birdSound2)
//           this.group.removeSound(this.birdSound3)
//           this.group.removeSound(this.birdSound4)
//           this.group.removeSound(this.birdSound5)
//           this.group.removeSound(this.birdSound6)
//           this.group.removeSound(this.birdSound7)
//           this.group.removeSound(this.birdSound8)
//           this.group.removeSound(this.birdSound9)
//           this.group.removeSound(this.birdSound10)
        
        else {
        this.msg4 = ""
        //this.meters1 = '--------------------------------------------------------------------------------   10-40 Meters   --------------------------------------------------------------------------------', 
        //this.meters2 = '--------------------------------------------------------------------------------   50 Meters   --------------------------------------------------------------------------------', 
        //this.meters3 = '--------------------------------------------------------------------------------   60+ Meters   -----------------------------------------------------------------------------------' 
        
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        //this.group.addSound(this.birdAudio1)
        //this.group.addSound(this.birdAudio2)
        this.group.addSound(this.birdAudio3)
        this.group.addSound(this.birdAudio4)
        this.group.addSound(this.birdAudio5)
        this.group.addSound(this.birdAudio6)
        this.group.addSound(this.birdAudio7)
        this.group.addSound(this.birdAudio8)
        this.group.addSound(this.birdAudio9)
        this.group.addSound(this.birdAudio10)
        
        
        this.msg = "2017"
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.card7 = false;
        this.card8 = false;
        this.card9 = false;
        this.card10 = false;
        this.stop = false; 
        
        this.birdSoundVolume1 = this.twentyTwentyVolume1;
        this.birdSoundVolume2 = this.twentyTwentyVolume2;
        this.birdSoundVolume3 = this.twentyTwentyVolume3;
        this.birdSoundVolume4 = this.twentyTwentyVolume4;
        this.birdSoundVolume5 = this.twentyTwentyVolume5;
        this.birdSoundVolume6 = this.twentyTwentyVolume6; 
        this.birdSoundVolume7 = this.twentyTwentyVolume7; 
        this.birdSoundVolume8 = this.twentyTwentyVolume8; 
        this.birdSoundVolume9 = this.twentyTwentyVolume9; 
        this.birdSoundVolume10 = this.twentyTwentyVolume10; 
        
        if (this.flipCardA == true) {
          //this.card1 = true; 
        }
        if (this.flipCardB == true) {
          //this.card2 = true; 
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
         if (this.flipCardG == true) {
          this.card7 = true; 
        }
        if (this.flipCardH == true) {
          this.card8 = true; 
        }
        if (this.flipCardI == true) {
          this.card9 = true; 
        }
        if (this.flipCardJ == true) {
          this.card10 = true; 
        }
        
        if (this.flipCardA == false && this.flipCardB == false && this.flipCardC== false && this.flipCardD == false && this.flipCardE == false && this.flipCardF == false && this.flipCardG == false && this.flipCardH == false && this.flipCardI == false && this.flipCardJ == false  ) {
          this.msg4 = "Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."
        }
        this.stop = true; 
        this.sleep(500).then(() => {
          this.visualizeTwentyTwenty()
        })
        }
    },
    fiftyFifty: function (){
        if (this.seventyStop == true) {
          this.group.stop()
          //this.group.removeSound(this.birdAudio1)
          //this.group.removeSound(this.birdAudio2)
          this.group.removeSound(this.birdAudio3)
          this.group.removeSound(this.birdAudio4)
          this.group.removeSound(this.birdAudio5)
          this.group.removeSound(this.birdAudio6)
          this.group.removeSound(this.birdAudio7)
          this.group.removeSound(this.birdAudio8)
          this.group.removeSound(this.birdAudio9)
          this.group.removeSound(this.birdAudio10)
          
          this.seventyStop = false
          this.sleep(200).then(() => {
            this.loopThree()
          })
        }
        
        if (this.twentyStop == true) {
          this.group.stop()
          this.group.removeSound(this.birdSound1)
          this.group.removeSound(this.birdSound2)
          this.group.removeSound(this.birdSound3)
          this.group.removeSound(this.birdSound4)
          this.group.removeSound(this.birdSound5)
          this.group.removeSound(this.birdSound6)
          this.group.removeSound(this.birdSound7)
          this.group.removeSound(this.birdSound8)
          this.group.removeSound(this.birdSound9)
          this.group.removeSound(this.birdSound10)
          this.twentyStop = false
          this.sleep(200).then(() => {
            this.loopThree()
          })
        }
        else {
        this.msg4 = ""
        //this.meters1 = '--------------------------------------------------------------------------------   10-40 Meters   --------------------------------------------------------------------------------', 
        //this.meters2 = '--------------------------------------------------------------------------------   50 Meters   --------------------------------------------------------------------------------', 
        //this.meters3 = '--------------------------------------------------------------------------------   60+ Meters   -----------------------------------------------------------------------------------' 
        
        var canvas = document.getElementsByTagName("canvas")[0]
        canvas.width = 0
        canvas.height = 0
        //this.group.addSound(this.birdSong1)
        //this.group.addSound(this.birdSong2)
        //this.group.addSound(this.birdSong3)
        //this.group.addSound(this.birdSong4)
        this.group.addSound(this.birdSong5)
        this.group.addSound(this.birdSong6)
        this.group.addSound(this.birdSong7)
        this.group.addSound(this.birdSong8)
        this.group.addSound(this.birdSong9)
        this.group.addSound(this.birdSong10)
        
        this.msg = "2065"
        this.msg2 = ""
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.card7 = false;
        this.card8 = false;
        this.card9 = false;
        this.card10 = false;
        this.stop = false; 
        
        this.birdSoundVolume1 = this.twentySixtyFiveVolume1;
        this.birdSoundVolume2 = this.twentySixtyFiveVolume2;
        this.birdSoundVolume3 = this.twentySixtyFiveVolume3;
        this.birdSoundVolume4 = this.twentySixtyFiveVolume4;
        this.birdSoundVolume5 = this.twentySixtyFiveVolume5;
        this.birdSoundVolume6 = this.twentySixtyFiveVolume6; 
        this.birdSoundVolume7 = this.twentySixtyFiveVolume7; 
        this.birdSoundVolume8 = this.ttwentySixtyFiveVolume8; 
        this.birdSoundVolume9 = this.twentySixtyFiveVolume9; 
        this.birdSoundVolume10 = this.twentySixtyFiveVolume10; 
        
        if (this.flipCardOne == true) {
          //this.card1 = true; 
        }
        if (this.flipCardTwo == true) {
          //this.card2 = true; 
        }
        if (this.flipCardThree == true) {
          //this.card3 = true; 
        }
        if (this.flipCardFour == true) {
          //this.card4 = true; 
        }
        if (this.flipCardFive == true) {
          this.card5 = true; 
        }
         if (this.flipCardSix == true) {
          this.card6 = true; 
        }
         if (this.flipCardSeven == true) {
          this.card7 = true; 
        }
        if (this.flipCardEight == true) {
          this.card8 = true; 
        }
        if (this.flipCardNine == true) {
          this.card9 = true; 
        }
        if (this.flipCardTen == true) {
          this.card10 = true; 
        }
        
        if (this.flipCardA == false && this.flipCardB == false && this.flipCardC== false && this.flipCardD == false && this.flipCardE == false && this.flipCardF == false && this.flipCardG == false && this.flipCardH == false && this.flipCardI == false && this.flipCardJ == false  ) {
          this.msg4 = "Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."
        }
        this.stop = true; 
        this.sleep(500).then(() => {
          this.visualizeTwentySixtyFive()
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
        this.meters1 = ''
        this.meters2 = ''
        this.meters3 = ''
        
        this.card1 = false; 
        this.card2 = false; 
        this.card3 = false; 
        this.card4 = false;
        this.card5 = false;
        this.card6 = false;
        this.card7 = false;
        this.card8 = false;
        this.card9 = false;
        this.card10 = false;
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
       this.sixtyFiveStop = true

       
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
       this.sixtyFiveStop = true
       
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
    }, 
      visualizeTwentySixtyFive: function () {
       var audioContext = Pizzicato.context;
       this.group.play()
       this.seventyStop = true
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
          ctx.strokeStyle = 'orange'
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
#surveyQuestion {
width: 40%; 
float: right;
text-align: center;  
margin-right: 4.5%; 
}
#overview {
font-size: 20px; 
width: 50%; 
text-align: left;
float: left;  
margin-top: 5%; 
margin-left: 25px; 
}
#messageTwo {
font-size: 50px;
}
#messageThree {
font-size: 30px;
}
#birds1 {
}
#birds2 {
}
#birds3 {
}
.birdBox {
padding-bottom: 0; 
z-index: 2
}

.card {
border-style: solid; 
border-width: 1px;
padding: 5px; 
}
.landscape {
height: 100px; 
}
#time {
font-size: 65px;
margin-top: -25px; 
margin-bottom: -25px; 
}
#woodlands {
  background-color: purple;
}
#coast {
  background-color: lightblue;
}
#backyard {
  background-color: limegreen;
}
h3 {
margin-top: 0; 
margin-bottom: 0; 
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
margin-top: 15%; 
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
h4 {
  margin: 40px 0 0;
  text-align: center;
  margin-right: -25px; 
  margin-top: 0px; 
  margin-bottom: 40px; 
}
ul {
  list-style-type: none;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-left: -25px; 
}
li {
  display: inline-block;
  margin: 0 10px;
  
}
a {
  color: #42b983;
}
canvas {
height: 150px; 
width: 100%; 
}

</style>
