import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class brassGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) url("https://mainline.i3s.unice.fr/fausteditorweb/dist/PedalEditor/Front-End/img/background/flames1.jpg") repeat scroll 0% 0% / 100% 100% padding-box border-box;border:1px solid rgb(73, 73, 73);bottom:-100.219px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:478.5px;hyphens:manual;inset:57.7188px 1024px -100.219px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:1024px;rx:auto;ry:auto;speak:normal;stroke:none;top:57.7188px;transform:none;transition:all 0s ease 0s;visibility:visible;widows:2;width:268px;x:0px;y:0px;zoom:1;};</style>
<div id="brass" class="resize-drag my-pedal gradiant-target" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: 100% 100%; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; position: relative; top: 0px; left: 0px; width: 268px; height: 478.5px; background-image: url(&quot;./img/background/flames1.jpg&quot;);"><div id="brass" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; width: 128px; position: absolute; top: 33px; left: 1px; height: 438.5px;"></div><div id="brass" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; width: 128px; position: absolute; top: 194px; left: 133px; height: 277.5px;"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 5px; width: 130px; height: 78.5px; transform: translate(-4.05357px, 7.94643px);" data-x="-4.053572088843765" data-y="7.946427911156235"><webaudio-knob id="/brass/blower/pressure" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.01" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px -2200px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1042.29px; top: -36.5px;">0.55</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 149.5px; left: 5px; width: 130px; height: 78.5px;"><webaudio-knob id="/brass/blower/breathGain" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.01" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1042.29px; top: -36.5px;">0.00</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 230px; left: 5px; width: 130px; height: 78.5px;"><webaudio-knob id="/brass/blower/breathCutoff" src="./img/knobs/slider_green.png" sprites="100" min="20" max="20000" step="0.1" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 310.5px; left: 5px; width: 130px; height: 78.5px;"><webaudio-knob id="/brass/blower/vibratoFreq" src="./img/knobs/slider_green.png" sprites="100" min="0.1" max="10" step="0.1" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 391px; left: 5px; width: 130px; height: 78.5px;"><webaudio-knob id="/brass/blower/vibratoGain" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.01" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 230px; left: 137px; width: 130px; height: 78.5px;"><webaudio-knob id="/brass/brassModel/tubeLength" src="./img/knobs/slider_green.png" sprites="100" min="0.01" max="2.5" step="0.01" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 310.5px; left: 137px; width: 130px; height: 78.5px;"><webaudio-knob id="/brass/brassModel/lipsTension" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.01" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 391px; left: 137px; width: 130px; height: 78.5px;"><webaudio-knob id="/brass/brassModel/mute" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.01" width="128" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><label for="brass" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 264px; left: 2px; top: 3.71875px;" class="drag" contenteditable="false">brass</label><label for="blower" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 124px; left: 6px; top: 39.7188px;" class="drag" contenteditable="false">blower</label><label for="brassModel" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 124px; left: 138px; top: 200.719px;" class="drag" contenteditable="false">brassModel</label><label for="pressure" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 8px; top: 118.219px; transform: translate(0px, 9px); border: none;" class="drag target-style-label" contenteditable="false" data-x="0" data-y="9">pressure</label><label for="breathGain" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 8px; top: 198.719px;" class="drag" contenteditable="false">breathGain</label><label for="breathCutoff" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 8px; top: 279.219px;" class="drag" contenteditable="false">breathCutoff</label><label for="vibratoFreq" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 8px; top: 359.719px;" class="drag" contenteditable="false">vibratoFreq</label><label for="vibratoGain" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 8px; top: 440.219px;" class="drag" contenteditable="false">vibratoGain</label><label for="tubeLength" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 140px; top: 279.219px;" class="drag" contenteditable="false">tubeLength</label><label for="lipsTension" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 140px; top: 359.719px;" class="drag" contenteditable="false">lipsTension</label><label for="mute" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 140px; top: 440.219px;" class="drag" contenteditable="false">mute</label></div>`;
  
        this.isOn;
            this.state = new Object();
            this.setKnobs();
            this.setSliders();
            this.setSwitches();
            //this.setSwitchListener();
            this.setInactive();
            // Change #pedal to .my-pedal for use the new builder
            this._root.querySelector('.my-pedal').style.transform = 'none';
            //this._root.querySelector("#test").style.fontFamily = window.getComputedStyle(this._root.querySelector("#test")).getPropertyValue('font-family');
  
            // Compute base URI of this main.html file. This is needed in order
            // to fix all relative paths in CSS, as they are relative to
            // the main document, not the plugin's main.html
            this.basePath = getBaseURL();
            console.log("basePath = " + this.basePath)
  
            // Fix relative path in WebAudio Controls elements
            this.fixRelativeImagePathsInCSS();
  
            // optionnal : set image background using a relative URI (relative
            // to this file)
        //this.setImageBackground("/img/BigMuffBackground.png");
          
        // Monitor param changes in order to update the gui
        window.requestAnimationFrame(this.handleAnimationFrame);
      
              }
          
              fixRelativeImagePathsInCSS() {
                 
      // change webaudiocontrols relative paths for spritesheets to absolute
          let webaudioControls = this._root.querySelectorAll(
              'webaudio-knob, webaudio-slider, webaudio-switch, img'
          );
          webaudioControls.forEach((e) => {
              let currentImagePath = e.getAttribute('src');
              if (currentImagePath !== undefined) {
                  //console.log("Got wc src as " + e.getAttribute("src"));
                  let imagePath = e.getAttribute('src');
                  e.setAttribute('src', this.basePath + '/' + imagePath);
                  //console.log("After fix : wc src as " + e.getAttribute("src"));
              }
          });
  
          let sliders = this._root.querySelectorAll('webaudio-slider');
          sliders.forEach((e) => {
              let currentImagePath = e.getAttribute('knobsrc');
              if (currentImagePath !== undefined) {
                  let imagePath = e.getAttribute('knobsrc');
                  e.setAttribute('knobsrc', this.basePath + '/' + imagePath);
              }
          });

          // BMT Get all fonts
          // Need to get the attr font
          let usedFonts = "";
          let fonts = this._root.querySelectorAll('label[font]');
          fonts.forEach((e) => {
              if(!usedFonts.includes(e.getAttribute("font"))) usedFonts += "family=" + e.getAttribute("font") + "&";
          });
          let link = document.createElement('link');
          link.rel = "stylesheet";
          if(usedFonts.slice(0, -1)) link.href = "https://fonts.googleapis.com/css2?"+usedFonts.slice(0, -1)+"&display=swap";
          document.querySelector('head').appendChild(link);
          
          // BMT Adapt for background-image
          let divs = this._root.querySelectorAll('div');
          divs.forEach((e) => {
              if('background-image' in e.style){
                let currentImagePath = e.style.backgroundImage.slice(4, -1);
                if (currentImagePath !== undefined) {
                    let imagePath = e.style.backgroundImage.slice(5, -2);
                    if(imagePath != "") e.style.backgroundImage = 'url(' + this.basePath + '/' + imagePath + ')';
                }
              }
          });
          
              }
          
              setImageBackground() {
                 
      // check if the shadowroot host has a background image
          let mainDiv = this._root.querySelector('#main');
          mainDiv.style.backgroundImage =
              'url(' + this.basePath + '/' + imageRelativeURI + ')';
  
          //console.log("background =" + mainDiv.style.backgroundImage);
          //this._root.style.backgroundImage = "toto.png";
      
              }
          
              attributeChangedCallback() {
                 
            console.log('Custom element attributes changed.');
            this.state = JSON.parse(this.getAttribute('state'));
        let tmp = '/PingPongDelayFaust/bypass';
        
        if (this.state[tmp] == 1) {
          this._root.querySelector('#switch1').value = 0;
          this.isOn = false;
        } else if (this.state[tmp] == 0) {
          this._root.querySelector('#switch1').value = 1;
          this.isOn = true;
        }
  
        this.knobs = this._root.querySelectorAll('.knob');
        console.log(this.state);
  
        for (var i = 0; i < this.knobs.length; i++) {
          this.knobs[i].setValue(this.state[this.knobs[i].id], false);
          console.log(this.knobs[i].value);
        }
      
              }
          handleAnimationFrame = () => {
        this._root.getElementById('/brass/blower/pressure').value = this._plug.audioNode.getParamValue('/brass/blower/pressure');
        

        this._root.getElementById('/brass/blower/breathGain').value = this._plug.audioNode.getParamValue('/brass/blower/breathGain');
        

        this._root.getElementById('/brass/blower/breathCutoff').value = this._plug.audioNode.getParamValue('/brass/blower/breathCutoff');
        

        this._root.getElementById('/brass/blower/vibratoFreq').value = this._plug.audioNode.getParamValue('/brass/blower/vibratoFreq');
        

        this._root.getElementById('/brass/blower/vibratoGain').value = this._plug.audioNode.getParamValue('/brass/blower/vibratoGain');
        

        this._root.getElementById('/brass/brassModel/tubeLength').value = this._plug.audioNode.getParamValue('/brass/brassModel/tubeLength');
        

        this._root.getElementById('/brass/brassModel/lipsTension').value = this._plug.audioNode.getParamValue('/brass/brassModel/lipsTension');
        

        this._root.getElementById('/brass/brassModel/mute').value = this._plug.audioNode.getParamValue('/brass/brassModel/mute');
        
window.requestAnimationFrame(this.handleAnimationFrame);
         }
      
              get properties() {
                 
        this.boundingRect = {
            dataWidth: {
              type: Number,
              value: null
            },
            dataHeight: {
              type: Number,
              value: null
            }
        };
        return this.boundingRect;
      
              }
          
              static get observedAttributes() {
                 
        return ['state'];
      
              }
          
              setKnobs() {
                 this._root.getElementById("/brass/blower/pressure").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/blower/pressure", e.target.value));
this._root.getElementById("/brass/blower/breathGain").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/blower/breathGain", e.target.value));
this._root.getElementById("/brass/blower/breathCutoff").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/blower/breathCutoff", e.target.value));
this._root.getElementById("/brass/blower/vibratoFreq").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/blower/vibratoFreq", e.target.value));
this._root.getElementById("/brass/blower/vibratoGain").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/blower/vibratoGain", e.target.value));
this._root.getElementById("/brass/brassModel/tubeLength").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/brassModel/tubeLength", e.target.value));
this._root.getElementById("/brass/brassModel/lipsTension").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/brassModel/lipsTension", e.target.value));
this._root.getElementById("/brass/brassModel/mute").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/brass/brassModel/mute", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 
              }
          
              setInactive() {
                 
        let switches = this._root.querySelectorAll(".switch webaudio-switch");
  
        switches.forEach(s => {
          console.log("### SWITCH ID = " + s.id);
          this._plug.audioNode.setParamValue(s.id, 0);
        });
      
              }
          }
      try {
          customElements.define('wap-brass', 
                                brassGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      