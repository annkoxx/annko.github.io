function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "喵,欢迎光临猫のレインボー島ヾ(✿ﾟ▽ﾟ)ノ"
  }).then(function() {
    botui.message.add({
      delay: 1100,
      content: "我是岛主Annko(≖ᴗ≖)✧"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "你也可以叫我岛主(不是某岛国啦)！"
      }).then(function() {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "我想知道更多关于猫のレインボー島的故事!",
            value: "sure"
          }, {
            text: "好的，就这样吧，拜拜！😭",
            value: "skip"
          }]
        }).then(function(a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  var sure = function() {
      botui.message.add({
        delay: 2000,
        content: "ﾞ撒花ヾ(◍°∇°◍)ﾉ！"
      }).then(function() {
        secondpart()
      })
    },
    end = function() {
      botui.message.add({
        delay: 2000,
        content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
      })
    },
    secondpart = function() {
      botui.message.add({
        delay: 3000,
        content: "关于猫のレインボー島,建于19年,是从WordPress转到现在的Hexo。纯分享,纯交友。就我们的口号：分享|创新|友爱(´▽`)ﾉ "
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "那么为什么好端端的WordPress不用，要用Hexo呢？当然是WordPress太简单且服务器不好维护，Hexo建到GitHub，好维护，各有利弊吧（￣︶￣）↗"
        }).then(function() {
          botui.message.add({
            delay: 2000,
            content: "清单也搞了一些自己收藏的网站静态码，需要的小伙伴可以到留言板留言询问哦！(=ﾟωﾟ)ﾉ"
          }).then(function() {
            botui.message.add({
              delay: 2000,
              content: "清单（当然包括一些长大成人的猫看的东西）(✧◡✧)"
            }).then(function() {
              botui.message.add({
                delay: 2000,
                content: "切记,小猫猫没长大不能看喔(〃'▽'〃)"
              }).then(function() {
                botui.message.add({
                  delay: 2000,
                  content: "至于猫岛啥时候更新?当然是工作日啦，上班摸鱼inginginginging..."
                }).then(function() {
                  botui.action.button({
                    delay: 2000,
                    action: [{
                      text: "那么为什么叫猫のレインボー島呢？",
                      value: "why-mashiro"
                    }]
                  }).then(function(a) {
                    thirdpart()
                  })
                })
              })
            })
          })
        })
      })
    },
    thirdpart = function() {
      botui.message.add({
        delay: 1e3,
        content: "因为大概所以可能或许每个猫都有一个心中的彩虹岛吧！(๑*◡*๑)"
      }).then(function() {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "⊙▃⊙，那英文名为什么叫Annko呢？",
            value: "why-cat"
          }]
        }).then(function(a) {
          fourthpart()
        })
      })
    },
    fourthpart = function() {
      botui.message.add({
        delay: 3000,
        content: "Annko出自于一个猫给我说的单词（日语口音），意思也就是红豆的意思啦。也和域名同名Annko.cn，是不是很好记住，快夸小猫给我找的好单词(◕ᴗ◕✿)"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "因为之前有看过红豆相思，所以大家看到Annko要想到我(ﾟ▽ﾟ*) "
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "方便透露一下真名吗？(⊙x⊙;)",
              value: "why-domain"
            }]
          }).then(function(a) {
            fifthpart()
          })
        })
      })
    },
    fifthpart = function() {
      botui.message.add({
        delay: 5000,
        content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "只是一介无名小卒而已^_^"
        })
      })
    }
}
