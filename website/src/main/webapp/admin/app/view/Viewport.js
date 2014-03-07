/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:37
 * To change this template use File | Settings | File Templates.
 */
Ext.define('zc.view.Viewport',{
	extend:'Ext.Viewport',
	layout:'fit',
	requires:[
		'zc.view.Header',
		'zc.view.Menu',
		'zc.view.TabPanel',
		'zc.view.South'
	],
	initComponent:function(){
		var me=this;
		Ext.apply(me,{
			items:[{
				id:'desk',
				layout:'border',
				items:[
					Ext.create('zc.view.Header'),
					Ext.create('zc.view.Menu'),
					Ext.create('zc.view.TabPanel'),
					Ext.create('zc.view.South')
				]
			}]
		});
		me.callParent(arguments);
	}
})