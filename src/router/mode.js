const testArr = [{
	"menuId": 41,
	"parentId": 33,
	"parentName": null,
	"name": "基础标签管理",
	"url": "common/home",
	"perms": null,
	"type": 1,
	"icon": "tagLibrary",
	"orderNum": 0,
	"menuType": "set",
	"open": null,
	"list": null
}, {
	"menuId": 34,
	"parentId": 33,
	"parentName": null,
	"name": "按标签选择加油站",
	"url": "common/main",
	"perms": null,
	"type": 1,
	"icon": "gasStationLabel",
	"orderNum": 1,
	"menuType": "set",
	"open": null,
	"list": null
}, {
	"menuId": 34,
	"parentId": 33,
	"parentName": null,
	"name": "按标签选择加油站",
	"url": "common/login",
	"perms": null,
	"type": 1,
	"icon": "gasStationLabel",
	"orderNum": 1,
	"menuType": "set",
	"open": null,
	"list": null
}]
const test2 = [{
	"menuId": 206,
	"parentId": 239,
	"parentName": null,
	"name": "加油站数据管理",
	"url": null,
	"perms": null,
	"type": 0,
	"icon": "gasStationLabel",
	"orderNum": 5,
	"menuType": "set",
	"open": null,
	"list": [{
		"menuId": 33,
		"parentId": 206,
		"parentName": null,
		"name": "加油站标签管理",
		"url": null,
		"perms": null,
		"type": 0,
		"icon": "labelManagement",
		"orderNum": 1,
		"menuType": "set",
		"open": null,
		"list": [{
			"menuId": 41,
			"parentId": 33,
			"parentName": null,
			"name": "基础标签管理",
			"url": "common/home",
			"perms": null,
			"type": 1,
			"icon": "tagLibrary",
			"orderNum": 0,
			"menuType": "set",
			"open": null,
			"list": null
		}, {
			"menuId": 34,
			"parentId": 33,
			"parentName": null,
			"name": "按标签选择加油站",
			"url": "common/main",
			"perms": null,
			"type": 1,
			"icon": "gasStationLabel",
			"orderNum": 1,
			"menuType": "set",
			"open": null,
			"list": null
		}]
	}]
}]
export default {
	testArr,
	test2
}