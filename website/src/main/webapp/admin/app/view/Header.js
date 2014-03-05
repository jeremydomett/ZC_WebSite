/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:43
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SMS.view.Header',{
	extend:'Ext.Component',
	initComponent:function(){
		Ext.apply(this,{
			xtype:'box',
			cls:'header',
			region:'north',
			html:'header中文',
			height:30
		});
		this.callParent(arguments);
	}
})
