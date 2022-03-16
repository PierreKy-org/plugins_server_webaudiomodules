
/*
Code generated with Faust version 2.38.16
Compilation options: -lang wasm-ib -cn brass -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONbrass() {
	return '{"name": "brass","filename": "brass.dsp","version": "2.38.16","compile_options": "-lang wasm-ib -cn brass -es 1 -mcd 16 -single -ftz 2 ","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/672C59792D0DA161AF81158A15CD1DB679D6525E/web/wap"],"size": 278748,"inputs": 0,"outputs": 2,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.5" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "compile_options": "-lang wasm-ib -cn brass -es 1 -mcd 16 -single -ftz 2 " },{ "copyright": "(c)Romain Michon, CCRMA (Stanford University), GRAME" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "description": "Simple brass instrument physical model with physical parameters." },{ "filename": "brass.dsp" },{ "filters_lib_dcblocker_author": "Julius O. Smith III" },{ "filters_lib_dcblocker_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_dcblocker_license": "MIT-style STK-4.3 license" },{ "filters_lib_fir_author": "Julius O. Smith III" },{ "filters_lib_fir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_fir_license": "MIT-style STK-4.3 license" },{ "filters_lib_iir_author": "Julius O. Smith III" },{ "filters_lib_iir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_lowpass0_highpass1_author": "Julius O. Smith III" },{ "filters_lib_lowpass_author": "Julius O. Smith III" },{ "filters_lib_lowpass_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_lowpass_license": "MIT-style STK-4.3 license" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_pole_author": "Julius O. Smith III" },{ "filters_lib_pole_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_pole_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2_author": "Julius O. Smith III" },{ "filters_lib_tf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2s_author": "Julius O. Smith III" },{ "filters_lib_tf2s_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2s_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "filters_lib_zero_author": "Julius O. Smith III" },{ "filters_lib_zero_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_zero_license": "MIT-style STK-4.3 license" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/physmodels.lib" },{ "library_path10": "/libraries/delays.lib" },{ "library_path2": "/libraries/signals.lib" },{ "library_path3": "/libraries/maths.lib" },{ "library_path4": "/libraries/platform.lib" },{ "library_path5": "/libraries/oscillators.lib" },{ "library_path6": "/libraries/basics.lib" },{ "library_path7": "/libraries/noises.lib" },{ "library_path8": "/libraries/filters.lib" },{ "library_path9": "/libraries/routes.lib" },{ "license": "MIT" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "brass" },{ "noises_lib_name": "Faust Noise Generator Library" },{ "noises_lib_version": "0.3" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_version": "0.3" },{ "physmodels_lib_name": "Faust Physical Models Library" },{ "physmodels_lib_version": "0.1" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "routes_lib_name": "Faust Signal Routing Library" },{ "routes_lib_version": "0.2" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.1" }],"ui": [ {"type": "hgroup","label": "brass","items": [ {"type": "vgroup","label": "blower","items": [ {"type": "hslider","label": "pressure","address": "/brass/blower/pressure","index": 262212,"meta": [{ "0": "" }],"init": 0,"min": 0,"max": 1,"step": 0.01},{"type": "hslider","label": "breathGain","address": "/brass/blower/breathGain","index": 262224,"meta": [{ "1": "" }],"init": 0.1,"min": 0,"max": 1,"step": 0.01},{"type": "hslider","label": "breathCutoff","address": "/brass/blower/breathCutoff","index": 262232,"meta": [{ "2": "" }],"init": 2000,"min": 20,"max": 20000,"step": 0.1},{"type": "hslider","label": "vibratoFreq","address": "/brass/blower/vibratoFreq","index": 262200,"meta": [{ "3": "" }],"init": 5,"min": 0.1,"max": 10,"step": 0.1},{"type": "hslider","label": "vibratoGain","address": "/brass/blower/vibratoGain","index": 262192,"meta": [{ "4": "" }],"init": 0.25,"min": 0,"max": 1,"step": 0.01}]},{"type": "vgroup","label": "brassModel","items": [ {"type": "hslider","label": "tubeLength","address": "/brass/brassModel/tubeLength","index": 262272,"meta": [{ "1": "" }],"init": 0.5,"min": 0.01,"max": 2.5,"step": 0.01},{"type": "hslider","label": "lipsTension","address": "/brass/brassModel/lipsTension","index": 262260,"meta": [{ "2": "" }],"init": 0.5,"min": 0,"max": 1,"step": 0.01},{"type": "hslider","label": "mute","address": "/brass/brassModel/mute","index": 262160,"meta": [{ "3": "" }],"init": 0.5,"min": 0,"max": 1,"step": 0.01}]}]}]}';
}
function getBase64Codebrass() { return "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b3V0cHV0cyI6IDIsIm1ldGEiOiBbIHsgImJhc2ljc19saWJfbmFtZSI6ICJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkiIH0seyAiYmFzaWNzX2xpYl92ZXJzaW9uIjogIjAuNSIgfSx7ICJjb21waWxhdGlvbl9vcHRpb25zIjogIi1zaW5nbGUgLXNjYWwgLUkgbGlicmFyaWVzLyAtSSBwcm9qZWN0LyAtbGFuZyB3YXNtIiB9LHsgImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1jbiBicmFzcyAtZXMgMSAtbWNkIDE2IC1zaW5nbGUgLWZ0eiAyICIgfSx7ICJjb3B5cmlnaHQiOiAiKGMpUm9tYWluIE1pY2hvbiwgQ0NSTUEgKFN0YW5mb3JkIFVuaXZlcnNpdHkpLCBHUkFNRSIgfSx7ICJkZWxheXNfbGliX25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIgfSx7ICJkZWxheXNfbGliX3ZlcnNpb24iOiAiMC4xIiB9LHsgImRlc2NyaXB0aW9uIjogIlNpbXBsZSBicmFzcyBpbnN0cnVtZW50IHBoeXNpY2FsIG1vZGVsIHdpdGggcGh5c2ljYWwgcGFyYW1ldGVycy4iIH0seyAiZmlsZW5hbWUiOiAiYnJhc3MuZHNwIiB9LHsgImZpbHRlcnNfbGliX2RjYmxvY2tlcl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9kY2Jsb2NrZXJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX2RjYmxvY2tlcl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfZmlyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2Zpcl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfZmlyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9paXJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfaWlyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9paXJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczFfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfbG93cGFzc19hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJmaWx0ZXJzX2xpYl9wb2xlX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX3BvbGVfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX3BvbGVfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX3RmMl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX3RmMl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfdGYyc19hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJzX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJzX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl92ZXJzaW9uIjogIjAuMyIgfSx7ICJmaWx0ZXJzX2xpYl96ZXJvX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX3plcm9fY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX3plcm9fbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImxpYnJhcnlfcGF0aDAiOiAiL2xpYnJhcmllcy9zdGRmYXVzdC5saWIiIH0seyAibGlicmFyeV9wYXRoMSI6ICIvbGlicmFyaWVzL3BoeXNtb2RlbHMubGliIiB9LHsgImxpYnJhcnlfcGF0aDEwIjogIi9saWJyYXJpZXMvZGVsYXlzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGgyIjogIi9saWJyYXJpZXMvc2lnbmFscy5saWIiIH0seyAibGlicmFyeV9wYXRoMyI6ICIvbGlicmFyaWVzL21hdGhzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg0IjogIi9saWJyYXJpZXMvcGxhdGZvcm0ubGliIiB9LHsgImxpYnJhcnlfcGF0aDUiOiAiL2xpYnJhcmllcy9vc2NpbGxhdG9ycy5saWIiIH0seyAibGlicmFyeV9wYXRoNiI6ICIvbGlicmFyaWVzL2Jhc2ljcy5saWIiIH0seyAibGlicmFyeV9wYXRoNyI6ICIvbGlicmFyaWVzL25vaXNlcy5saWIiIH0seyAibGlicmFyeV9wYXRoOCI6ICIvbGlicmFyaWVzL2ZpbHRlcnMubGliIiB9LHsgImxpYnJhcnlfcGF0aDkiOiAiL2xpYnJhcmllcy9yb3V0ZXMubGliIiB9LHsgImxpY2Vuc2UiOiAiTUlUIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjUiIH0seyAibmFtZSI6ICJicmFzcyIgfSx7ICJub2lzZXNfbGliX25hbWUiOiAiRmF1c3QgTm9pc2UgR2VuZXJhdG9yIExpYnJhcnkiIH0seyAibm9pc2VzX2xpYl92ZXJzaW9uIjogIjAuMyIgfSx7ICJvc2NpbGxhdG9yc19saWJfbmFtZSI6ICJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkiIH0seyAib3NjaWxsYXRvcnNfbGliX3ZlcnNpb24iOiAiMC4zIiB9LHsgInBoeXNtb2RlbHNfbGliX25hbWUiOiAiRmF1c3QgUGh5c2ljYWwgTW9kZWxzIExpYnJhcnkiIH0seyAicGh5c21vZGVsc19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAicGxhdGZvcm1fbGliX25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtX2xpYl92ZXJzaW9uIjogIjAuMiIgfSx7ICJyb3V0ZXNfbGliX25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJyb3V0ZXNfbGliX3ZlcnNpb24iOiAiMC4yIiB9LHsgInNpZ25hbHNfbGliX25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJzaWduYWxzX2xpYl92ZXJzaW9uIjogIjAuMSIgfV0sInVpIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiYnJhc3MiLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImJsb3dlciIsIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogInByZXNzdXJlIiwiYWRkcmVzcyI6ICIvYnJhc3MvYmxvd2VyL3ByZXNzdXJlIiwiaW5kZXgiOiAyNjIyMTIsIm1ldGEiOiBbeyAiMCI6ICIiIH1dLCJpbml0IjogMCwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiYnJlYXRoR2FpbiIsImFkZHJlc3MiOiAiL2JyYXNzL2Jsb3dlci9icmVhdGhHYWluIiwiaW5kZXgiOiAyNjIyMjQsIm1ldGEiOiBbeyAiMSI6ICIiIH1dLCJpbml0IjogMC4xLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJicmVhdGhDdXRvZmYiLCJhZGRyZXNzIjogIi9icmFzcy9ibG93ZXIvYnJlYXRoQ3V0b2ZmIiwiaW5kZXgiOiAyNjIyMzIsIm1ldGEiOiBbeyAiMiI6ICIiIH1dLCJpbml0IjogMjAwMCwibWluIjogMjAsIm1heCI6IDIwMDAwLCJzdGVwIjogMC4xfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogInZpYnJhdG9GcmVxIiwiYWRkcmVzcyI6ICIvYnJhc3MvYmxvd2VyL3ZpYnJhdG9GcmVxIiwiaW5kZXgiOiAyNjIyMDAsIm1ldGEiOiBbeyAiMyI6ICIiIH1dLCJpbml0IjogNSwibWluIjogMC4xLCJtYXgiOiAxMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJ2aWJyYXRvR2FpbiIsImFkZHJlc3MiOiAiL2JyYXNzL2Jsb3dlci92aWJyYXRvR2FpbiIsImluZGV4IjogMjYyMTkyLCJtZXRhIjogW3sgIjQiOiAiIiB9XSwiaW5pdCI6IDAuMjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAxfV19LHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJicmFzc01vZGVsIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAidHViZUxlbmd0aCIsImFkZHJlc3MiOiAiL2JyYXNzL2JyYXNzTW9kZWwvdHViZUxlbmd0aCIsImluZGV4IjogMjYyMjcyLCJtZXRhIjogW3sgIjEiOiAiIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMC4wMSwibWF4IjogMi41LCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJsaXBzVGVuc2lvbiIsImFkZHJlc3MiOiAiL2JyYXNzL2JyYXNzTW9kZWwvbGlwc1RlbnNpb24iLCJpbmRleCI6IDI2MjI2MCwibWV0YSI6IFt7ICIyIjogIiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIm11dGUiLCJhZGRyZXNzIjogIi9icmFzcy9icmFzc01vZGVsL211dGUiLCJpbmRleCI6IDI2MjE2MCwibWV0YSI6IFt7ICIzIjogIiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAxfV19XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class brassNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'brass', options);

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
                this.setParamValue(path, brassNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            this.setParamValue(pw.path, brassNode.remap(wheel, 0, 16383, pw.min, pw.max));
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
class brass {

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

            let real_url = (this.baseURL === "") ? "brass.wasm" : (this.baseURL + "/brass.wasm");
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
                    let brassProcessorString1 = brassProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([brassProcessorString1], { type: 'text/javascript' }));
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
            this.node = new brassNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from brass-processor was detected.'); }
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
                        var element = createbrassGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createbrassGUI(this.node);
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

let brassProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class brassProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                brassProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                brassProcessor.parse_items(group.items, obj, callback);
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
                brassProcessor.parse_items(item.items, obj, callback);
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
                brassProcessor.parse_items(item.items, obj, callback);
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
            brassProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, brassProcessor.parse_item1);
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
            
            this.brass_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.brass_instance.exports;
            this.HEAP = this.brass_instance.exports.memory.buffer;
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
                brassProcessor.parse_ui(this.json_object.ui, this, brassProcessor.parse_item2);
                
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
        registerProcessor('brass', brassProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "brass";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.brass = brass;
    window.Faustbrass = brass;
    window[dspName] = brass;
} else {
    module.exports = { brass };
}
