toast("开始...");
auto();
const WIDTH = Math.min(device.width, device.height);
const HEIGHT = Math.max(device.width, device.height);
setScreenMetrics(WIDTH, HEIGHT);

var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
unlock.unlock();
sleep(2000);

robot.kill("com.jd.jrapp");
sleep(2000);
robot.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 43830233030236F6D6E2A646E2A6271607070236F6D6E2A646E2A627160707E2D61696E6E2163636F657E647E2D656E25796E2D41696E6D456143647966796479702165747F6A637D25254435224145214345254435224835293345254935283735293135254835293545283440206020602");
sleep(5000);
robot.clickTextCenter("早起打卡");
sleep(5000);


click(475, 1063); // 打卡TODO
sleep(2000);
robot.kill("com.jd.jrapp");
toast("结束...")
exit();