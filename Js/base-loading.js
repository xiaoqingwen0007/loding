//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 20 ? (_PageHeight - 20) / 2 : 0,
    _LoadingLeft = _PageWidth > 20 ? (_PageWidth - 20) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml ='<div id="loadingDiv" style="height:'+_PageHeight+'px;width:100%;position:absolute;background:#fff;z-index:1000;top:0;left:0">'
					+'<img src="img/loading.gif" style="position:absolute;left:'+_LoadingLeft+'px;top:'+_LoadingTop+'px;height:40px;widht:40px;">'
					+'</div>'
//呈现loading效果
document.write(_LoadingHtml);
//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
