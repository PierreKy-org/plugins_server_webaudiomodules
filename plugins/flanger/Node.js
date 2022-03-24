
/*
Code generated with Faust version 2.38.16
Compilation options: -lang wasm-ib -cn flanger -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONflanger() {
	return '{"name": "flanger","filename": "flanger.dsp","version": "2.38.16","compile_options": "-lang wasm-ib -cn flanger -es 1 -mcd 16 -single -ftz 2 ","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/1D8C6D1ABB409913D824701DACE2ECE703F1ADA5/web/wap"],"size": 32860,"inputs": 2,"outputs": 2,"meta": [ { "author": "JOS, revised by RM" },{ "basics_lib_bypass2_author": "Julius Smith" },{ "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.5" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "compile_options": "-lang wasm-ib -cn flanger -es 1 -mcd 16 -single -ftz 2 " },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "demos_lib_name": "Faust Demos Library" },{ "demos_lib_version": "0.1" },{ "description": "Flanger effect application." },{ "filename": "flanger.dsp" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_nlf2_author": "Julius O. Smith III" },{ "filters_lib_nlf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_nlf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/demos.lib" },{ "library_path2": "/libraries/basics.lib" },{ "library_path3": "/libraries/routes.lib" },{ "library_path4": "/libraries/oscillators.lib" },{ "library_path5": "/libraries/filters.lib" },{ "library_path6": "/libraries/maths.lib" },{ "library_path7": "/libraries/platform.lib" },{ "library_path8": "/libraries/phaflangers.lib" },{ "library_path9": "/libraries/delays.lib" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "flanger" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_version": "0.3" },{ "phaflangers_lib_name": "Faust Phaser and Flanger Library" },{ "phaflangers_lib_version": "0.1" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "routes_lib_name": "Faust Signal Routing Library" },{ "routes_lib_version": "0.2" },{ "version": "0.0" }],"ui": [ {"type": "vgroup","label": "FLANGER","meta": [{ "tooltip": "Reference: https://ccrma.stanford.edu/~jos/pasp/Flanging.html" }],"items": [ {"type": "hgroup","label": "0x00","meta": [{ "0": "" }],"items": [ {"type": "checkbox","label": "Bypass","address": "/FLANGER/0x00/Bypass","index": 0,"meta": [{ "0": "" },{ "tooltip": "When this is checked, the flanger         has no effect" }]},{"type": "checkbox","label": "Invert Flange Sum","address": "/FLANGER/0x00/Invert Flange Sum","index": 16460,"meta": [{ "1": "" }]},{"type": "hbargraph","label": "Flange LFO","address": "/FLANGER/0x00/Flange LFO","index": 48,"meta": [{ "2": "" },{ "style": "led" },{ "tooltip": "Display sum of flange delays" }],"min": -1.5,"max": 1.5}]},{"type": "hgroup","label": "0x00","meta": [{ "1": "" }],"items": [ {"type": "hslider","label": "Speed","address": "/FLANGER/0x00/Speed","index": 20,"meta": [{ "1": "" },{ "style": "knob" },{ "unit": "Hz" }],"init": 0.5,"min": 0,"max": 10,"step": 0.01},{"type": "hslider","label": "Depth","address": "/FLANGER/0x00/Depth","index": 16464,"meta": [{ "2": "" },{ "style": "knob" }],"init": 1,"min": 0,"max": 1,"step": 0.001},{"type": "hslider","label": "Feedback","address": "/FLANGER/0x00/Feedback","index": 52,"meta": [{ "3": "" },{ "style": "knob" }],"init": 0,"min": -0.999,"max": 0.999,"step": 0.001}]},{"type": "hgroup","label": "Delay Controls","meta": [{ "2": "" }],"items": [ {"type": "hslider","label": "Flange Delay","address": "/FLANGER/Delay Controls/Flange Delay","index": 16448,"meta": [{ "1": "" },{ "style": "knob" },{ "unit": "ms" }],"init": 10,"min": 0,"max": 20,"step": 0.001},{"type": "hslider","label": "Delay Offset","address": "/FLANGER/Delay Controls/Delay Offset","index": 16444,"meta": [{ "2": "" },{ "style": "knob" },{ "unit": "ms" }],"init": 1,"min": 0,"max": 20,"step": 0.001}]},{"type": "hgroup","label": "0x00","meta": [{ "3": "" }],"items": [ {"type": "hslider","label": "Flanger Output Level","address": "/FLANGER/0x00/Flanger Output Level","index": 4,"meta": [{ "unit": "dB" }],"init": 0,"min": -60,"max": 10,"step": 0.1}]}]}]}';
}
function getBase64Codeflanger() { return "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cGFzczJfYXV0aG9yIjogIkp1bGl1cyBTbWl0aCIgfSx7ICJiYXNpY3NfbGliX25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljc19saWJfdmVyc2lvbiI6ICIwLjUiIH0seyAiY29tcGlsYXRpb25fb3B0aW9ucyI6ICItc2luZ2xlIC1zY2FsIC1JIGxpYnJhcmllcy8gLUkgcHJvamVjdC8gLWxhbmcgd2FzbSIgfSx7ICJjb21waWxlX29wdGlvbnMiOiAiLWxhbmcgd2FzbS1pYiAtY24gZmxhbmdlciAtZXMgMSAtbWNkIDE2IC1zaW5nbGUgLWZ0eiAyICIgfSx7ICJkZWxheXNfbGliX25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIgfSx7ICJkZWxheXNfbGliX3ZlcnNpb24iOiAiMC4xIiB9LHsgImRlbW9zX2xpYl9uYW1lIjogIkZhdXN0IERlbW9zIExpYnJhcnkiIH0seyAiZGVtb3NfbGliX3ZlcnNpb24iOiAiMC4xIiB9LHsgImRlc2NyaXB0aW9uIjogIkZsYW5nZXIgZWZmZWN0IGFwcGxpY2F0aW9uLiIgfSx7ICJmaWxlbmFtZSI6ICJmbGFuZ2VyLmRzcCIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczEiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVyc19saWJfbmxmMl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9ubGYyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9ubGYyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl92ZXJzaW9uIjogIjAuMyIgfSx7ICJsaWJyYXJ5X3BhdGgwIjogIi9saWJyYXJpZXMvc3RkZmF1c3QubGliIiB9LHsgImxpYnJhcnlfcGF0aDEiOiAiL2xpYnJhcmllcy9kZW1vcy5saWIiIH0seyAibGlicmFyeV9wYXRoMiI6ICIvbGlicmFyaWVzL2Jhc2ljcy5saWIiIH0seyAibGlicmFyeV9wYXRoMyI6ICIvbGlicmFyaWVzL3JvdXRlcy5saWIiIH0seyAibGlicmFyeV9wYXRoNCI6ICIvbGlicmFyaWVzL29zY2lsbGF0b3JzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg1IjogIi9saWJyYXJpZXMvZmlsdGVycy5saWIiIH0seyAibGlicmFyeV9wYXRoNiI6ICIvbGlicmFyaWVzL21hdGhzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg3IjogIi9saWJyYXJpZXMvcGxhdGZvcm0ubGliIiB9LHsgImxpYnJhcnlfcGF0aDgiOiAiL2xpYnJhcmllcy9waGFmbGFuZ2Vycy5saWIiIH0seyAibGlicmFyeV9wYXRoOSI6ICIvbGlicmFyaWVzL2RlbGF5cy5saWIiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuNSIgfSx7ICJuYW1lIjogImZsYW5nZXIiIH0seyAib3NjaWxsYXRvcnNfbGliX25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IiB9LHsgIm9zY2lsbGF0b3JzX2xpYl92ZXJzaW9uIjogIjAuMyIgfSx7ICJwaGFmbGFuZ2Vyc19saWJfbmFtZSI6ICJGYXVzdCBQaGFzZXIgYW5kIEZsYW5nZXIgTGlicmFyeSIgfSx7ICJwaGFmbGFuZ2Vyc19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAicGxhdGZvcm1fbGliX25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtX2xpYl92ZXJzaW9uIjogIjAuMiIgfSx7ICJyb3V0ZXNfbGliX25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJyb3V0ZXNfbGliX3ZlcnNpb24iOiAiMC4yIiB9LHsgInZlcnNpb24iOiAiMC4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJGTEFOR0VSIiwibWV0YSI6IFt7ICJ0b29sdGlwIjogIlJlZmVyZW5jZTogaHR0cHM6Ly9jY3JtYS5zdGFuZm9yZC5lZHUvfmpvcy9wYXNwL0ZsYW5naW5nLmh0bWwiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIjB4MDAiLCJtZXRhIjogW3sgIjAiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJjaGVja2JveCIsImxhYmVsIjogIkJ5cGFzcyIsImFkZHJlc3MiOiAiL0ZMQU5HRVIvMHgwMC9CeXBhc3MiLCJpbmRleCI6IDAsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAidG9vbHRpcCI6ICJXaGVuIHRoaXMgaXMgY2hlY2tlZCwgdGhlIGZsYW5nZXIgICAgICAgICBoYXMgbm8gZWZmZWN0IiB9XX0seyJ0eXBlIjogImNoZWNrYm94IiwibGFiZWwiOiAiSW52ZXJ0IEZsYW5nZSBTdW0iLCJhZGRyZXNzIjogIi9GTEFOR0VSLzB4MDAvSW52ZXJ0IEZsYW5nZSBTdW0iLCJpbmRleCI6IDE2NDYwLCJtZXRhIjogW3sgIjEiOiAiIiB9XX0seyJ0eXBlIjogImhiYXJncmFwaCIsImxhYmVsIjogIkZsYW5nZSBMRk8iLCJhZGRyZXNzIjogIi9GTEFOR0VSLzB4MDAvRmxhbmdlIExGTyIsImluZGV4IjogNDgsIm1ldGEiOiBbeyAiMiI6ICIiIH0seyAic3R5bGUiOiAibGVkIiB9LHsgInRvb2x0aXAiOiAiRGlzcGxheSBzdW0gb2YgZmxhbmdlIGRlbGF5cyIgfV0sIm1pbiI6IC0xLjUsIm1heCI6IDEuNX1dfSx7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiMHgwMCIsIm1ldGEiOiBbeyAiMSI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJTcGVlZCIsImFkZHJlc3MiOiAiL0ZMQU5HRVIvMHgwMC9TcGVlZCIsImluZGV4IjogMjAsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ1bml0IjogIkh6IiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMTAsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkRlcHRoIiwiYWRkcmVzcyI6ICIvRkxBTkdFUi8weDAwL0RlcHRoIiwiaW5kZXgiOiAxNjQ2NCwibWV0YSI6IFt7ICIyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDEsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJGZWVkYmFjayIsImFkZHJlc3MiOiAiL0ZMQU5HRVIvMHgwMC9GZWVkYmFjayIsImluZGV4IjogNTIsIm1ldGEiOiBbeyAiMyI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLCJtaW4iOiAtMC45OTksIm1heCI6IDAuOTk5LCJzdGVwIjogMC4wMDF9XX0seyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIkRlbGF5IENvbnRyb2xzIiwibWV0YSI6IFt7ICIyIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkZsYW5nZSBEZWxheSIsImFkZHJlc3MiOiAiL0ZMQU5HRVIvRGVsYXkgQ29udHJvbHMvRmxhbmdlIERlbGF5IiwiaW5kZXgiOiAxNjQ0OCwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInVuaXQiOiAibXMiIH1dLCJpbml0IjogMTAsIm1pbiI6IDAsIm1heCI6IDIwLCJzdGVwIjogMC4wMDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiRGVsYXkgT2Zmc2V0IiwiYWRkcmVzcyI6ICIvRkxBTkdFUi9EZWxheSBDb250cm9scy9EZWxheSBPZmZzZXQiLCJpbmRleCI6IDE2NDQ0LCJtZXRhIjogW3sgIjIiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidW5pdCI6ICJtcyIgfV0sImluaXQiOiAxLCJtaW4iOiAwLCJtYXgiOiAyMCwic3RlcCI6IDAuMDAxfV19LHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICIweDAwIiwibWV0YSI6IFt7ICIzIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkZsYW5nZXIgT3V0cHV0IExldmVsIiwiYWRkcmVzcyI6ICIvRkxBTkdFUi8weDAwL0ZsYW5nZXIgT3V0cHV0IExldmVsIiwiaW5kZXgiOiA0LCJtZXRhIjogW3sgInVuaXQiOiAiZEIiIH1dLCJpbml0IjogMCwibWluIjogLTYwLCJtYXgiOiAxMCwic3RlcCI6IDAuMX1dfV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class flangerNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'flanger', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                || item.type === "hslider"
                || item.type === "button"
                || item.type === "checkbox"
                || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({
                                    path: item.address,
                                    min: parseFloat(item.min),
                                    max: parseFloat(item.max)
                                });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) { }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     * Destroy the node, deallocate resources.
     */
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, flangerNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, flangerNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class flanger {

    static fWorkletProcessors;

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];

        this.fWorkletProcessors = this.fWorkletProcessors || [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,

                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                    _isnanf: Number.isNaN,
                    _isinff: function (x) { return !isFinite(x); },
                    _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    _isnan: Number.isNaN,
                    _isinf: function (x) { return !isFinite(x); },
                    _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "flanger.wasm" : (this.baseURL + "/flanger.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
            let json = this.heap2Str(HEAPU8);
            let json_object = JSON.parse(json);
            let options = { wasm_module: dspModule, json: json };

            if (this.fWorkletProcessors.indexOf(name) === -1) {
                try {
                    let re = /JSON_STR/g;
                    let flangerProcessorString1 = flangerProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([flangerProcessorString1], { type: 'text/javascript' }));
                    await this.context.audioWorklet.addModule(real_url);
                    // Keep the DSP name
                    console.log("Keep the DSP name");
                    this.fWorkletProcessors.push(name);
                } catch (e) {
                    console.error(e);
                    console.error("Faust " + this.name + " cannot be loaded or compiled");
                    return null;
                }
            }
            this.node = new flangerNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from flanger-processor was detected.'); }
            return (this.node);
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createflangerGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createflangerGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

// Template string for AudioWorkletProcessor

let flangerProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class flangerProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                flangerProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                flangerProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                flangerProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                flangerProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            flangerProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, flangerProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.flanger_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.flanger_instance.exports;
            this.HEAP = this.flanger_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                flangerProcessor.parse_ui(this.json_object.ui, this, flangerProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('flanger', flangerProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "flanger";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.flanger = flanger;
    window.Faustflanger = flanger;
    window[dspName] = flanger;
} else {
    module.exports = { flanger };
}
