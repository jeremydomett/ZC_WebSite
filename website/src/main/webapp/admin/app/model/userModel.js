/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14-3-6
 * Time: 下午5:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define('zc.model.userModel',{
	extend: 'Ext.data.Model',

	autoLoad: true,
	fields: [
		{name: 'id' , type: 'varchar'},         //type定义还有问题，是否有varchar这个类型？2013-08-27
		{name: 'statu' , type: 'int'},
		{name: 'name', type: 'varchar'},
		{name: 'pass' , type: 'varchar'},
		{name: 'age', type: 'int'},
		{name: 'sex', type: 'varchar'},
		{name: 'money', type: 'int'},
		{name: 'email', type: 'varchar'},
		{name: 'mobile', type: 'varchar'},
		{name: 'managerId' , type: 'int'},
		{name: 'inTime', type: 'varchar'},
		{name: 'outTime', type: 'varchar'}
	]
});