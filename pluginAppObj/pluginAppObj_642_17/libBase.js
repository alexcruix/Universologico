/**
 * This file defines utility functions and is available for optional objects
 *
 * @name libBase.js
 * @author Andrea G - Incomedia
 * @version 1.0.0
 * @creation date July 04th, 2018
 * @lastupdate July 04th, 2018
 * @copyright (c) 2018 Incomedia
 */var libBase={br:function(e){var t=new RegExp("(<br\\s/>|<br>)","g"),n=e.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/\r/g,"").replace(/\n/g,"").replace(t,"<br>");return n},getType:function(e){return typeof e},decode_html:function(e){return e=replaceAll("&amp;gt;",">",e),e=replaceAll("&amp;lt;","<",e),e=replaceAll("\\'","'",e),e=replaceAll("&quot;",'"',e),e=replaceAll("&lt;br /&gt;","\n",e),e=replaceAll("&amp;","&",e),e=replaceAll("\\\\","\\",e),e},replaceAll:function(e,t,n){return n.replace(new RegExp(e,"g"),t)}};