var Mock =require('mockjs')
const Random=Mock.Random;
const SwiperData=function () {
    let datalist=[];
    for (var i=0;i<3;i++)
    {
        let Swiper={
            imgUrl:Random.image('322x200',Random.hex())
        }
        datalist.push(Swiper);
    }
    return{
        status:0,
        datalist:datalist
    }
}
Mock.mock('http://vue.studyit.io/api/getlunbo','get',SwiperData);