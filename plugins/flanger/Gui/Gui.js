import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class flangerGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) none repeat scroll 0% 0% / contain padding-box border-box;border:1px solid rgb(73, 73, 73);bottom:-268px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:591px;hyphens:manual;inset:59px 785px -268px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:785px;rx:auto;ry:auto;speak:normal;stroke:none;top:59px;transform:none;transition:all 0s ease 0s;visibility:visible;widows:2;width:507px;x:0px;y:0px;zoom:1;};</style>
<div id="flanger" class="resize-drag my-pedal" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 507px; position: relative; top: 0px; left: 0px; height: 591px;"><div id="flanger" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 1px; width: 499px; height: 310px;"></div><div id="flanger" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 347px; left: 68.9063px; width: 170.391px; height: 116.5px;"></div><div id="flanger" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 347px; left: 243.297px; width: 188.797px; height: 116.5px;"></div><div id="flanger" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 467.5px; left: 172.875px; width: 155.234px; height: 116.5px;"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 152.938px; width: 66px; height: 80px;"><webaudio-switch id="/FLANGER/0x00/Bypass" src="./img/switches/switch_1.png" sprites="100" width="64" height="40" style="touch-action: none;"><style>

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

webaudio-switch{
  display:inline-block;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 11px;
  cursor:pointer;
}
.webaudio-switch-body{
  display:inline-block;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-switch-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/switches/switch_1.png&quot;); background-size: 100% 200%; width: 64px; height: 40px; outline: none; background-position: 0px 0px;"><div class="webaudioctrl-tooltip" style="transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden;"></div></div>
</webaudio-switch></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 220.938px; width: 129.109px; height: 80px;"><webaudio-switch id="/FLANGER/0x00/Invert Flange Sum" src="./img/switches/switch_1.png" sprites="100" width="64" height="40" style="touch-action: none;"><style>

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

webaudio-switch{
  display:inline-block;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 11px;
  cursor:pointer;
}
.webaudio-switch-body{
  display:inline-block;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-switch-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/switches/switch_1.png&quot;); background-size: 100% 200%; width: 64px; height: 40px; outline: none; background-position: 0px 0px;"><div class="webaudioctrl-tooltip"></div></div>
</webaudio-switch></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 151px; left: 100.5px; width: 302px; height: 190px;"><canvas id="/FLANGER/0x00/Flange LFO" type="hbargraph" label="Flange LFO" address="/FLANGER/0x00/Flange LFO" index="48" meta="[object Object],[object Object],[object Object]" min="-1.5" max="1.5" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 383px; left: 72.9063px; width: 46.0625px; height: 78.5px;"><webaudio-knob id="/FLANGER/0x00/Speed" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="10" step="0.01" width="40" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 383px; left: 120.969px; width: 45.4688px; height: 78.5px;"><webaudio-knob id="/FLANGER/0x00/Depth" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="1" step="0.001" width="40" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 383px; left: 168.438px; width: 68.8594px; height: 78.5px;"><webaudio-knob id="/FLANGER/0x00/Feedback" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="-0.999" max="0.999" step="0.001" width="40" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px -2000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 383px; left: 247.297px; width: 92.4063px; height: 78.5px;"><webaudio-knob id="/FLANGER/Delay Controls/Flange Delay" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="20" step="0.001" width="40" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1020.44px; top: -36.5px;">0.000</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 383px; left: 341.703px; width: 88.3906px; height: 78.5px;"><webaudio-knob id="/FLANGER/Delay Controls/Delay Offset" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="20" step="0.001" width="40" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 503.5px; left: 176.875px; width: 149.234px; height: 78.5px;"><webaudio-knob id="/FLANGER/0x00/Flanger Output Level" src="./img/knobs/slider_green.png" sprites="100" min="-60" max="10" step="0.1" width="128" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px -3400px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><label for="FLANGER" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 503px; left: 2px; top: 5px;" class="drag" contenteditable="false">FLANGER</label><label for="0x00" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 495px; left: 6px; top: 41px;" class="drag" contenteditable="false">0x00</label><label for="0x00" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 166.391px; left: 73.9063px; top: 355px;" class="drag" contenteditable="false">0x00</label><label for="Delay Controls" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 184.797px; left: 248.297px; top: 355px;" class="drag" contenteditable="false">Delay Controls</label><label for="0x00" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 151.234px; left: 177.875px; top: 475.5px;" class="drag" contenteditable="false">0x00</label><label for="Bypass" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 64px; left: 155.938px; top: 121px;" class="drag" contenteditable="false">Bypass</label><label for="Invert Flange Sum" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 127.109px; left: 223.938px; top: 121px;" class="drag" contenteditable="false">Invert Flange Sum</label><label for="Flange LFO" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 103.5px; top: 313px;" class="drag" contenteditable="false">Flange LFO</label><label for="Speed" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 44.0625px; left: 75.9063px; top: 433.5px;" class="drag" contenteditable="false">Speed</label><label for="Depth" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 43.4688px; left: 123.969px; top: 433.5px;" class="drag" contenteditable="false">Depth</label><label for="Feedback" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 66.8594px; left: 171.438px; top: 433.5px;" class="drag" contenteditable="false">Feedback</label><label for="Flange Delay" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 90.4063px; left: 250.297px; top: 433.5px;" class="drag" contenteditable="false">Flange Delay</label><label for="Delay Offset" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 86.3906px; left: 344.703px; top: 433.5px;" class="drag" contenteditable="false">Delay Offset</label><label for="Flanger Output Level" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 147.234px; left: 179.875px; top: 554px;" class="drag" contenteditable="false">Flanger Output Level</label></div>`;
  
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
        this._root.getElementById('/FLANGER/0x00/Speed').value = this._plug.audioNode.getParamValue('/FLANGER/0x00/Speed');
        

        this._root.getElementById('/FLANGER/0x00/Depth').value = this._plug.audioNode.getParamValue('/FLANGER/0x00/Depth');
        

        this._root.getElementById('/FLANGER/0x00/Feedback').value = this._plug.audioNode.getParamValue('/FLANGER/0x00/Feedback');
        

        this._root.getElementById('/FLANGER/Delay Controls/Flange Delay').value = this._plug.audioNode.getParamValue('/FLANGER/Delay Controls/Flange Delay');
        

        this._root.getElementById('/FLANGER/Delay Controls/Delay Offset').value = this._plug.audioNode.getParamValue('/FLANGER/Delay Controls/Delay Offset');
        

        this._root.getElementById('/FLANGER/0x00/Flanger Output Level').value = this._plug.audioNode.getParamValue('/FLANGER/0x00/Flanger Output Level');
        

          this._root.getElementById('/FLANGER/0x00/Bypass').value = 1 - this._plug.audioNode.getParamValue('/FLANGER/0x00/Bypass');
         

          this._root.getElementById('/FLANGER/0x00/Invert Flange Sum').value = 1 - this._plug.audioNode.getParamValue('/FLANGER/0x00/Invert Flange Sum');
         
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
                 this._root.getElementById("/FLANGER/0x00/Speed").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FLANGER/0x00/Speed", e.target.value));
this._root.getElementById("/FLANGER/0x00/Depth").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FLANGER/0x00/Depth", e.target.value));
this._root.getElementById("/FLANGER/0x00/Feedback").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FLANGER/0x00/Feedback", e.target.value));
this._root.getElementById("/FLANGER/Delay Controls/Flange Delay").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FLANGER/Delay Controls/Flange Delay", e.target.value));
this._root.getElementById("/FLANGER/Delay Controls/Delay Offset").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FLANGER/Delay Controls/Delay Offset", e.target.value));
this._root.getElementById("/FLANGER/0x00/Flanger Output Level").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FLANGER/0x00/Flanger Output Level", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 this._root.getElementById("/FLANGER/0x00/Bypass").addEventListener("change", (e) =>this._plug.audioNode.setParamValue("/FLANGER/0x00/Bypass", 1 - e.target.value));
this._root.getElementById("/FLANGER/0x00/Invert Flange Sum").addEventListener("change", (e) =>this._plug.audioNode.setParamValue("/FLANGER/0x00/Invert Flange Sum", 1 - e.target.value));

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
          customElements.define('wap-flanger', 
                                flangerGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      