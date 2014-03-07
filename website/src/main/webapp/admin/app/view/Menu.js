/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午6:43
 * To change this template use File | Settings | File Templates.
 */




Ext.define('zc.view.Menu',{
	extend:'Ext.tree.Panel',

	requires:[
		'zc.view.user.user'
	],

	openTab : function (compName){
		var main = Ext.getCmp("content-panel");
		var panel = Ext.create(compName)
		var tab = main.getComponent(panel.id);
		if (tab) {
			main.setActiveTab(tab);
		} else{
			var p = main.add(panel);
			main.setActiveTab(p);
		}
	},


	initComponent:function(){
		Ext.apply(this,{
			id:'menu-panel',
			title:'菜单',
			iconCls:'icon-menu',
			margins:'0 0 -1 1',
			region:'west',
			border:true,
			enabled:true,
			split:true,
			width:212,
			minSize:130,
			maxSize:300,
			rootVisible:true,
			containerScroll:true,
			collapsible:true,
			autoScroll:true,

			store:Ext.create('Ext.data.TreeStore', {
				root: {
					expanded: true,
					text : '系统管理',
					id : '0',
					children: [
						{id:"yhgl", text: "用户管理", leaf: true},
						{id:"lygl", text: "留言管理", leaf: true},
						{id:"wjgl", text: "文件管理", leaf: true},
						{id:"zdsjgl", text: "自动升级管理", leaf: true},
						{id:"cjwtgl", text: "常见问题管理", leaf: true},
						{id:"xwgl", text: "新闻管理", leaf: true},
						{id:"cpgl", text: "产品管理", leaf: true},
						{id:"ymnrgl", text: "页面内容管理", leaf: true},
						{ text: "test", expanded: true,
							children: [
								{ text: "test1", leaf: true },
								{ text: "test2", leaf: true}
							]
						}
					]
				}

				/*
				 folderSort : true,
				 sorters : [{
				 property : 'text',
				 direction : 'ASC'
				 }]
				 */
			})



		});
		this.callParent(arguments);
		this.on({
			'itemclick':function(view, rcd, item, idx, event, eOpts) {
				var dirid = rcd.get('id'); //节点id
				var dirtype = rcd.raw.src; //自定义数据
				if(dirid=='yhgl'){
					this.openTab('zc.view.user.user');
				}else if(dirid='wjgl'){

				}
			},
			//目录树双击击事件
			'itemdblclick' : function(view, rcd, item, idx, event, eOpts) {
				var dirid = rcd.get('id'); //节点id
				var dirtype = rcd.raw.dirtype; //自定义数据
			},
			//目录数右键事件
			'itemcontextmenu' : function(view, rcd, item, idx, event, eOpts) {
				event.preventDefault();
				this.showTreeItemMenu(rcd, event); //自定义处理函数
			},
			scope : this
		});
	}
})