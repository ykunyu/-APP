var Mock =require('mockjs')
const Random=Mock.Random;
var data = Mock.mock({
    status:0,
    'message': [
        {id:1,title:'柬埔寨将46名台籍嫌犯遣返大陆 台当局又＂跳脚＂了',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:2,title:'30余幼儿眼睛被紫光灯灼伤 幼儿园要求家长办退园',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:3,title:'韩朝商定12日相互检验非军事区互撤哨所状况',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:4,title:'两部门向川藏拨4.5亿救灾资金 用于滑坡泥石流救灾',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:5,title:'河北唐山市迁安市发生2.1级地震 震源深度13千米',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:6,title:'马克龙因＂黄背心＂抗议支持率创新低 激怒反对党',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:7,title:'母亲家门口倒车 将1岁大女儿撞倒碾压致死',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:8,title:'有学生情侣被爆私生活混乱 清华否认取消相关资格',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:9,title:'美国2岁女童因这段视频变＂网红＂ 其母怒告托儿所',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
        {id:10,title:'内蒙古优秀民营企业拟表彰名单公布 鸿茅国药在列',add_time:'2018-12-06 22:12:26',click:32,'img_url':"@image('500x333','@hex')"},
]
})

Mock.mock('http://vue.studyit.io/api/getnewslist','get',JSON.parse(JSON.stringify(data)));