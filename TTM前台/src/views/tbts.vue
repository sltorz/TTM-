<template>
    <div class="body">
        <h1>2018年下半年考试特别提示</h1>
        <div class="text">
            <h4>1、全国大学英语TTM考试口语考试（CET-SET）报考资格为大学英语四级口试仅接受完成当次大学英语四级笔试报考的考生，大学英语六级口试仅接受完成当次大学英语TTM笔试报考及缴费的考生。使用本系统进行报名的考生，可同时完成报考笔试和对应级别的口试科目.TTM为非必考项目。</h4>
            <h4>2、TTM不单独颁发成绩报告单，考生在同一考次获得TTM笔试（非0分）和口试（C等级及以上）中一项及以上有效成绩，将对其发放成绩报告单。考生按学校规定领取成绩报告单。</h4>
            <h4>3、考生在作答题笔试前，请认真完成以下内容：</h4>
            <ol>
                <li>请检查试题册背面条形码粘贴条、答题卡的印刷质量，如有问题及时向监考员反应，确认无误后完成以下两点要求。</li>
                <li>请将试题册背面条形码粘贴条揭下后粘贴在答题卡1的条形码粘贴框内，并将姓名和准考证号填写在试题册背面相应位置。</li>
                <li>请在答题卡1和答题卡2指定位置用黑色签字笔填写准考证号、姓名和学校名称，并用HB-2B铅笔将对应准考证号的信息点涂黑。</li>
            </ol>
            <h4>4、考生在笔试考试过程中，请注意以下内容：</h4>
            <ol>
                <li>所有题目必须在答题卡上规定位置作答，在试题册上或答题卡上非规定位置的作答一律无效。</li>
                <li>请在规定时间内在答题卡指定位置依次完成作文、听力、阅读、翻译各部分考试，作答作文期间不得翻阅该试题册。听力录音播放                  完毕后，请立即停止作答，监考员将立即回收答题卡1，得到监考员指令后方可继续作答</li>
                <li>作文题内容印在试题册背面，作文题及其他主观题必须用黑色签字笔在答题卡指定区域内作答。</li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tbts"
    }
</script>

<style scoped>
    .body{
        width: 100%;
        max-width: 1200px;
        padding: 20px 40px 40px 40px;
        margin: 0px auto;
        line-height: 30px;
        font-size: 16px;
        text-indent: 30px;
    }
    .body h1{
        width: 100%;
        max-width: 900px;
        margin: 0px auto;
        text-align: center;
        border-bottom:2px solid gray;

        padding-bottom: 20px;
    }
    .body  .text{

        margin-top:20px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 30px;
    }
    .body .text a{
        width: 100%;
        display: inline-block;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        .body{
            line-height: 25px;
            font-size: 14px;
        }
        .body h1 {
            font-size: 28px;
        }
    }
    .text h4{
        line-height: 30px;
    }
    .body ol li{
        list-style:disc inside;
        text-indent:60px;
    }
</style>