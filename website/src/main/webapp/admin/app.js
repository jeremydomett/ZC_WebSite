/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午5:38
 * To change this template use File | Settings | File Templates.


 */


Ext.Loader.setConfig({enabled:true});
Ext.application({
	name:'zc',
	appFolder:'app',
	autoCreateViewport:true,
	controllers:[
		'Main'
	]
});



