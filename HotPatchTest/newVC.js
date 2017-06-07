defineClass('NewController:UIViewController', {
            
            viewDidLoad: function () {
            self.super().viewDidLoad()
            
            require('UIColor')
            self.view().setBackgroundColor(UIColor.whiteColor())
            
            self.setTitle("新页面")
            
            self.createUI()
            }
            })

defineClass('NewController:UIViewController', {
            
            createUI: function () {
            self.createLabel()
            self.createButton()
            self.createImageView()
            },
            
            createLabel: function () { //创建 Label
            require('UIColor', 'UILabel','ConstraintViewDSL')
            
            var label = UILabel.alloc().initWithFrame({
                                                      x: 50,
                                                      y: 80,
                                                      width: 200,
                                                      height: 50
                                                      })
            label.setText("Label 新增测试")
            label.setTextAlignment(1) //通过反查代码得知 NSTextAlignmentCenter 的值为'1'
            label.setBackgroundColor(UIColor.redColor())
            label.setTextColor(UIColor.whiteColor())
            
            self.view().addSubview(label)
            },
            
            createButton: function () { //创建 Button
            require('UIColor', 'UIButton')
            
            var button = UIButton.alloc().initWithFrame({
                                                        x: 50,
                                                        y: 200,
                                                        width: 150,
                                                        height: 50
                                                        })
            button.setTitle_forState("Buton 点击弹出", 0) //通过反查代码得知 UIControlStateNormal 的值为'0'
            button.setBackgroundColor(UIColor.blueColor())
            button.addTarget_action_forControlEvents(self, "buttonClick", 1 << 6); //UIControlEventTouchUpInside的值是1<<6
            
            self.view().addSubview(button)
            },
            buttonClick: function () { //按钮点击方法
            var alert = require('UIAlertController').alertControllerWithTitle_message_preferredStyle("Alert", "弹出 Alert", 1) //UIAlertControllerStyleAlert通过反查源码值为1
            
            var cancelAction = require('UIAlertAction').actionWithTitle_style_handler("确定", 1, null) //UIAlertActionStyleCancel通过反查源码值为1
            
            alert.addAction(cancelAction);
            self.presentViewController_animated_completion(alert, YES, null);
            },
            
            createImageView: function () {//创建 ImageView
            require('UIImageView','UIImage')
            
            var imageView = UIImageView.alloc().initWithFrame({
                                                              x: 50,
                                                              y: 350,
                                                              width: 200,
                                                              height: 200
                                                              })
            
            imageView.setImage(UIImage.imageNamed("icon"))
            self.view().addSubview(imageView)
            },
            })
