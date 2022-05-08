﻿
var configs = {
    url: {
        BuilderProjects: _root + "projectgroup/BuilderProjects"
    }
};

btnBack.onclick = function () {
    window.location.href =  "/Solution";
}
btnProjectGroup.onclick = function ()
{
    var gridInfo = divGrid.$GridInfo();
    if (gridInfo.length == 1) {
        configs.url.BuilderProjects.$Ajax({
            callback: function (msg) {
                if (msg.IsSuccess) {
                    "生成成功".$Alert();
                    btnSearch.click();
                }
                else {
                    msg.Data.$Alert();
                }
            },
            data: { "model": JSON.stringify(gridInfo) }
        })
    } else {
        "请选择一条数据，只能是一条".$Alert();
    }
}