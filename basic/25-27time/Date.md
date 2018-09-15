# Date
## 构造函数

```
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```
## 方法：
Date.now()
Date.parse()
Date.UTC()
## Date.prototype 方法
## getter

Date.prototype.getDate()
根据本地时间返回指定日期对象的月份中的第几天（1-31）。
Date.prototype.getDay()
根据本地时间返回指定日期对象的星期中的第几天（0-6）。
Date.prototype.getFullYear()
根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。
Date.prototype.getHours()
根据本地时间返回指定日期对象的小时（0-23）。
Date.prototype.getMilliseconds()
根据本地时间返回指定日期对象的毫秒（0-999）。
Date.prototype.getMinutes()
根据本地时间返回指定日期对象的分钟（0-59）。
Date.prototype.getMonth()
根据本地时间返回指定日期对象的月份（0-11）。
Date.prototype.getSeconds()
根据本地时间返回指定日期对象的秒数（0-59）。
Date.prototype.getTime()
返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值。
Date.prototype.getTimezoneOffset()
返回当前时区的时区偏移。
Date.prototype.getUTCDate()
根据世界时返回特定日期对象一个月的第几天（1-31）.
Date.prototype.getUTCDay()
根据世界时返回特定日期对象一个星期的第几天（0-6）.
Date.prototype.getUTCFullYear()
根据世界时返回特定日期对象所在的年份（4位数）.
Date.prototype.getUTCHours()
根据世界时返回特定日期对象当前的小时（0-23）.
Date.prototype.getUTCMilliseconds()
根据世界时返回特定日期对象的毫秒数（0-999）.
Date.prototype.getUTCMinutes()
根据世界时返回特定日期对象的分钟数（0-59）.
Date.prototype.getUTCMonth()
根据世界时返回特定日期对象的月份（0-11）.
Date.prototype.getUTCSeconds()
根据世界时返回特定日期对象的秒数（0-59）.
Date.prototype.getYear() {{ deprecated_inline  }}
根据特定日期返回年份 (通常 2-3 位数). 使用 getFullYear() .
## setter
Date.prototype.setDate()
根据本地时间为指定的日期对象设置月份中的第几天。
Date.prototype.setFullYear()
根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）。
Date.prototype.setHours()
根据本地时间为指定日期对象设置小时数。
Date.prototype.setMilliseconds()
根据本地时间为指定日期对象设置毫秒数。
Date.prototype.setMinutes()
根据本地时间为指定日期对象设置分钟数。
Date.prototype.setMonth()
根据本地时间为指定日期对象设置月份。
Date.prototype.setSeconds()
根据本地时间为指定日期对象设置秒数。
Date.prototype.setTime()
通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值。
Date.prototype.setUTCDate()
根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
Date.prototype.setUTCFullYear()
根据世界时设置 Date 对象中的年份（四位数字）。
Date.prototype.setUTCHours()
根据世界时设置 Date 对象中的小时 (0 ~ 23)。
Date.prototype.setUTCMilliseconds()
根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
Date.prototype.setUTCMinutes()
根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
Date.prototype.setUTCMonth()
根据世界时设置 Date 对象中的月份 (0 ~ 11)。
Date.prototype.setUTCSeconds()
根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
Date.prototype.setYear() 
setYear() 方法用于设置年份。请使用 setFullYear() 方法代替。
## Conversion getter
Date.prototype.toDateString()
以人类易读（human-readable）的形式返回该日期对象日期部分的字符串。
Date.prototype.toISOString()
把一个日期转换为符合 ISO 8601 扩展格式的字符串。
Date.prototype.toJSON()
使用 toISOString() 返回一个表示该日期的字符串。为了在 JSON.stringify() 方法中使用。
Date.prototype.toGMTString() 
返回一个基于 GMT (UT) 时区的字符串来表示该日期。请使用 toUTCString() 方法代替。
Date.prototype.toLocaleDateString()
返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）。
Date.prototype.toLocaleFormat() 
使用格式字符串将日期转换为字符串。
Date.prototype.toLocaleString()
返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联（locality sensitive）。覆盖了 Object.prototype.toLocaleString() 方法。
Date.prototype.toLocaleTimeString()
返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）。
Date.prototype.toSource() 
返回一个与Date等价的原始字符串对象，你可以使用这个值去生成一个新的对象。重写了 Object.prototype.toSource() 这个方法。
Date.prototype.toString()
返回一个表示该日期对象的字符串。覆盖了Object.prototype.toString() 方法。
Date.prototype.toTimeString()
以人类易读格式返回日期对象时间部分的字符串。
Date.prototype.toUTCString()
把一个日期对象转换为一个以UTC时区计时的字符串。
Date.prototype.valueOf()
返回一个日期对象的原始值。覆盖了 Object.prototype.valueOf() 方法。

## 例子
创建一个日期对象的几种方法

计算经过的时间

```
// 使用 Date 对象
var start = Date.now();

// 这里进行耗时的方法调用: 
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // 运行时间的毫秒值
```


```
// 使用内建的创建方法
var start = new Date();

// 这里进行耗时的方法调用: 
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 运行时间的毫秒值
```

```
// to test a function and get back its return
function printElapsedTime (fTest) {
    var nStartTime = Date.now(),
        vReturn = fTest(),
        nEndTime = Date.now();
    alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds"); 
    return vReturn;
}
yourFunctionReturn = printElapsedTime(yourFunction);
```



