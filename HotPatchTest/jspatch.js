defineClass("HotPatchTest.ViewController", {
            
            setUpInterface: function () { //覆盖setUpInterface方法
            require('UIColor');
            
            //重新配置infoLabel信息和颜色
            self.infoLabel().setText("Correct Message");
            self.infoLabel().setBackgroundColor(UIColor.greenColor());
            
            //UIControlEventTouchUpInside的值是1<<6
            self.clickButton().addTarget_action_forControlEvents(self, "buttonClicked", 1<<6);
            }
            })

defineClass("HotPatchTest.ViewController", {
            
            buttonClicked: function () { //覆盖按钮点击事件
            
            var alert = require('UIAlertController').alertControllerWithTitle_message_preferredStyle("Succeed!", "Error fixed!", 1)//UIAlertControllerStyleAlert通过反查源码值为1
            
            var cancelAction = require('UIAlertAction').actionWithTitle_style_handler("确定", 1, null)//UIAlertActionStyleCancel通过反查源码值为1
            
            alert.addAction(cancelAction);
            self.presentViewController_animated_completion(alert, YES, null);
            }
            })
