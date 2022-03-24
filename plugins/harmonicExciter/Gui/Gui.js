import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class harmonicExciterGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) none repeat scroll 0% 0% / contain padding-box border-box;border:1px solid rgb(73, 73, 73);bottom:-227.5px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:550.5px;hyphens:manual;inset:59px 571px -227.5px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:571px;rx:auto;ry:auto;speak:normal;stroke:none;top:59px;transform:none;transition:all 0s ease 0s;visibility:visible;widows:2;width:721px;x:0px;y:0px;zoom:1;};</style>
<div id="harmonicExciter" class="resize-drag my-pedal" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 721px; position: relative; top: 0px; left: 0px; height: 550.5px;"><div id="harmonicExciter" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; width: 376px; position: absolute; top: 33px; left: 41.3594px; height: 510.5px;"></div><div id="harmonicExciter" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 69px; left: 45.3594px; width: 368px; height: 310px;"></div><div id="harmonicExciter" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 383px; left: 62.7813px; width: 333.156px; height: 156.5px;"></div><div id="harmonicExciter" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 419px; left: 66.7813px; width: 153.234px; height: 116.5px;"></div><div id="harmonicExciter" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 419px; left: 224.016px; width: 167.922px; height: 116.5px;"></div><div id="harmonicExciter" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 419px; left: 421.359px; width: 252.266px; height: 116.5px;"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 105px; left: 197.359px; width: 66px; height: 80px;"><webaudio-switch id="/harmonicExciter/COMPRESSOR/0x00/Bypass" src="./img/switches/switch_1.png" sprites="100" width="64" height="40" style="touch-action: none;"><style>

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
</webaudio-switch></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 187px; left: 79.3594px; width: 302px; height: 190px;"><canvas id="/harmonicExciter/COMPRESSOR/0x00/Compressor Gain" type="hbargraph" label="Compressor Gain" address="/harmonicExciter/COMPRESSOR/0x00/Compressor Gain" index="104" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 455px; left: 86.4531px; width: 42px; height: 78.5px;"><webaudio-knob id="/harmonicExciter/COMPRESSOR/0x00/Compression Control/Ratio" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="1" max="20" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 455px; left: 130.453px; width: 71.8906px; height: 78.5px;"><webaudio-knob id="/harmonicExciter/COMPRESSOR/0x00/Compression Control/Threshold" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="-100" max="10" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px -3600px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 455px; left: 257.141px; width: 46.6563px; height: 78.5px;"><webaudio-knob id="/harmonicExciter/COMPRESSOR/0x00/Compression Response/Attack" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="500" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 455px; left: 305.797px; width: 55.0156px; height: 78.5px;"><webaudio-knob id="/harmonicExciter/COMPRESSOR/0x00/Compression Response/Release" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="1000" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 455px; left: 425.359px; width: 122.938px; height: 78.5px;"><webaudio-knob id="/harmonicExciter/EXCITER/Cutoff Frequency" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="1000" max="10000" step="100" width="40" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 455px; left: 550.297px; width: 77.3281px; height: 78.5px;"><webaudio-knob id="/harmonicExciter/EXCITER/Harmonics" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="1.19209e-7" max="200" step="1" width="40" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 455px; left: 629.625px; width: 42px; height: 78.5px;"><webaudio-knob id="/harmonicExciter/EXCITER/Mix" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="1" step="0.01" width="40" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><label for="harmonicExciter" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 717px; left: 2px; top: 5px;" class="drag" contenteditable="false">harmonicExciter</label><label for="COMPRESSOR" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 372px; left: 46.3594px; top: 41px;" class="drag" contenteditable="false">COMPRESSOR</label><label for="0x00" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 364px; left: 50.3594px; top: 77px;" class="drag" contenteditable="false">0x00</label><label for="0x00" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 329.156px; left: 67.7813px; top: 391px;" class="drag" contenteditable="false">0x00</label><label for="Compression Control" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 149.234px; left: 71.7813px; top: 427px;" class="drag" contenteditable="false">Compression Control</label><label for="Compression Response" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 163.922px; left: 229.016px; top: 427px;" class="drag" contenteditable="false">Compression Response</label><label for="EXCITER" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 248.266px; left: 426.359px; top: 427px;" class="drag" contenteditable="false">EXCITER</label><label for="Bypass" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 64px; left: 200.359px; top: 157px;" class="drag" contenteditable="false">Bypass</label><label for="Compressor Gain" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 82.3594px; top: 349px;" class="drag" contenteditable="false">Compressor Gain</label><label for="Ratio" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 89.4531px; top: 505.5px;" class="drag" contenteditable="false">Ratio</label><label for="Threshold" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 69.8906px; left: 133.453px; top: 505.5px;" class="drag" contenteditable="false">Threshold</label><label for="Attack" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 44.6563px; left: 260.141px; top: 505.5px;" class="drag" contenteditable="false">Attack</label><label for="Release" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 53.0156px; left: 308.797px; top: 505.5px;" class="drag" contenteditable="false">Release</label><label for="Cutoff Frequency" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 120.938px; left: 428.359px; top: 505.5px;" class="drag" contenteditable="false">Cutoff Frequency</label><label for="Harmonics" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 75.3281px; left: 553.297px; top: 505.5px;" class="drag" contenteditable="false">Harmonics</label><label for="Mix" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 632.625px; top: 505.5px;" class="drag" contenteditable="false">Mix</label></div>`;
  
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
        this._root.getElementById('/harmonicExciter/COMPRESSOR/0x00/Compression Control/Ratio').value = this._plug.audioNode.getParamValue('/harmonicExciter/COMPRESSOR/0x00/Compression Control/Ratio');
        

        this._root.getElementById('/harmonicExciter/COMPRESSOR/0x00/Compression Control/Threshold').value = this._plug.audioNode.getParamValue('/harmonicExciter/COMPRESSOR/0x00/Compression Control/Threshold');
        

        this._root.getElementById('/harmonicExciter/COMPRESSOR/0x00/Compression Response/Attack').value = this._plug.audioNode.getParamValue('/harmonicExciter/COMPRESSOR/0x00/Compression Response/Attack');
        

        this._root.getElementById('/harmonicExciter/COMPRESSOR/0x00/Compression Response/Release').value = this._plug.audioNode.getParamValue('/harmonicExciter/COMPRESSOR/0x00/Compression Response/Release');
        

        this._root.getElementById('/harmonicExciter/EXCITER/Cutoff Frequency').value = this._plug.audioNode.getParamValue('/harmonicExciter/EXCITER/Cutoff Frequency');
        

        this._root.getElementById('/harmonicExciter/EXCITER/Harmonics').value = this._plug.audioNode.getParamValue('/harmonicExciter/EXCITER/Harmonics');
        

        this._root.getElementById('/harmonicExciter/EXCITER/Mix').value = this._plug.audioNode.getParamValue('/harmonicExciter/EXCITER/Mix');
        

          this._root.getElementById('/harmonicExciter/COMPRESSOR/0x00/Bypass').value = 1 - this._plug.audioNode.getParamValue('/harmonicExciter/COMPRESSOR/0x00/Bypass');
         
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
                 this._root.getElementById("/harmonicExciter/COMPRESSOR/0x00/Compression Control/Ratio").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/COMPRESSOR/0x00/Compression Control/Ratio", e.target.value));
this._root.getElementById("/harmonicExciter/COMPRESSOR/0x00/Compression Control/Threshold").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/COMPRESSOR/0x00/Compression Control/Threshold", e.target.value));
this._root.getElementById("/harmonicExciter/COMPRESSOR/0x00/Compression Response/Attack").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/COMPRESSOR/0x00/Compression Response/Attack", e.target.value));
this._root.getElementById("/harmonicExciter/COMPRESSOR/0x00/Compression Response/Release").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/COMPRESSOR/0x00/Compression Response/Release", e.target.value));
this._root.getElementById("/harmonicExciter/EXCITER/Cutoff Frequency").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/EXCITER/Cutoff Frequency", e.target.value));
this._root.getElementById("/harmonicExciter/EXCITER/Harmonics").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/EXCITER/Harmonics", e.target.value));
this._root.getElementById("/harmonicExciter/EXCITER/Mix").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/EXCITER/Mix", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 this._root.getElementById("/harmonicExciter/COMPRESSOR/0x00/Bypass").addEventListener("change", (e) =>this._plug.audioNode.setParamValue("/harmonicExciter/COMPRESSOR/0x00/Bypass", 1 - e.target.value));

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
          customElements.define('wap-harmonicexciter', 
                                harmonicExciterGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      