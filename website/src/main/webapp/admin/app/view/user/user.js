/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-6
 * Time: 下午3:48
 * To change this template use File | Settings | File Templates.
 */
Ext.define('zc.view.user.user',{
	extend:'Ext.container.Container',


	id:'user-panel',
	resizable:false,   //此属性无意义，可以删除。但保留作为参考
	//container的大小不会变，但是你可以调整Container的位置。他的作用是调整位置。
	closable: true,
	layout:'border',

	title: '用户管理',

	initComponent:function(){


		var store = Ext.getStore('userStore');

		// 在grid前加复选框
		var selModel = Ext.create('Ext.selection.CheckboxModel',
			{
				listeners:       //事件监听
				{
					selectionchange : function (sm, selections)
					{
						grid.down('#removeButton').setDisabled(selections.length == 0)
					}
				}
			});

		var grid = Ext.create('Ext.grid.Panel',
			{
				region:'center',       //此属性必须指定
				minHeight:200,

				selModel:selModel,      //每条记录前的复选框注意调用的方式  selModel是grid.panel自带属性

				store:store,
				columns:
					[
						{ text: '工号', dataIndex: 'id' , flex: 1 }, // 第1个数据列
						{text:'身份',dataIndex:'statu',flex:1},    // 第2个数据列
						{ text: '姓名', dataIndex: 'name' , flex: 1 },
						{text:'登录密码', dataIndex:'pass',flex:1} ,
						{ text: '年龄', dataIndex: 'age', flex: 1 },
						{ text: '性别', dataIndex: 'sex' , flex: 1 },
						{ text: '月薪', dataIndex: 'money' , flex: 1 },
						{ text: '邮箱', dataIndex: 'email' , flex: 1 },
						{ text: '手机号码', dataIndex: 'mobile' , flex: 1 },
						{text:'经理ID',dataIndex:'managerId' , felx:1},
						{ text: '入职时间', dataIndex: 'inTime' ,flex: 1 },
						{ text: '离职时间', dataIndex: 'outTime' , flex: 1 } ,
						{
							//这一列代码用于删除！
							itemId:'columnDelete',   //itemId:'actionDelete',
							xtype:'actioncolumn',
							//A Grid header type which renders an icon, or a series of icons in a grid cell, and offers a scoped click handler for each icon.

							width:100,
							text:'删除',
							align:'center',
							icon:'images/delete.png',

							handler:function (grid, rowIndex, colIndex)
							{
								Ext.Msg.confirm(
									'操作提示',
									'是否确定删除此条记录？',
									function (btn)
									{
										if (btn == 'yes')
										{
											store.removeAt(rowIndex);
											store.sync
											({
												success:function ()
												{
													Ext.MessageBox.show
													({
														title:'操作提示',
														msg:'删除成功！',
														buttons:Ext.MessageBox.OK,
														icon:Ext.MessageBox.INFO
													})
												},
												failure:function ()
												{
													Ext.MessageBox.show
													({
														title:'操作提示',
														msg:'删除失败，请检查异常信息！',
														buttons:Ext.MessageBox.OK,
														icon:Ext.MessageBox.ERROR
													})
												}
											})
										}
									}
								)


								// store.getAt(rowIndex).get('name')
								// 先取得Model中的某一行，再从某一行中获得某一列的定义
							}


						}
					],

				dockedItems:[
					{
						xtype:'toolbar',
						items:[
							{    //插入一条新记录
								itemId:'newButton',
								text:'新建',
								tooltip:'创建一个新的记录',
								handler:function ()       //展开一个新的视图
								{
									var detailView = Ext.create('Hongbo.view.west.childViews.DetailView',
										{
											listStore:store,    //listStore：自定义成员属性
											action:'add'         //action：自定义成员属性
										});
									detailView.on('close' , function(){store.reload(); } , this);
									detailView.show();
								}
							},

							'-',   //分隔符 “|”

							{
								itemId:'removeButton',
								text:'删除',
								tooltip:'删除所选的记录',
								disabled:true,
								handler:function ()
								{
									var sels = grid.getSelectionModel().getSelection();
									Ext.Msg.confirm
									(
										'操作提示',
										'是否确定删除所选的' + sels.length + '条记录？',
										function (btn)
										{
											if (btn == 'yes')
											{
												for (var i = 0; i < sels.length; i++)
												{
													store.remove(sels[i]);     //调用 Store 的 remove 方法
												}
												store.sync
												({
													success:function ()
													{
														Ext.MessageBox.show
														({
															title:'操作提示',
															msg:'删除成功！',
															buttons:Ext.MessageBox.OK,
															icon:Ext.MessageBox.INFO
														})
													},
													failure:function ()
													{
														Ext.MessageBox.show
														({
															title:'操作提示',
															msg:'删除失败，请检查异常信息！',
															buttons:Ext.MessageBox.OK,
															icon:Ext.MessageBox.ERROR
														})
													}
												})
											}
										}
									)
								}
							},

							'->',  // ‘－>‘，这是一个fill element,它下面的元素将会靠右侧对齐。

							{
								xtype:'button',
								text:'<b>Welcome To My Home Page<b>' ,
								listeners:
								{
									click : function()
									{
										window.open('http://www.baidu.com')
//                                    window.open('http://www.baidu.com')
									}
								}
							}
						]
					}
				],

				listeners:
				{
					// celldblclick( this, td, cellIndex, record, tr, rowIndex, e, eOpts )    监听表格双击记录
					// Fired when table cell is double clicked.
					// record : Ext.data.Model
					celldblclick:function (grid, td, cellIndex, record, tr, rowIndex, e)
					{
						Ext.create('Hongbo.view.west.childViews.DetailView',
							{
								listStore:store,
								listRecord:record  //此条双击 数据记录
							}).show();
					}
				}
			});

		this.items = [grid];
		this.callParent(arguments);
		store.load();
	}
})
