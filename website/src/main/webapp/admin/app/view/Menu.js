/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:43
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SMS.view.Menu',{
	extend:'Ext.tree.Panel',
	initComponent:function(){
		Ext.apply(this,{
			id:'menu-panel',
			title:'my title',
			iconCls:'icon-menu',
			margins:'0 0 -1 1',
			region:'west',
			border:true,
			enabled:false,
			split:true,
			width:212,
			minSize:130,
			maxSize:300,
			rootVisible:false,
			containerScroll:true,
			collapsible:true,
			autoScroll:false
		});
		this.callParent(arguments);
	}
})