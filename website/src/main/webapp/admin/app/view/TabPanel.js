/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SMS.view.TabPanel',{
	extend:'Ext.tab.Panel',
	initComponent:function(){
		Ext.apply(this,{
			id:'content-panel',
			region:'center',
			defaults:{
				autoScroll:true,
				bodyPadding:10
			},
			activeTab:0,
			border:true,
			items:[{
				id:'HomePage',
				title:"first page",
				iconCls:'home',
				layout:'fit'
			}]
		});
		this.callParent(arguments);
	}
})