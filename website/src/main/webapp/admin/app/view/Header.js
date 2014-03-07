/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:43
 * To change this template use File | Settings | File Templates.
 */
Ext.define('zc.view.Header',{
	extend:'Ext.Component',
	initComponent:function(){
		Ext.apply(this,{
			type:'box',
			cls:'header',
			region:'north',
			html:'<b>网站后台管理系统</b>',
			height:30
		});
		this.callParent(arguments);
	}
})
