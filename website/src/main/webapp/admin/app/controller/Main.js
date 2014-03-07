/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-5
 * Time: 下午5:41
 * To change this template use File | Settings | File Templates.
 */

Ext.define('zc.controller.Main',{
	extend:'Ext.app.Controller',

	stores:[
		'userStore'
	],

	models:[
		'userModel'
	],

	views:[
		'Header',
		'Menu',
		'South',
		'TabPanel',
		'user.user'
	],


	init:function(){
	}
})
