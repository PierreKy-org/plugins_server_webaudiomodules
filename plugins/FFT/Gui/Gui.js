import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class FFTGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) none repeat scroll 0% 0% / contain padding-box border-box;border:1px solid rgb(73, 73, 73);bottom:-909px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:1232px;hyphens:manual;inset:59px 46px -909px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:46px;rx:auto;ry:auto;speak:normal;stroke:none;top:59px;transform:none;transition:all 0s ease 0s;visibility:visible;widows:2;width:1246px;x:0px;y:0px;zoom:1;};</style>
<div id="FFT" class="resize-drag my-pedal" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 1246px; position: relative; top: 0px; left: 0px; height: 1232px;"><div id="FFT" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 1px; width: 1238px; height: 996px;"></div><div id="FFT" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 1108.5px; left: 190.75px; width: 290.5px; height: 116.5px;"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 14px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17a48d0" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17a48d0" index="200" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 318px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17af340" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17af340" index="212" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 622px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17b6f18" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17b6f18" index="224" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 926px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17be570" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17be570" index="236" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 261px; left: 14px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17c3920" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17c3920" index="248" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 261px; left: 318px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17cb558" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17cb558" index="260" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 261px; left: 622px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17cfd00" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17cfd00" index="272" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 261px; left: 926px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17d7978" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17d7978" index="284" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 453px; left: 14px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17db7d0" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17db7d0" index="296" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 453px; left: 318px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17e0818" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17e0818" index="308" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 453px; left: 622px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17e5430" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17e5430" index="320" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 453px; left: 926px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17ea678" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17ea678" index="332" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 645px; left: 14px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17ede30" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17ede30" index="344" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 645px; left: 318px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17f2f78" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17f2f78" index="356" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 645px; left: 622px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17f7d30" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17f7d30" index="368" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 645px; left: 926px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x17fcf78" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x17fcf78" index="380" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 837px; left: 470px; width: 302px; height: 190px;"><canvas id="undefined" type="vbargraph" label="0x18003e0" address="/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x18003e0" index="392" meta="[object Object],[object Object],[object Object]" min="-50" max="10" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 1144.5px; left: 194.75px; width: 152.5px; height: 78.5px;"><webaudio-knob id="/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level Averaging Time" src="./img/knobs/slider_green.png" sprites="100" min="1" max="10000" step="1" width="128" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 1144.5px; left: 349.25px; width: 130px; height: 78.5px;"><webaudio-knob id="/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level dB Offset" src="./img/knobs/slider_green.png" sprites="100" min="-50" max="100" step="1" width="128" height="40" style="touch-action: none; display: block;"><style>

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
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/slider_green.png&quot;); background-size: 128px 4040px; outline: none; width: 128px; height: 40px; background-position: 0px -1320px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 1144.5px; left: 485.25px; width: 130px; height: 78.5px;"><webaudio-knob id="/FFT/FFT Bin Number" src="./img/knobs/slider_green.png" sprites="100" min="0" max="16" step="0.001" width="128" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 1033px; left: 617.25px; width: 302px; height: 190px;"><canvas id="/FFT/Measured FFT Bin Number" type="hbargraph" label="Measured FFT Bin Number" address="/FFT/Measured FFT Bin Number" index="24" meta="[object Object]" min="0" max="16" style="touch-action: none;"></canvas></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 1144.5px; left: 921.25px; width: 130px; height: 78.5px;"><webaudio-knob id="/FFT/Amplitude" src="./img/knobs/slider_green.png" sprites="100" min="0" max="1" step="0.001" width="128" height="40" style="touch-action: none; display: block;"><style>

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
</webaudio-knob></div><label for="FFT" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 1242px; left: 2px; top: 5px;" class="drag" contenteditable="false">FFT</label><label for="FFT SPECTRUM ANALYZER, 32 bands" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 1234px; left: 6px; top: 41px;" class="drag" contenteditable="false">FFT SPECTRUM ANALYZER, 32 bands</label><label for="FFT SPECTRUM ANALYZER CONTROLS" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 286.5px; left: 195.75px; top: 1116.5px;" class="drag" contenteditable="false">FFT SPECTRUM ANALYZER CONTROLS</label><label for="0x17a48d0" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 17px; top: 231px;" class="drag" contenteditable="false">0x17a48d0</label><label for="0x17af340" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 321px; top: 231px;" class="drag" contenteditable="false">0x17af340</label><label for="0x17b6f18" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 625px; top: 231px;" class="drag" contenteditable="false">0x17b6f18</label><label for="0x17be570" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 929px; top: 231px;" class="drag" contenteditable="false">0x17be570</label><label for="0x17c3920" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 17px; top: 423px;" class="drag" contenteditable="false">0x17c3920</label><label for="0x17cb558" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 321px; top: 423px;" class="drag" contenteditable="false">0x17cb558</label><label for="0x17cfd00" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 625px; top: 423px;" class="drag" contenteditable="false">0x17cfd00</label><label for="0x17d7978" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 929px; top: 423px;" class="drag" contenteditable="false">0x17d7978</label><label for="0x17db7d0" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 17px; top: 615px;" class="drag" contenteditable="false">0x17db7d0</label><label for="0x17e0818" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 321px; top: 615px;" class="drag" contenteditable="false">0x17e0818</label><label for="0x17e5430" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 625px; top: 615px;" class="drag" contenteditable="false">0x17e5430</label><label for="0x17ea678" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 929px; top: 615px;" class="drag" contenteditable="false">0x17ea678</label><label for="0x17ede30" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 17px; top: 807px;" class="drag" contenteditable="false">0x17ede30</label><label for="0x17f2f78" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 321px; top: 807px;" class="drag" contenteditable="false">0x17f2f78</label><label for="0x17f7d30" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 625px; top: 807px;" class="drag" contenteditable="false">0x17f7d30</label><label for="0x17fcf78" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 929px; top: 807px;" class="drag" contenteditable="false">0x17fcf78</label><label for="0x18003e0" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 473px; top: 999px;" class="drag" contenteditable="false">0x18003e0</label><label for="Level Averaging Time" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 150.5px; left: 197.75px; top: 1195px;" class="drag" contenteditable="false">Level Averaging Time</label><label for="Level dB Offset" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 352.25px; top: 1195px;" class="drag" contenteditable="false">Level dB Offset</label><label for="FFT Bin Number" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 488.25px; top: 1195px;" class="drag" contenteditable="false">FFT Bin Number</label><label for="Measured FFT Bin Number" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 300px; left: 620.25px; top: 1195px;" class="drag" contenteditable="false">Measured FFT Bin Number</label><label for="Amplitude" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 924.25px; top: 1195px;" class="drag" contenteditable="false">Amplitude</label></div>`;
  
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
        this._root.getElementById('/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level Averaging Time').value = this._plug.audioNode.getParamValue('/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level Averaging Time');
        

        this._root.getElementById('/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level dB Offset').value = this._plug.audioNode.getParamValue('/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level dB Offset');
        

        this._root.getElementById('/FFT/FFT Bin Number').value = this._plug.audioNode.getParamValue('/FFT/FFT Bin Number');
        

        this._root.getElementById('/FFT/Amplitude').value = this._plug.audioNode.getParamValue('/FFT/Amplitude');
        
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
                 this._root.getElementById("/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level Averaging Time").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level Averaging Time", e.target.value));
this._root.getElementById("/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level dB Offset").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level dB Offset", e.target.value));
this._root.getElementById("/FFT/FFT Bin Number").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FFT/FFT Bin Number", e.target.value));
this._root.getElementById("/FFT/Amplitude").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/FFT/Amplitude", e.target.value));

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
          customElements.define('wap-fft', 
                                FFTGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      