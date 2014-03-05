/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午5:38
 * To change this template use File | Settings | File Templates.



 Ext.application({
	name:'HelloExt',
	launch:function(){
		Ext.create('Ext.container.Viewport',{
			layout:'fit',
			items:[
				{
					title:'Hello Ext',
					html:'Hello!Ext!'
				}
			]
		});
	}
});
 */


Ext.Loader.setConfig({enabled:true});
Ext.application({
	name:'SMS',
	appFolder:'app',
	controllers:[
		'Main'
	]
});