
// 用于处理ajax加载成功后的数据，有可能业务逻辑错误。
function handleSuccess(text, callback) {
    var result = mini.decode(text),
        success = result.success !== false;

    if (callback(success, result) !== false) {
        if (success) {

        } else {
            alert("Server Error\n\n" + result.message + "\n\n" + result.stackTrace);
        }
    }
}

function handlerError(jqXHR, textStatus, errorThrown) {     
    alert("HTTP Error\n\n" + jqXHR.responseText );
}

