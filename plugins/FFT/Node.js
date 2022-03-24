
/*
Code generated with Faust version 2.38.16
Compilation options: -lang wasm-ib -cn FFT -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONFFT() {
	return '{"name": "FFT","filename": "FFT.dsp","version": "2.38.16","compile_options": "-lang wasm-ib -cn FFT -es 1 -mcd 16 -single -ftz 2 ","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/6AA003E9BFB704056D1A316860AC2A69E461B858/web/wap"],"size": 396,"inputs": 0,"outputs": 2,"meta": [ { "analyzers_lib_name": "Faust Analyzer Library" },{ "analyzers_lib_version": "0.1" },{ "author": "JOS" },{ "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.5" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "compile_options": "-lang wasm-ib -cn FFT -es 1 -mcd 16 -single -ftz 2 " },{ "demos_lib_name": "Faust Demos Library" },{ "demos_lib_version": "0.1" },{ "filename": "FFT.dsp" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_nlf2_author": "Julius O. Smith III" },{ "filters_lib_nlf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_nlf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/oscillators.lib" },{ "library_path2": "/libraries/maths.lib" },{ "library_path3": "/libraries/platform.lib" },{ "library_path4": "/libraries/filters.lib" },{ "library_path5": "/libraries/demos.lib" },{ "library_path6": "/libraries/analyzers.lib" },{ "library_path7": "/libraries/signals.lib" },{ "library_path8": "/libraries/basics.lib" },{ "license": "STK-4.3" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "FFT" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_version": "0.3" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.1" }],"ui": [ {"type": "vgroup","label": "FFT","items": [ {"type": "hgroup","label": "FFT SPECTRUM ANALYZER, 32 bands","meta": [{ "0": "" },{ "tooltip": "fft_spectral_level in Faust\'s analyzers.lib" }],"items": [ {"type": "vbargraph","label": "0x56377d8dd4f0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d8dd4f0","index": 200,"meta": [{ "0": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d8f0fb0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d8f0fb0","index": 212,"meta": [{ "1": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d8ff990","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d8ff990","index": 224,"meta": [{ "2": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d90d4f0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d90d4f0","index": 236,"meta": [{ "3": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d917920","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d917920","index": 248,"meta": [{ "4": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d925f60","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d925f60","index": 260,"meta": [{ "5": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d92e5a0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d92e5a0","index": 272,"meta": [{ "6": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d93cc40","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d93cc40","index": 284,"meta": [{ "7": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d944eb0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d944eb0","index": 296,"meta": [{ "8": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d94e4b0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d94e4b0","index": 308,"meta": [{ "9": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d957330","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d957330","index": 320,"meta": [{ "10": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d960ce0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d960ce0","index": 332,"meta": [{ "11": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d967640","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d967640","index": 344,"meta": [{ "12": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d970e30","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d970e30","index": 356,"meta": [{ "13": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d979fb0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d979fb0","index": 368,"meta": [{ "14": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d983980","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d983980","index": 380,"meta": [{ "15": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10},{"type": "vbargraph","label": "0x56377d98b9a0","address": "/FFT/FFT SPECTRUM ANALYZER, 32 bands/0x56377d98b9a0","index": 392,"meta": [{ "16": "" },{ "tooltip": "FFT Spectral Band Level in dB" },{ "unit": "dB" }],"min": -50,"max": 10}]},{"type": "hgroup","label": "FFT SPECTRUM ANALYZER CONTROLS","meta": [{ "1": "" }],"items": [ {"type": "hslider","label": "Level Averaging Time","address": "/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level Averaging Time","index": 4,"meta": [{ "0": "" },{ "scale": "log" },{ "tooltip": "band-level averaging time in milliseconds" },{ "unit": "ms" }],"init": 100,"min": 1,"max": 10000,"step": 1},{"type": "hslider","label": "Level dB Offset","address": "/FFT/FFT SPECTRUM ANALYZER CONTROLS/Level dB Offset","index": 0,"meta": [{ "1": "" },{ "tooltip": "Level offset in decibels" },{ "unit": "dB" }],"init": 50,"min": -50,"max": 100,"step": 1}]},{"type": "hslider","label": "FFT Bin Number","address": "/FFT/FFT Bin Number","index": 20,"meta": [{ "2": "" }],"init": 8,"min": 0,"max": 16,"step": 0.001},{"type": "hbargraph","label": "Measured FFT Bin Number","address": "/FFT/Measured FFT Bin Number","index": 24,"meta": [{ "3": "" }],"min": 0,"max": 16},{"type": "hslider","label": "Amplitude","address": "/FFT/Amplitude","index": 16,"meta": [{ "4": "" }],"init": 0.1,"min": 0,"max": 1,"step": 0.001}]}]}';
}
function getBase64CodeFFT() { return "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OiAiLXNpbmdsZSAtc2NhbCAtSSBsaWJyYXJpZXMvIC1JIHByb2plY3QvIC1sYW5nIHdhc20iIH0seyAiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLWNuIEZGVCAtZXMgMSAtbWNkIDE2IC1zaW5nbGUgLWZ0eiAyICIgfSx7ICJkZW1vc19saWJfbmFtZSI6ICJGYXVzdCBEZW1vcyBMaWJyYXJ5IiB9LHsgImRlbW9zX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJmaWxlbmFtZSI6ICJGRlQuZHNwIiB9LHsgImZpbHRlcnNfbGliX2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJmaWx0ZXJzX2xpYl9ubGYyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX25sZjJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX25sZjJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX3ZlcnNpb24iOiAiMC4zIiB9LHsgImxpYnJhcnlfcGF0aDAiOiAiL2xpYnJhcmllcy9zdGRmYXVzdC5saWIiIH0seyAibGlicmFyeV9wYXRoMSI6ICIvbGlicmFyaWVzL29zY2lsbGF0b3JzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGgyIjogIi9saWJyYXJpZXMvbWF0aHMubGliIiB9LHsgImxpYnJhcnlfcGF0aDMiOiAiL2xpYnJhcmllcy9wbGF0Zm9ybS5saWIiIH0seyAibGlicmFyeV9wYXRoNCI6ICIvbGlicmFyaWVzL2ZpbHRlcnMubGliIiB9LHsgImxpYnJhcnlfcGF0aDUiOiAiL2xpYnJhcmllcy9kZW1vcy5saWIiIH0seyAibGlicmFyeV9wYXRoNiI6ICIvbGlicmFyaWVzL2FuYWx5emVycy5saWIiIH0seyAibGlicmFyeV9wYXRoNyI6ICIvbGlicmFyaWVzL3NpZ25hbHMubGliIiB9LHsgImxpYnJhcnlfcGF0aDgiOiAiL2xpYnJhcmllcy9iYXNpY3MubGliIiB9LHsgImxpY2Vuc2UiOiAiU1RLLTQuMyIgfSx7ICJtYXRoc19saWJfYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRoc19saWJfbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHNfbGliX3ZlcnNpb24iOiAiMi41IiB9LHsgIm5hbWUiOiAiRkZUIiB9LHsgIm9zY2lsbGF0b3JzX2xpYl9uYW1lIjogIkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSIgfSx7ICJvc2NpbGxhdG9yc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAicGxhdGZvcm1fbGliX25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtX2xpYl92ZXJzaW9uIjogIjAuMiIgfSx7ICJzaWduYWxzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFsc19saWJfdmVyc2lvbiI6ICIwLjEiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIkZGVCIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiRkZUIFNQRUNUUlVNIEFOQUxZWkVSLCAzMiBiYW5kcyIsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAidG9vbHRpcCI6ICJmZnRfc3BlY3RyYWxfbGV2ZWwgaW4gRmF1c3QncyBhbmFseXplcnMubGliIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2YmFyZ3JhcGgiLCJsYWJlbCI6ICIweDU2Mzc3ZDhkZDRmMCIsImFkZHJlc3MiOiAiL0ZGVC9GRlQgU1BFQ1RSVU0gQU5BTFlaRVIsIDMyIGJhbmRzLzB4NTYzNzdkOGRkNGYwIiwiaW5kZXgiOiAyMDAsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOGYwZmIwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q4ZjBmYjAiLCJpbmRleCI6IDIxMiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJ0b29sdGlwIjogIkZGVCBTcGVjdHJhbCBCYW5kIExldmVsIGluIGRCIiB9LHsgInVuaXQiOiAiZEIiIH1dLCJtaW4iOiAtNTAsIm1heCI6IDEwfSx7InR5cGUiOiAidmJhcmdyYXBoIiwibGFiZWwiOiAiMHg1NjM3N2Q4ZmY5OTAiLCJhZGRyZXNzIjogIi9GRlQvRkZUIFNQRUNUUlVNIEFOQUxZWkVSLCAzMiBiYW5kcy8weDU2Mzc3ZDhmZjk5MCIsImluZGV4IjogMjI0LCJtZXRhIjogW3sgIjIiOiAiIiB9LHsgInRvb2x0aXAiOiAiRkZUIFNwZWN0cmFsIEJhbmQgTGV2ZWwgaW4gZEIiIH0seyAidW5pdCI6ICJkQiIgfV0sIm1pbiI6IC01MCwibWF4IjogMTB9LHsidHlwZSI6ICJ2YmFyZ3JhcGgiLCJsYWJlbCI6ICIweDU2Mzc3ZDkwZDRmMCIsImFkZHJlc3MiOiAiL0ZGVC9GRlQgU1BFQ1RSVU0gQU5BTFlaRVIsIDMyIGJhbmRzLzB4NTYzNzdkOTBkNGYwIiwiaW5kZXgiOiAyMzYsIm1ldGEiOiBbeyAiMyI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTE3OTIwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5MTc5MjAiLCJpbmRleCI6IDI0OCwibWV0YSI6IFt7ICI0IjogIiIgfSx7ICJ0b29sdGlwIjogIkZGVCBTcGVjdHJhbCBCYW5kIExldmVsIGluIGRCIiB9LHsgInVuaXQiOiAiZEIiIH1dLCJtaW4iOiAtNTAsIm1heCI6IDEwfSx7InR5cGUiOiAidmJhcmdyYXBoIiwibGFiZWwiOiAiMHg1NjM3N2Q5MjVmNjAiLCJhZGRyZXNzIjogIi9GRlQvRkZUIFNQRUNUUlVNIEFOQUxZWkVSLCAzMiBiYW5kcy8weDU2Mzc3ZDkyNWY2MCIsImluZGV4IjogMjYwLCJtZXRhIjogW3sgIjUiOiAiIiB9LHsgInRvb2x0aXAiOiAiRkZUIFNwZWN0cmFsIEJhbmQgTGV2ZWwgaW4gZEIiIH0seyAidW5pdCI6ICJkQiIgfV0sIm1pbiI6IC01MCwibWF4IjogMTB9LHsidHlwZSI6ICJ2YmFyZ3JhcGgiLCJsYWJlbCI6ICIweDU2Mzc3ZDkyZTVhMCIsImFkZHJlc3MiOiAiL0ZGVC9GRlQgU1BFQ1RSVU0gQU5BTFlaRVIsIDMyIGJhbmRzLzB4NTYzNzdkOTJlNWEwIiwiaW5kZXgiOiAyNzIsIm1ldGEiOiBbeyAiNiI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTNjYzQwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5M2NjNDAiLCJpbmRleCI6IDI4NCwibWV0YSI6IFt7ICI3IjogIiIgfSx7ICJ0b29sdGlwIjogIkZGVCBTcGVjdHJhbCBCYW5kIExldmVsIGluIGRCIiB9LHsgInVuaXQiOiAiZEIiIH1dLCJtaW4iOiAtNTAsIm1heCI6IDEwfSx7InR5cGUiOiAidmJhcmdyYXBoIiwibGFiZWwiOiAiMHg1NjM3N2Q5NDRlYjAiLCJhZGRyZXNzIjogIi9GRlQvRkZUIFNQRUNUUlVNIEFOQUxZWkVSLCAzMiBiYW5kcy8weDU2Mzc3ZDk0NGViMCIsImluZGV4IjogMjk2LCJtZXRhIjogW3sgIjgiOiAiIiB9LHsgInRvb2x0aXAiOiAiRkZUIFNwZWN0cmFsIEJhbmQgTGV2ZWwgaW4gZEIiIH0seyAidW5pdCI6ICJkQiIgfV0sIm1pbiI6IC01MCwibWF4IjogMTB9LHsidHlwZSI6ICJ2YmFyZ3JhcGgiLCJsYWJlbCI6ICIweDU2Mzc3ZDk0ZTRiMCIsImFkZHJlc3MiOiAiL0ZGVC9GRlQgU1BFQ1RSVU0gQU5BTFlaRVIsIDMyIGJhbmRzLzB4NTYzNzdkOTRlNGIwIiwiaW5kZXgiOiAzMDgsIm1ldGEiOiBbeyAiOSI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTU3MzMwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5NTczMzAiLCJpbmRleCI6IDMyMCwibWV0YSI6IFt7ICIxMCI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTYwY2UwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5NjBjZTAiLCJpbmRleCI6IDMzMiwibWV0YSI6IFt7ICIxMSI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTY3NjQwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5Njc2NDAiLCJpbmRleCI6IDM0NCwibWV0YSI6IFt7ICIxMiI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTcwZTMwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5NzBlMzAiLCJpbmRleCI6IDM1NiwibWV0YSI6IFt7ICIxMyI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTc5ZmIwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5NzlmYjAiLCJpbmRleCI6IDM2OCwibWV0YSI6IFt7ICIxNCI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOTgzOTgwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5ODM5ODAiLCJpbmRleCI6IDM4MCwibWV0YSI6IFt7ICIxNSI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH0seyJ0eXBlIjogInZiYXJncmFwaCIsImxhYmVsIjogIjB4NTYzNzdkOThiOWEwIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiwgMzIgYmFuZHMvMHg1NjM3N2Q5OGI5YTAiLCJpbmRleCI6IDM5MiwibWV0YSI6IFt7ICIxNiI6ICIiIH0seyAidG9vbHRpcCI6ICJGRlQgU3BlY3RyYWwgQmFuZCBMZXZlbCBpbiBkQiIgfSx7ICJ1bml0IjogImRCIiB9XSwibWluIjogLTUwLCJtYXgiOiAxMH1dfSx7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiRkZUIFNQRUNUUlVNIEFOQUxZWkVSIENPTlRST0xTIiwibWV0YSI6IFt7ICIxIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkxldmVsIEF2ZXJhZ2luZyBUaW1lIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBTUEVDVFJVTSBBTkFMWVpFUiBDT05UUk9MUy9MZXZlbCBBdmVyYWdpbmcgVGltZSIsImluZGV4IjogNCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzY2FsZSI6ICJsb2ciIH0seyAidG9vbHRpcCI6ICJiYW5kLWxldmVsIGF2ZXJhZ2luZyB0aW1lIGluIG1pbGxpc2Vjb25kcyIgfSx7ICJ1bml0IjogIm1zIiB9XSwiaW5pdCI6IDEwMCwibWluIjogMSwibWF4IjogMTAwMDAsInN0ZXAiOiAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkxldmVsIGRCIE9mZnNldCIsImFkZHJlc3MiOiAiL0ZGVC9GRlQgU1BFQ1RSVU0gQU5BTFlaRVIgQ09OVFJPTFMvTGV2ZWwgZEIgT2Zmc2V0IiwiaW5kZXgiOiAwLCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgInRvb2x0aXAiOiAiTGV2ZWwgb2Zmc2V0IGluIGRlY2liZWxzIiB9LHsgInVuaXQiOiAiZEIiIH1dLCJpbml0IjogNTAsIm1pbiI6IC01MCwibWF4IjogMTAwLCJzdGVwIjogMX1dfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkZGVCBCaW4gTnVtYmVyIiwiYWRkcmVzcyI6ICIvRkZUL0ZGVCBCaW4gTnVtYmVyIiwiaW5kZXgiOiAyMCwibWV0YSI6IFt7ICIyIjogIiIgfV0sImluaXQiOiA4LCJtaW4iOiAwLCJtYXgiOiAxNiwic3RlcCI6IDAuMDAxfSx7InR5cGUiOiAiaGJhcmdyYXBoIiwibGFiZWwiOiAiTWVhc3VyZWQgRkZUIEJpbiBOdW1iZXIiLCJhZGRyZXNzIjogIi9GRlQvTWVhc3VyZWQgRkZUIEJpbiBOdW1iZXIiLCJpbmRleCI6IDI0LCJtZXRhIjogW3sgIjMiOiAiIiB9XSwibWluIjogMCwibWF4IjogMTZ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiQW1wbGl0dWRlIiwiYWRkcmVzcyI6ICIvRkZUL0FtcGxpdHVkZSIsImluZGV4IjogMTYsIm1ldGEiOiBbeyAiNCI6ICIiIH1dLCJpbml0IjogMC4xLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMDF9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class FFTNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'FFT', options);

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
                this.setParamValue(path, FFTNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            this.setParamValue(pw.path, FFTNode.remap(wheel, 0, 16383, pw.min, pw.max));
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
class FFT {

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

            let real_url = (this.baseURL === "") ? "FFT.wasm" : (this.baseURL + "/FFT.wasm");
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
                    let FFTProcessorString1 = FFTProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([FFTProcessorString1], { type: 'text/javascript' }));
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
            this.node = new FFTNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from FFT-processor was detected.'); }
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
                        var element = createFFTGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createFFTGUI(this.node);
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

let FFTProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class FFTProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                FFTProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                FFTProcessor.parse_items(group.items, obj, callback);
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
                FFTProcessor.parse_items(item.items, obj, callback);
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
                FFTProcessor.parse_items(item.items, obj, callback);
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
            FFTProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, FFTProcessor.parse_item1);
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
            
            this.FFT_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.FFT_instance.exports;
            this.HEAP = this.FFT_instance.exports.memory.buffer;
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
                FFTProcessor.parse_ui(this.json_object.ui, this, FFTProcessor.parse_item2);
                
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
        registerProcessor('FFT', FFTProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "FFT";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.FFT = FFT;
    window.FaustFFT = FFT;
    window[dspName] = FFT;
} else {
    module.exports = { FFT };
}
