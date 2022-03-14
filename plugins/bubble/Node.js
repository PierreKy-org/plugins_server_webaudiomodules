
/*
Code generated with Faust version 2.38.16
Compilation options: -lang wasm-ib -cn bubble -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONbubble() {
	return '{"name": "bubble","filename": "bubble.dsp","version": "2.38.16","compile_options": "-lang wasm-ib -cn bubble -es 1 -mcd 16 -single -ftz 2 ","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/2346E70C8A9D37984675412A73FAD4F39882417B/web/wap"],"size": 848356,"inputs": 0,"outputs": 2,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.5" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "compile_options": "-lang wasm-ib -cn bubble -es 1 -mcd 16 -single -ftz 2 " },{ "copyright": "(c) 2017: Yann Orlarey, GRAME" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "demos_lib_name": "Faust Demos Library" },{ "demos_lib_version": "0.1" },{ "description": "Production of a water drop bubble sound." },{ "filename": "bubble.dsp" },{ "filters_lib_allpass_comb_author": "Julius O. Smith III" },{ "filters_lib_allpass_comb_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_allpass_comb_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "MIT-style STK-4.3 license" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/demos.lib" },{ "library_path2": "/libraries/reverbs.lib" },{ "library_path3": "/libraries/maths.lib" },{ "library_path4": "/libraries/platform.lib" },{ "library_path5": "/libraries/filters.lib" },{ "library_path6": "/libraries/delays.lib" },{ "library_path7": "/libraries/oscillators.lib" },{ "library_path8": "/libraries/basics.lib" },{ "library_path9": "/libraries/signals.lib" },{ "license": "MIT" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "bubble" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_version": "0.3" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "reverbs_lib_name": "Faust Reverb Library" },{ "reverbs_lib_version": "0.2" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.1" }],"ui": [ {"type": "vgroup","label": "bubble","items": [ {"type": "hgroup","label": "Freeverb","items": [ {"type": "vgroup","label": "0x00","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Damp","address": "/bubble/Freeverb/0x00/Damp","index": 262160,"meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "Somehow control the         density of the reverb." }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "RoomSize","address": "/bubble/Freeverb/0x00/RoomSize","index": 262152,"meta": [{ "1": "" },{ "style": "knob" },{ "tooltip": "The room size         between 0 and 1 with 1 for the largest room." }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "Stereo Spread","address": "/bubble/Freeverb/0x00/Stereo Spread","index": 586040,"meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Spatial         spread between 0 and 1 with 1 for maximum spread." }],"init": 0.5,"min": 0,"max": 1,"step": 0.01}]},{"type": "vslider","label": "Wet","address": "/bubble/Freeverb/Wet","index": 262172,"meta": [{ "1": "" },{ "tooltip": "The amount of reverb applied to the signal         between 0 and 1 with 1 for the maximum amount of reverb." }],"init": 0.3333,"min": 0,"max": 1,"step": 0.025}]},{"type": "vgroup","label": "bubble","items": [ {"type": "hslider","label": "freq","address": "/bubble/bubble/freq","index": 262180,"init": 600,"min": 150,"max": 2000,"step": 1}]},{"type": "button","label": "drop","address": "/bubble/drop","index": 262184}]}]}';
}
function getBase64Codebubble() { return "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bGF0aW9uX29wdGlvbnMiOiAiLXNpbmdsZSAtc2NhbCAtSSBsaWJyYXJpZXMvIC1JIHByb2plY3QvIC1sYW5nIHdhc20iIH0seyAiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLWNuIGJ1YmJsZSAtZXMgMSAtbWNkIDE2IC1zaW5nbGUgLWZ0eiAyICIgfSx7ICJjb3B5cmlnaHQiOiAiKGMpIDIwMTc6IFlhbm4gT3JsYXJleSwgR1JBTUUiIH0seyAiZGVsYXlzX2xpYl9uYW1lIjogIkZhdXN0IERlbGF5IExpYnJhcnkiIH0seyAiZGVsYXlzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJkZW1vc19saWJfbmFtZSI6ICJGYXVzdCBEZW1vcyBMaWJyYXJ5IiB9LHsgImRlbW9zX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJkZXNjcmlwdGlvbiI6ICJQcm9kdWN0aW9uIG9mIGEgd2F0ZXIgZHJvcCBidWJibGUgc291bmQuIiB9LHsgImZpbGVuYW1lIjogImJ1YmJsZS5kc3AiIH0seyAiZmlsdGVyc19saWJfYWxscGFzc19jb21iX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2FsbHBhc3NfY29tYl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfYWxscGFzc19jb21iX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczEiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJmaWx0ZXJzX2xpYl92ZXJzaW9uIjogIjAuMyIgfSx7ICJsaWJyYXJ5X3BhdGgwIjogIi9saWJyYXJpZXMvc3RkZmF1c3QubGliIiB9LHsgImxpYnJhcnlfcGF0aDEiOiAiL2xpYnJhcmllcy9kZW1vcy5saWIiIH0seyAibGlicmFyeV9wYXRoMiI6ICIvbGlicmFyaWVzL3JldmVyYnMubGliIiB9LHsgImxpYnJhcnlfcGF0aDMiOiAiL2xpYnJhcmllcy9tYXRocy5saWIiIH0seyAibGlicmFyeV9wYXRoNCI6ICIvbGlicmFyaWVzL3BsYXRmb3JtLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg1IjogIi9saWJyYXJpZXMvZmlsdGVycy5saWIiIH0seyAibGlicmFyeV9wYXRoNiI6ICIvbGlicmFyaWVzL2RlbGF5cy5saWIiIH0seyAibGlicmFyeV9wYXRoNyI6ICIvbGlicmFyaWVzL29zY2lsbGF0b3JzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg4IjogIi9saWJyYXJpZXMvYmFzaWNzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg5IjogIi9saWJyYXJpZXMvc2lnbmFscy5saWIiIH0seyAibGljZW5zZSI6ICJNSVQiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuNSIgfSx7ICJuYW1lIjogImJ1YmJsZSIgfSx7ICJvc2NpbGxhdG9yc19saWJfbmFtZSI6ICJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkiIH0seyAib3NjaWxsYXRvcnNfbGliX3ZlcnNpb24iOiAiMC4zIiB9LHsgInBsYXRmb3JtX2xpYl9uYW1lIjogIkdlbmVyaWMgUGxhdGZvcm0gTGlicmFyeSIgfSx7ICJwbGF0Zm9ybV9saWJfdmVyc2lvbiI6ICIwLjIiIH0seyAicmV2ZXJic19saWJfbmFtZSI6ICJGYXVzdCBSZXZlcmIgTGlicmFyeSIgfSx7ICJyZXZlcmJzX2xpYl92ZXJzaW9uIjogIjAuMiIgfSx7ICJzaWduYWxzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFsc19saWJfdmVyc2lvbiI6ICIwLjEiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImJ1YmJsZSIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiRnJlZXZlcmIiLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIjB4MDAiLCJtZXRhIjogW3sgIjAiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiRGFtcCIsImFkZHJlc3MiOiAiL2J1YmJsZS9GcmVldmVyYi8weDAwL0RhbXAiLCJpbmRleCI6IDI2MjE2MCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiU29tZWhvdyBjb250cm9sIHRoZSAgICAgICAgIGRlbnNpdHkgb2YgdGhlIHJldmVyYi4iIH1dLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMjV9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiUm9vbVNpemUiLCJhZGRyZXNzIjogIi9idWJibGUvRnJlZXZlcmIvMHgwMC9Sb29tU2l6ZSIsImluZGV4IjogMjYyMTUyLCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJUaGUgcm9vbSBzaXplICAgICAgICAgYmV0d2VlbiAwIGFuZCAxIHdpdGggMSBmb3IgdGhlIGxhcmdlc3Qgcm9vbS4iIH1dLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMjV9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiU3RlcmVvIFNwcmVhZCIsImFkZHJlc3MiOiAiL2J1YmJsZS9GcmVldmVyYi8weDAwL1N0ZXJlbyBTcHJlYWQiLCJpbmRleCI6IDU4NjA0MCwibWV0YSI6IFt7ICIyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiU3BhdGlhbCAgICAgICAgIHNwcmVhZCBiZXR3ZWVuIDAgYW5kIDEgd2l0aCAxIGZvciBtYXhpbXVtIHNwcmVhZC4iIH1dLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX1dfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIldldCIsImFkZHJlc3MiOiAiL2J1YmJsZS9GcmVldmVyYi9XZXQiLCJpbmRleCI6IDI2MjE3MiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJ0b29sdGlwIjogIlRoZSBhbW91bnQgb2YgcmV2ZXJiIGFwcGxpZWQgdG8gdGhlIHNpZ25hbCAgICAgICAgIGJldHdlZW4gMCBhbmQgMSB3aXRoIDEgZm9yIHRoZSBtYXhpbXVtIGFtb3VudCBvZiByZXZlcmIuIiB9XSwiaW5pdCI6IDAuMzMzMywibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDI1fV19LHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJidWJibGUiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJmcmVxIiwiYWRkcmVzcyI6ICIvYnViYmxlL2J1YmJsZS9mcmVxIiwiaW5kZXgiOiAyNjIxODAsImluaXQiOiA2MDAsIm1pbiI6IDE1MCwibWF4IjogMjAwMCwic3RlcCI6IDF9XX0seyJ0eXBlIjogImJ1dHRvbiIsImxhYmVsIjogImRyb3AiLCJhZGRyZXNzIjogIi9idWJibGUvZHJvcCIsImluZGV4IjogMjYyMTg0fV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class bubbleNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'bubble', options);

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
                this.setParamValue(path, bubbleNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            this.setParamValue(pw.path, bubbleNode.remap(wheel, 0, 16383, pw.min, pw.max));
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
class bubble {

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

            let real_url = (this.baseURL === "") ? "bubble.wasm" : (this.baseURL + "/bubble.wasm");
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
                    let bubbleProcessorString1 = bubbleProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([bubbleProcessorString1], { type: 'text/javascript' }));
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
            this.node = new bubbleNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from bubble-processor was detected.'); }
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
                        var element = createbubbleGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createbubbleGUI(this.node);
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

let bubbleProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class bubbleProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                bubbleProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                bubbleProcessor.parse_items(group.items, obj, callback);
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
                bubbleProcessor.parse_items(item.items, obj, callback);
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
                bubbleProcessor.parse_items(item.items, obj, callback);
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
            bubbleProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, bubbleProcessor.parse_item1);
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
            
            this.bubble_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.bubble_instance.exports;
            this.HEAP = this.bubble_instance.exports.memory.buffer;
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
                bubbleProcessor.parse_ui(this.json_object.ui, this, bubbleProcessor.parse_item2);
                
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
        registerProcessor('bubble', bubbleProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "bubble";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.bubble = bubble;
    window.Faustbubble = bubble;
    window[dspName] = bubble;
} else {
    module.exports = { bubble };
}
