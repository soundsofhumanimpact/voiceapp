(function(e){function i(i){for(var o,t,a=i[0],s=i[1],u=i[2],c=0,b=[];c<a.length;c++)t=a[c],Object.prototype.hasOwnProperty.call(n,t)&&n[t]&&b.push(n[t][0]),n[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(i);while(b.length)b.shift()();return r.push.apply(r,u||[]),d()}function d(){for(var e,i=0;i<r.length;i++){for(var d=r[i],o=!0,a=1;a<d.length;a++){var s=d[a];0!==n[s]&&(o=!1)}o&&(r.splice(i--,1),e=t(t.s=d[0]))}return e}var o={},n={app:0},r=[];function t(i){if(o[i])return o[i].exports;var d=o[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,t),d.l=!0,d.exports}t.m=e,t.c=o,t.d=function(e,i,d){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:d})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)t.d(d,o,function(i){return e[i]}.bind(null,o));return d},t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/voiceapp/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=i,a=a.slice();for(var u=0;u<a.length;u++)i(a[u]);var l=s;r.push([0,"chunk-vendors"]),d()})({0:function(e,i,d){e.exports=d("56d7")},"034f":function(e,i,d){"use strict";var o=d("85ec"),n=d.n(o);n.a},"0c8b":function(e,i,d){},"22d7":function(e,i,d){"use strict";var o=d("be87"),n=d.n(o);n.a},"483e":function(e,i,d){"use strict";var o=d("0c8b"),n=d.n(o);n.a},"56d7":function(e,i,d){"use strict";d.r(i);d("e260"),d("e6cf"),d("cca6"),d("a79d");var o=d("2b0e"),n=function(){var e=this,i=e.$createElement,d=e._self._c||i;return d("div",{attrs:{id:"app"}},[d("SoundsOfImpact")],1)},r=[],t=function(){var e=this,i=e.$createElement,d=e._self._c||i;return d("div",{attrs:{id:"background"}},[d("h2",{staticClass:"messageOne",attrs:{id:"time"}},[e._v(e._s(e.msg))]),d("h3",{attrs:{id:"messageTwo"}},[e._v(e._s(e.msg2))]),d("span"),e.isHidden3?d("button",{staticClass:"landscape",attrs:{id:"woodlands"},on:{click:function(i){e.isWoodLand(),e.generateSoundscape(),e.isHidden3=!1,e.isHidden2=!0}}},[e._v("Woodlands")]):e._e(),e.isHidden3?d("button",{staticClass:"landscape",attrs:{id:"coast"},on:{click:function(i){e.isCoast(),e.generateSoundscape(),e.isHidden3=!1,e.isHidden2=!0}}},[e._v("Coast")]):e._e(),e.isHidden3?d("button",{staticClass:"landscape",attrs:{id:"backyard"},on:{click:function(i){e.isBackYard(),e.generateSoundscape(),e.isHidden3=!1,e.isHidden2=!0}}},[e._v("Backyard")]):e._e(),d("ul",{attrs:{id:"birds"}},[d("li",{directives:[{name:"show",rawName:"v-show",value:e.card1,expression:"card1"}],staticClass:"card",style:{color:e.birdColor1,fontSize:75*e.birdSoundVolume1+"px"}},[e._v(e._s(e.birdName1))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card2,expression:"card2"}],staticClass:"card",style:{color:e.birdColor2,fontSize:75*e.birdSoundVolume2+"px"}},[e._v(e._s(e.birdName2))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card3,expression:"card3"}],staticClass:"card",style:{color:e.birdColor3,fontSize:75*e.birdSoundVolume3+"px"}},[e._v(e._s(e.birdName3))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card4,expression:"card4"}],staticClass:"card",style:{color:e.birdColor4,fontSize:75*e.birdSoundVolume4+"px"}},[e._v(e._s(e.birdName4))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card5,expression:"card5"}],staticClass:"card",style:{color:e.birdColor5,fontSize:75*e.birdSoundVolume5+"px"}},[e._v(e._s(e.birdName5))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card6,expression:"card6"}],staticClass:"card",style:{color:e.birdColor6,fontSize:75*e.birdSoundVolume6+"px"}},[e._v(e._s(e.birdName6))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card7,expression:"card7"}],staticClass:"card",style:{color:e.birdColor7}},[e._v(e._s(e.birdName7))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card8,expression:"card8"}],staticClass:"card",style:{color:e.birdColor8}},[e._v(e._s(e.birdName8))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card9,expression:"card9"}],staticClass:"card",style:{color:e.birdColor9}},[e._v(e._s(e.birdName9))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card10,expression:"card10"}],staticClass:"card",style:{color:e.birdColor10}},[e._v(e._s(e.birdName10))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card11,expression:"card11"}],staticClass:"card",style:{color:e.birdColor11}},[e._v(e._s(e.birdName11))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card12,expression:"card12"}],staticClass:"card",style:{color:e.birdColor12}},[e._v(e._s(e.birdName12))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card13,expression:"card13"}],staticClass:"card",style:{color:e.birdColor13}},[e._v(e._s(e.birdName13))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card14,expression:"card14"}],staticClass:"card",style:{color:e.birdColor14}},[e._v(e._s(e.birdName14))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card15,expression:"card15"}],staticClass:"card",style:{color:e.birdColor15}},[e._v(e._s(e.birdName15))]),d("li",{directives:[{name:"show",rawName:"v-show",value:e.card16,expression:"card16"}],staticClass:"card",style:{color:e.birdColor16}},[e._v(e._s(e.birdName16))])]),d("h1",{staticClass:"messageThree",style:{color:e.activeColor}},[e._v(e._s(e.msg3))]),d("h3",[e._v(e._s(e.msg4))]),d("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{voice:this.reInitiateVoiceControl,close:function(i){e.isModalVisible=!1}}}),e.isHidden?e._e():d("button",{attrs:{id:"generateButton"},on:{click:function(i){e.aboutHidden=!0,e.voiceHidden=!0,e.isHidden=!0,e.isHidden3=!0,e.biome()}}},[e._v("Generate Soundscape")]),e.isHidden2?d("button",{attrs:{id:"nineteenSeventyButton"},on:{click:e.nineteenSeventy}},[e._v("Play 1970")]):e._e(),e.isHidden2?d("button",{attrs:{id:"twentyTwentyButton"},on:{click:e.twentyTwenty}},[e._v("Play Today")]):e._e(),d("p",[e.isHidden2?d("button",{attrs:{id:"resetButton"},on:{click:function(i){e.aboutHidden=!1,e.isHidden=!1,e.isHidden2=!1,e.reset(),e.voiceHidden=!1}}},[e._v("Reset")]):e._e(),e.aboutHidden?e._e():d("button",{attrs:{id:"aboutButton"},on:{click:function(i){e.isModalVisible=!0}}},[e._v("About")]),e.voiceHidden?e._e():d("button",{attrs:{id:"voiceButton"},on:{click:function(i){return e.initiateVoiceControl()}}},[e._v("Enable Voice Control")])]),e._m(0)],1)},a=[function(){var e=this,i=e.$createElement,d=e._self._c||i;return d("p",{attrs:{id:"canvas"}},[d("canvas")])}],s=(d("4de4"),d("c975"),d("b64b"),d("d3b7"),d("bc3a")),u=d.n(s),l=d("7c02"),c=d.n(l),b=d("37d0"),m=function(){var e=this,i=e.$createElement,d=e._self._c||i;return d("transition",{attrs:{name:"modal-fade"}},[d("div",{staticClass:"modal-backdrop"},[d("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[d("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._v(" About ")]),d("div",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._v(" Byrd Bot expresses differences in bird populations between 1970 and 2020 as unique soundscapes, composed computationally using known bird population data and the Audubon Society's database of bird songs. "),d("p",[e._v("The application is born out of the Sounds of Human Impact project, a collaborative effort between communication studies and environmental science scholars interested to explore the role of sound as a means to expressing the impacts of the Anthroprocene. ")]),d("p",[e._v("When the user clicks "),d("button",{attrs:{id:"generate"}},[e._v("Generate Soundscape")]),e._v(" the software will generate a new soundscape, based on probabilities in which birds might be heard in "),d("button",{attrs:{id:"nineteenSeventy"}},[e._v("1970")]),e._v(". Then, the system generates a soundscape of those very same bird sounds, using probabilities for "),d("button",{attrs:{id:"twentyTwenty"}},[e._v("2020")]),e._v(". ")]),d("p",[e._v(" The listener is invited to listen deeply for the differences in ecology between these two time periods. ")])]),d("footer",{staticClass:"modal-footer"},[d("button",{on:{click:e.close}},[e._v("Close ")])])])])])},f=[],h={name:"Modal",methods:{close:function(){this.$emit("close")}}},p=h,S=(d("22d7"),d("2877")),v=Object(S["a"])(p,m,f,!1,null,null,null),w=v.exports,C={name:"SoundsOfImpact",components:{Modal:w},data:function(){return{msg:"",msg2:"",msg3:"",msg4:"",birdName1:"",birdName2:"",birdName3:"",birdName4:"",birdName5:"",birdName6:"",birdName7:"",birdName8:"",birdName9:"",birdName10:"",birdName11:"",birdName12:"",birdName13:"",birdName14:"",birdName15:"",birdName16:"",birdNumber1:"",birdNumber2:"",birdNumber3:"",birdNumber4:"",birdNumber5:"",birdNumber6:"",birdNumber7:"",birdNumber8:"",birdNumber9:"",birdNumber10:"",birdNumber11:"",birdNumber12:"",birdNumber13:"",birdNumber14:"",birdNumber15:"",birdNumber16:"",birdSound1:"",birdSound2:"",birdSound3:"",birdSound4:"",birdSound5:"",birdSound6:"",birdSound7:"",birdSound8:"",birdSound9:"",birdSound10:"",birdSound11:"",birdSound12:"",birdSound13:"",birdSound14:"",birdSound15:"",birdSound16:"",birdSound1Pan:"",birdSound2Pan:"",birdSound3Pan:"",birdSound4Pan:"",birdSound5Pan:"",birdSound6Pan:"",birdSound7Pan:"",birdSound8Pan:"",birdSound9Pan:"",birdSound10Pan:"",birdSound11Pan:"",birdSound12Pan:"",birdSound13Pan:"",birdSound14Pan:"",birdSound15Pan:"",birdSound16Pan:"",birdAudio1:"",birdAudio2:"",birdAudio3:"",birdAudio4:"",birdAudio5:"",birdAudio6:"",birdAudio7:"",birdAudio8:"",birdAudio9:"",birdAudio10:"",birdAudio11:"",birdAudio12:"",birdAudio13:"",birdAudio14:"",birdAudio15:"",birdAudio16:"",birdSoundVolume1:"",birdSoundVolume2:"",birdSoundVolume3:"",birdSoundVolume4:"",birdSoundVolume5:"",birdSoundVolume6:"",birdSoundVolume7:"",birdSoundVolume8:"",birdSoundVolume9:"",birdSoundVolume10:"",birdSoundVolume11:"",birdSoundVolume12:"",birdSoundVolume13:"",birdSoundVolume14:"",birdSoundVolume15:"",birdSoundVolume16:"",nineteenSeventyVolume1:"",nineteenSeventyVolume2:"",nineteenSeventyVolume3:"",nineteenSeventyVolume4:"",nineteenSeventyVolume5:"",nineteenSeventyVolume6:"",twentyTwentyVolume1:"",twentyTwentyVolume2:"",twentyTwentyVolume3:"",twentyTwentyVolume4:"",twentyTwentyVolume5:"",twentyTwentyVolume6:"",birdAudio1Pan:"",birdAudio2Pan:"",birdAudio3Pan:"",birdAudio4Pan:"",birdAudio5Pan:"",birdAudio6Pan:"",birdAudio7Pan:"",birdAudio8Pan:"",birdAudio9Pan:"",birdAudio10Pan:"",birdAudio11Pan:"",birdAudio12Pan:"",birdAudio13Pan:"",birdAudio14Pan:"",birdAudio15Pan:"",birdAudio16Pan:"",card1:!1,card2:!1,card3:!1,card4:!1,card5:!1,card6:!1,card7:!1,card8:!1,card9:!1,card10:!1,card11:!1,card12:!1,card13:!1,card14:!1,card15:!1,card16:!1,birdColor1:"salmon",birdColor2:"turquoise",birdColor3:"violet",birdColor4:"orange",birdColor5:"yellow",birdColor6:"red",birdColor7:"green",birdColor8:"brown",birdColor9:"blue",birdColor10:"bisque",birdColor11:"aquamarine",birdColor12:"chartreuse",birdColor13:"cyan",birdColor14:"coral",birdColor15:"white",birdColor16:"gray",flipCard1:!1,flipCard2:!1,flipCard3:!1,flipCard4:!1,flipCard5:!1,flipCard6:!1,flipCard7:!1,flipCard8:!1,flipCard9:!1,flipCard10:!1,flipCard11:!1,flipCard12:!1,flipCard13:!1,flipCard14:!1,flipCard15:!1,flipCard16:!1,flipCardA:!1,flipCardB:!1,flipCardC:!1,flipCardD:!1,flipCardE:!1,flipCardF:!1,flipCardG:!1,flipCardH:!1,flipCardI:!1,flipCardJ:!1,flipCardK:!1,flipCardL:!1,flipCardM:!1,flipCardN:!1,flipCardO:!1,flipCardP:!1,twenty:!1,group:[],isHidden:!1,isHidden2:!1,isHidden3:!1,aboutHidden:!1,voiceHidden:!1,isModalVisible:!1,stop:!1,doItAgain:!1,woodLand:!1,activeColor:"white",integer:"",coast:!1,backYard:!1,filteredResults:[],seventyStop:!1,twentyStop:!1,resultsType:""}},mounted:function(){this.msg="BYRD BOT",this.msg2="","webkitSpeechRecognition"in window?this.voiceHidden=!1:this.voiceHidden=!0},methods:{initiateVoiceControl:function(){var e=this;console.log("voice control initiated"),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;var i="",d=new window.SpeechRecognition;d.interimResults=!0,d.maxAlternatives=10,d.continuous=!0,d.onresult=function(o){for(var n="",r=o.resultIndex,t=o.results.length;r<t;r++){var a=o.results[r][0].transcript;o.results[r].isFinal?i+=a:n+=a,"generate soundscape"==n&&(e.generateSoundscape(),e.isHidden2=!0,e.aboutHidden=!0,e.doItAgain=!0,e.reInitiateVoiceControl()),"about"==n&&(e.isModalVisible=!0,e.doItAgain=!0,e.reInitiateVoiceControl()),"close"==n&&(e.isModalVisible=!1,e.doItAgain=!0,e.reInitiateVoiceControl()),"play 1970"==n&&(e.nineteenSeventy(),e.doItAgain=!0,e.reInitiateVoiceControl()),"play today"==n&&(e.twentyTwenty(),e.doItAgain=!0,e.reInitiateVoiceControl()),"reset"==n&&(e.reset(),e.aboutHidden=!1,e.isHidden2=!1,e.doItAgain=!0,e.reInitiateVoiceControl()),"disable voice control"==n?(d.abort(),console.log("voice control disabled"),e.doItAgain=!1):e.sleep(3500).then((function(){e.reInitiateVoiceControl()}))}console.log("transcript: "+i)},d.start()},reInitiateVoiceControl:function(){console.log("reinitiate"),1==this.doItAgain&&this.initiateVoiceControl()},biome:function(){this.msg2="Select a Biome",this.msg=""},isWoodLand:function(){this.woodLand=!0,this.msg3="Woodlands",this.activeColor="green",this.resultsType="Woodlands"},isCoast:function(){alert("Coming soon! For now, current variables are set to Woodlands."),this.woodLand=!0},isBackYard:function(){alert("Coming soon! For now, current variables are set to Woodlands."),this.woodLand=!0},generateSoundscape:function(){var e=this,i=!0,d=[];c.a.context.resume(),u.a.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/bird_data_mod.json").then((function(o){1==i&&(d=o.data.filter((function(e){return""!==e.sound1&&""!==e.sound2&&""!==e.sound3&&""!==e.sound4&&""!==e.sound5}))),1==e.woodLand&&(e.filteredResults=d.filter((function(e){return"woodland"===e.scape}))),1==e.coast&&(e.filteredResults=o.data.filter((function(e){return"coast"==e.scape}))),1==e.backYard&&(e.filteredResults=o.data.filter((function(e){return"backyard"==e.scape})));var n=Object.keys(e.filteredResults).length;console.log("Total number of "+e.resultsType+" birds is: "+n);var r=[];function t(){return e.filteredResults[Math.round(Math.random()*(e.filteredResults.length-1))]}function a(e){return r.indexOf(e)>-1}for(var s=0;s<16;s++){var u;do{u=t()}while(a(u));r.push(u)}console.log("Random entries retrieved:"+u),e.msg2="Soundscape Variables Generated",e.msg4="Select a Time Period to Listen";var l=10*Math.random();console.log("Probability number is: "+l);var b="sound"+Math.floor(4*Math.random()+1);e.birdName1=r[0].species,e.birdNumber1=r[0][b];var m=100*r[0].score_1970,f=100*r[0].score_2017,h=2*Math.random()-1;l<=m&&(e.birdSound1=new c.a.Sound(e.birdNumber1,(function(){e.nineteenSeventyVolume1=r[0].score_1970,e.birdSound1.volume=r[0].score_1970,e.birdSound1Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdSound1.addEffect(e.birdSound1Pan)})),e.flipCard1=!0),l>=m&&(e.birdSound1=new c.a.Sound(e.birdNumber1,(function(){e.birdSound1Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdSound1.volume=e.birdSoundVolume1,e.birdSound1.addEffect(e.birdSound1Pan)})),e.flipCard1=!1),l<=f&&(e.birdAudio1=new c.a.Sound(e.birdNumber1,(function(){e.twentyTwentyVolume1=r[0].score_2017,e.birdAudio1.volume=r[0].score_2017,e.birdAudio1Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio1.addEffect(e.birdAudio1Pan)})),e.flipCardA=!0),l>=f&&(e.birdAudio1=new c.a.Sound(e.birdNumber1,(function(){e.birdAudio1.volume=0,e.birdAudio1Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio1.addEffect(e.birdAudio1Pan)})),e.flipCardA=!1),e.birdName2=r[1].species,e.birdNumber2=r[1][b];var p=100*r[1].score_1970,S=100*r[1].score_2017,v=2*Math.random()-1;l<=p&&(e.birdSound2=new c.a.Sound(e.birdNumber2,(function(){e.nineteenSeventyVolume2=r[1].score_1970,e.birdSound2.volume=r[1].score_1970,e.birdSound2Pan=new c.a.Effects.StereoPanner({pan:v}),e.birdSound2.addEffect(e.birdSound2Pan)})),e.flipCard2=!0),l>=p&&(e.birdSound2=new c.a.Sound(e.birdNumber2,(function(){e.birdSound2Pan=new c.a.Effects.StereoPanner({pan:v}),e.birdSound2.volume=0,e.birdSound2.addEffect(e.birdSound2Pan)})),e.flipCard2=!1),l<=S&&(e.birdAudio2=new c.a.Sound(e.birdNumber2,(function(){e.twentyTwentyVolume2=r[1].score_2017,e.birdAudio2.volume=r[1].score_2017,e.birdAudio2Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio2.addEffect(e.birdAudio2Pan)})),e.flipCardB=!0),l>=S&&(e.birdAudio2=new c.a.Sound(e.birdNumber2,(function(){e.birdAudio2.volume=0,e.birdAudio2Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio2.addEffect(e.birdAudio2Pan)})),e.flipCardB=!1),e.birdName3=r[2].species,e.birdNumber3=r[2][b];var w=100*r[2].score_1970,C=100*r[2].score_2017,y=2*Math.random()-1;l<=w&&(e.birdSound3=new c.a.Sound(e.birdNumber3,(function(){e.nineteenSeventyVolume3=r[2].score_1970,e.birdSound3.volume=r[2].score_1970,e.birdSound3Pan=new c.a.Effects.StereoPanner({pan:y}),e.birdSound3.addEffect(e.birdSound3Pan)})),e.flipCard3=!0),l>=w&&(e.birdSound3=new c.a.Sound(e.birdNumber3,(function(){e.birdSound3Pan=new c.a.Effects.StereoPanner({pan:y}),e.birdSound3.volume=0,e.birdSound3.addEffect(e.birdSound3Pan)})),e.flipCard3=!1),l<=C&&(e.birdAudio3=new c.a.Sound(e.birdNumber3,(function(){e.twentyTwentyVolume3=r[2].score_2017,e.birdAudio3.volume=r[2].score_2017,e.birdAudio3Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio3.addEffect(e.birdAudio3Pan)})),e.flipCardC=!0),l>=C&&(e.birdAudio3=new c.a.Sound(e.birdNumber3,(function(){e.birdAudio3.volume=0,e.birdAudio3Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio3.addEffect(e.birdAudio3Pan)})),e.flipCardC=!1),e.birdName4=r[3].species,e.birdNumber4=r[3][b];var g=100*r[3].score_1970,A=100*r[3].score_2017,_=2*Math.random()-1;l<=g&&(e.birdSound4=new c.a.Sound(e.birdNumber4,(function(){e.nineteenSeventyVolume4=r[3].score_1970,e.birdSound4.volume=r[3].score_1970,e.birdSound4Pan=new c.a.Effects.StereoPanner({pan:_}),e.birdSound4.addEffect(e.birdSound4Pan)})),e.flipCard4=!0),l>=g&&(e.birdSound4=new c.a.Sound(e.birdNumber4,(function(){e.birdSound4Pan=new c.a.Effects.StereoPanner({pan:_}),e.birdSound4.volume=0,e.birdSound4.addEffect(e.birdSound4Pan)})),e.flipCard4=!1),l<=A&&(e.birdAudio4=new c.a.Sound(e.birdNumber4,(function(){e.twentyTwentyVolume4=r[3].score_2017,e.birdAudio4.volume=r[3].score_2017,e.birdAudio4Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio4.addEffect(e.birdAudio4Pan)})),e.flipCardD=!0),l>=A&&(e.birdAudio4=new c.a.Sound(e.birdNumber4,(function(){e.birdAudio4.volume=0,e.birdAudio4Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio4.addEffect(e.birdAudio4Pan)})),e.flipCardD=!1),e.birdName5=r[4].species,e.birdNumber5=r[4][b];var P=100*r[4].score_1970,N=100*r[4].score_2017,V=2*Math.random()-1;l<=P&&(e.birdSound5=new c.a.Sound(e.birdNumber5,(function(){e.nineteenSeventyVolume5=r[4].score_1970,e.birdSound5.volume=r[4].score_1970,e.birdSound5Pan=new c.a.Effects.StereoPanner({pan:V}),e.birdSound5.addEffect(e.birdSound5Pan)})),e.flipCard5=!0),l>=P&&(e.birdSound5=new c.a.Sound(e.birdNumber5,(function(){e.birdSound5Pan=new c.a.Effects.StereoPanner({pan:V}),e.birdSound5.volume=0,e.birdSound5.addEffect(e.birdSound5Pan)})),e.flipCard5=!1),l<=N&&(e.birdAudio5=new c.a.Sound(e.birdNumber5,(function(){e.twentyTwentyVolume5=r[4].score_2017,e.birdAudio5.volume=r[4].score_2017,e.birdAudio5Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio5.addEffect(e.birdAudio5Pan)})),e.flipCardE=!0),l>=N&&(e.birdAudio5=new c.a.Sound(e.birdNumber5,(function(){e.birdAudio5.volume=0,e.birdAudio5Pan=new c.a.Effects.StereoPanner({pan:h}),e.birdAudio5.addEffect(e.birdAudio5Pan)})),e.flipCardE=!1),e.birdName6=r[5].species,e.birdNumber6=r[5][b];var E=100*r[5].score_1970,T=100*r[5].score_2017,x=2*Math.random()-1;l<=E&&(e.birdSound6=new c.a.Sound(e.birdNumber6,(function(){e.nineteenSeventyVolume6=r[5].score_1970,e.birdSound6.volume=r[5].score_1970,e.birdSound6Pan=new c.a.Effects.StereoPanner({pan:V}),e.birdSound6.addEffect(e.birdSound6Pan)})),e.flipCard6=!0),l>=E&&(e.birdSound6=new c.a.Sound(e.birdNumber6,(function(){e.birdSound6Pan=new c.a.Effects.StereoPanner({pan:x}),e.birdSound6.volume=0,e.birdSound6.addEffect(e.birdSound6Pan)})),e.flipCard5=!1),l<=T&&(e.birdAudio6=new c.a.Sound(e.birdNumber6,(function(){e.twentyTwentyVolume6=r[5].score_2017,e.birdAudio6.volume=r[5].score_2017,e.birdAudio6Pan=new c.a.Effects.StereoPanner({pan:x}),e.birdAudio6.addEffect(e.birdAudio6Pan)})),e.flipCardF=!0),l>=T&&(e.birdAudio6=new c.a.Sound(e.birdNumber6,(function(){e.birdAudio6.volume=0,e.birdAudio6Pan=new c.a.Effects.StereoPanner({pan:x}),e.birdAudio6.addEffect(e.birdAudio6Pan)})),e.flipCardF=!1),e.group=new c.a.Group([])})).catch((function(e){console.log(e)}))},sleep:function(e){return new Promise((function(i){return setTimeout(i,e)}))},loopOne:function(){this.nineteenSeventy()},loopTwo:function(){this.twentyTwenty()},nineteenSeventy:function(){var e=this;if(1==this.seventyStop)this.group.stop(),this.group.removeSound(this.birdAudio1),this.group.removeSound(this.birdAudio2),this.group.removeSound(this.birdAudio3),this.group.removeSound(this.birdAudio4),this.group.removeSound(this.birdAudio5),this.group.removeSound(this.birdAudio6),this.seventyStop=!1,this.sleep(200).then((function(){e.loopOne()}));else{this.msg4="";var i=document.getElementsByTagName("canvas")[0];i.width=0,i.height=0,this.group.addSound(this.birdSound1),this.group.addSound(this.birdSound2),this.group.addSound(this.birdSound3),this.group.addSound(this.birdSound4),this.group.addSound(this.birdSound5),this.group.addSound(this.birdSound6),this.msg="1970",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.card6=!1,this.stop=!1,this.birdSoundVolume1=this.nineteenSeventyVolume1,this.birdSoundVolume2=this.nineteenSeventyVolume2,this.birdSoundVolume3=this.nineteenSeventyVolume3,this.birdSoundVolume4=this.nineteenSeventyVolume4,this.birdSoundVolume5=this.nineteenSeventyVolume5,this.birdSoundVolume6=this.nineteenSeventyVolume6,1==this.flipCard1&&(this.card1=!0),1==this.flipCard2&&(this.card2=!0),1==this.flipCard3&&(this.card3=!0),1==this.flipCard4&&(this.card4=!0),1==this.flipCard5&&(this.card5=!0),1==this.flipCard6&&(this.card6=!0),0==this.flipCard1&&0==this.flipCard2&&0==this.flipCard3&&0==this.flipCard4&&0==this.flipCard5&&0==this.flipCard6&&(this.msg4="Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."),this.sleep(500).then((function(){e.visualizeNineteenSeventy()}))}},twentyTwenty:function(){var e=this;if(1==this.twentyStop)this.group.stop(),this.group.removeSound(this.birdSound1),this.group.removeSound(this.birdSound2),this.group.removeSound(this.birdSound3),this.group.removeSound(this.birdSound4),this.group.removeSound(this.birdSound5),this.group.removeSound(this.birdSound6),this.twentyStop=!1,this.sleep(200).then((function(){e.loopTwo()}));else{this.msg4="";var i=document.getElementsByTagName("canvas")[0];i.width=0,i.height=0,this.group.addSound(this.birdAudio1),this.group.addSound(this.birdAudio2),this.group.addSound(this.birdAudio3),this.group.addSound(this.birdAudio4),this.group.addSound(this.birdAudio5),this.group.addSound(this.birdAudio6),this.msg="Today",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.card6=!1,this.stop=!1,this.birdSoundVolume1=this.twentyTwentyVolume1,this.birdSoundVolume2=this.twentyTwentyVolume2,this.birdSoundVolume3=this.twentyTwentyVolume3,this.birdSoundVolume4=this.twentyTwentyVolume4,this.birdSoundVolume5=this.twentyTwentyVolume5,this.birdSoundVolume6=this.twentyTwentyVolume6,1==this.flipCardA&&(this.card1=!0),1==this.flipCardB&&(this.card2=!0),1==this.flipCardC&&(this.card3=!0),1==this.flipCardD&&(this.card4=!0),1==this.flipCardE&&(this.card5=!0),1==this.flipCardF&&(this.card6=!0),0==this.flipCardA&&0==this.flipCardB&&0==this.flipCardC&&0==this.flipCardD&&0==this.flipCardE&&0==this.flipCardF&&(this.msg4="Sorry. There are no birds out right now for this time period. Try selecting a different time period, or reset."),this.stop=!0,this.sleep(500).then((function(){e.visualizeTwentyTwenty()}))}},end:function(){this.group.stop()},reset:function(){this.group.stop(),this.woodLand=!1,this.coast=!1,this.backYard=!1,this.msg="BYRD BOT",this.msg2="",this.msg3="",this.msg4="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.card6=!1;var e=document.getElementsByTagName("canvas")[0];e.width=0,e.height=0,0==this.stop&&(this.group.stop(),this.end()),1==this.stop&&this.end()},visualizeNineteenSeventy:function(){var e=c.a.context;this.group.play(),this.twentyStop=!0;var i=document.getElementsByTagName("canvas")[0];i.width=window.innerWidth,i.height=window.innerHeight;var d=c.a.context.createAnalyser();this.group.connect(d);var o=new b["a"](d);d.connect(e.destination);var n=i.getContext("2d");function r(){n.clearRect(0,0,i.width,i.height);var e=i.height/3;n.strokeStyle="limegreen",o.draw(n,0,e,void 0,e),window.requestAnimationFrame(r)}n.lineWidth=3,n.shadowBlur=4,n.shadowColor="white",r()},visualizeTwentyTwenty:function(){var e=c.a.context;this.group.play(),this.seventyStop=!0;var i=document.getElementsByTagName("canvas")[0];i.width=window.innerWidth,i.height=window.innerHeight;var d=c.a.context.createAnalyser();this.group.connect(d);var o=new b["a"](d);d.connect(e.destination);var n=i.getContext("2d");function r(){n.clearRect(0,0,i.width,i.height);var e=i.height/3;n.strokeStyle="salmon",o.draw(n,0,e,void 0,e),window.requestAnimationFrame(r)}n.lineWidth=3,n.shadowBlur=4,n.shadowColor="white",r()}},closeModal:function(){this.isModalVisible=!1}},y=C,g=(d("483e"),Object(S["a"])(y,t,a,!1,null,"5789ac32",null)),A=g.exports,_={name:"App",components:{SoundsOfImpact:A}},P=_,N=(d("034f"),Object(S["a"])(P,n,r,!1,null,null,null)),V=N.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(V)}}).$mount("#app")},"85ec":function(e,i,d){},be87:function(e,i,d){}});
//# sourceMappingURL=app.45f2c7fe.js.map