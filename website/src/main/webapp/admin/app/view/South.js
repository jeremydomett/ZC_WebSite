/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define('zc.view.South',{
	extend:'Ext.panel.Panel',
	initComponent:function(){
		Ext.apply(this,{
			id:'bottom',
			region:'south',
			height:23,
			html:"内容"
		});
		this.callParent(arguments);
	}
})