/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define('zc.view.TabPanel',{
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
			items:[
				{
					id:'HomePage',
					title:"HomePage",
					iconCls:'home',
					layout:'fit',
					html:'这里是内容1！'
				},
				{
					id:'firstPage',
					title:"first page",
					iconCls:'home',
					layout:'fit',
					closable:true,
					html:'这里是内容2！'
				},
				{
					id:'secondPage',
					title:"secondPage",
					iconCls:'home',
					layout:'fit',
					closable:true,
					html:'这里是内容3！'
				}
			]
		});
		this.callParent(arguments);
	}
})

