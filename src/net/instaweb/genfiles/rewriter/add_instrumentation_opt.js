(function(){var c=encodeURIComponent,f=window,h="performance",k="",l="&",m="&b_csi=",n="&bci=",p="&cces=",r="&ccis=",s="&ccos=",t="&ccrl=",u="&ccul=",v="&connect=",w="&dns=",x="&dom_c=",y="&dwld=",z="&fp=",A="&htmlAt=",B="&ifr=0",C="&ifr=1",D="&nav=",E="&nrp=",F="&nt=",G="&r",H="&ref=",I="&req_start=",J="&ttfb=",K="&url=",L="=",M="?",N="EventStart",O="beforeunload",P="ets=",Q="load",R="load:",S="on",T="unload:";f.pagespeed=f.pagespeed||{};
var U=f.pagespeed,V=function(a,d,b,e,g){this.e=a;this.a=d;this.b=b;this.f=g;this.c=e};U.beaconUrl=k;
V.prototype.d=function(){var a=this.e,d=f.mod_pagespeed_start,b=Number(new Date)-d,a=a+(-1==a.indexOf(M)?M:l),a=a+P+(this.a==Q?R:T),a=a+b;if(this.a!=O||!f.mod_pagespeed_loaded){a+=G+this.a+L;if(f[h]){var b=f[h].timing,e=b.navigationStart,g=b.requestStart,a=a+(b[this.a+N]-e),a=a+(D+(b.fetchStart-e)),a=a+(w+(b.domainLookupEnd-b.domainLookupStart)),a=a+(v+(b.connectEnd-b.connectStart)),a=a+(I+(g-e)),a=a+(J+(b.responseStart-g)),a=a+(y+(b.responseEnd-b.responseStart)),a=a+(x+(b.domContentLoadedEventStart-
e));f[h].navigation&&(a+=F+f[h].navigation.type);e=-1;b.msFirstPaint?e=b.msFirstPaint:f.chrome&&f.chrome.loadTimes&&(e=Math.floor(1E3*f.chrome.loadTimes().firstPaintTime));-1!=e&&(a+=z+(e-g))}else a+=b;U.getResourceTimingData&&f.parent==f&&(a+=U.getResourceTimingData());a+=f.parent!=f?C:B;this.a==Q&&(f.mod_pagespeed_loaded=!0,(b=f.mod_pagespeed_num_resources_prefetched)&&(a+=E+b),(b=f.mod_pagespeed_prefetch_start)&&(a+=A+(d-b)));U.panelLoader&&(d=U.panelLoader.getCsiTimingsString(),d!=k&&(a+=m+d),
d=U.panelLoader.getCriticalImagesInfoString(),d!=k&&(a+=n+d));U.criticalCss&&(d=U.criticalCss,a+=r+d.total_critical_inlined_size+p+d.total_original_external_size+s+d.total_overhead_size+t+d.num_replaced_links+u+d.num_unreplaced_links);this.b!=k&&(a+=this.b);this.c!=k&&(a+=H+c(this.c));a+=K+c(this.f);U.beaconUrl=a;(new Image).src=a}};U.g=function(a,d,b,e,g){var q=new V(a,d,b,e,g);f.addEventListener?f.addEventListener(d,function(){q.d()},!1):f.attachEvent(S+d,function(){q.d()})};
U.addInstrumentationInit=U.g;})();
