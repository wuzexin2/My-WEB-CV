/*
** _toolTipOpen() 		加载复制微信弹窗
** @param tipCode		参数：微信号
** @param tipFigure		参数：人物昵称
** @param tipContent	参数：提示内容	
** return 无
** 示例：	<button onClick='_toolTipOpen("tipCode","tipFigure","tipContent")'>打开弹窗</button>
*/
function _toolTipOpen(tipCode,tipFigure,tipContent) {

	/*动态添加弹窗样式*/
	
	var styleStr = "";	
	styleStr += "#_toolTipBox {display:none;width:100%;height:100%;background:rgba(0,0,0,0.4);position:fixed;top:0;left:0;z-index:90;transition:all 0.8s;}";	
	 styleStr += "#_toolTip {display:none;position:fixed;transition:all 0.5s;line-height:60px;z-index:99;width:90%;text-align:center;margin:auto;left:0;right:0;bottom:10px;font-family:微软雅黑;border-radius:15px;color:#4d9dfe;font-size:16px;}"; 	 
	 styleStr += "#_toolTip ._tipText {background:#FFF;width:100%;height:60px;line-height:60px;border-bottom:1px solid #D1D1D3;color:#4d9dfe;border-radius:18px 18px 0 0;}";		 
	 styleStr += "#_toolTip ._tipCode {background:#FFF;border-bottom:1px solid #D1D1D3;}";	 
	 styleStr += "#_toolTip ._tipCode input#_tipCode {width:168px;height:36px;line-height:36px;border:1px solid #93db92;background:none;color:red;border-radius:5px;margin-left:5px;font-size:20px;text-align:center;}";	 
	 styleStr += "#_toolTip ._tipCopy {background:#FFF;border-bottom:1px solid #D1D1D3;cursor:pointer;}";	 
	 styleStr += "#_toolTip ._tipOpenAPP {background:#FFF;display:block;border-radius:0 0 18px 18px;text-decoration:none;color:#4d9dfe;}";	 
	 styleStr += "#_toolTip ._tipOpenAPP span {font-size:14px;color:#888;}";	 
	 styleStr += "#_toolTip ._toolTipClose {background:#FFF;border-radius:18px;margin-top:18px;cursor:pointer;}";	 
	 
	 var _toolTipStyle = document.createElement('style');
	 
	_toolTipStyle.innerHTML = styleStr;		
	
	document.head.appendChild(_toolTipStyle);
	
	/*动态添加弹窗HTML*/
	
	var htmlStr = "";	
	htmlStr += "<div id='_toolTipBox' onClick='_toolTipClose()'></div>";	
	htmlStr += "<div id='_toolTip'>";
	htmlStr += "<div class='_tipText'>加<span id='_tipFigure'></span>微信好友<span id='_tipContent'></span></div>";
	htmlStr += "<div class='_tipCode wechatCode'><input type='text' class='text' id='_tipCode'></div>";
	htmlStr += "<div class='_tipCopy wechatCode' data-clipboard-action='copy' data-clipboard-target='#_tipCode'>点击复制</div>";
	htmlStr += "<a class='_tipOpenAPP' href='weixin://'>打开微信<span>（如无反应，请手动打开）</span></a>";		
	htmlStr += "<div class='_toolTipClose' style='bottom: 10px;' onClick='_toolTipClose()'>取消</div>"; 
	htmlStr += "</div>";	
	
	var _toolTip = document.createElement('div');	
	
	_toolTip.innerHTML = htmlStr;		
	
	document.body.appendChild(_toolTip);		
	
	
	/*输出微信号*/	
	document.getElementById('_tipCode').value = tipCode;
	
	/*输出人物称呼*/	
	document.getElementById('_tipFigure').innerText = tipFigure;
	
	/*输出提示标语*/	
	document.getElementById('_tipContent').innerText = tipContent;

	/*开启弹窗*/
	document.getElementById("_toolTipBox").style.display = "block";
	
	document.getElementById("_toolTip").style.display = "block";

	/*动态添加javascript*/
	
	var scriptStr = "";			
	scriptStr += "var clipboard = new ClipboardJS('._tipCopy');clipboard.on('success', function(e) {console.log(e);alert('微信号复制成功！');});clipboard.on('error', function(e) {console.log(e);alert('微信号复制失败，请手动复制！');});";		
	scriptStr += "function _toolTipClose() {/*关闭弹窗*/document.getElementById('_toolTipBox').style.display = 'none';document.getElementById('_toolTip').style.display = 'none';}";				
	
	var _toolTipScript = document.createElement('script');	 
	_toolTipScript.innerHTML = scriptStr;		
	document.body.appendChild(_toolTipScript);
}
function stopPropagation(e) {
	e = e || window.event; 
	if(e.stopPropagation) {
		/*W3C阻止冒泡方法 */
		e.stopPropagation();
	} else { 
		/*IE阻止冒泡方法*/
		e.cancelBubble = true;
	}  	
}