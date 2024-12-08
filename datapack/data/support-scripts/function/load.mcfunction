
data modify storage datapack/support-scripts setting.show-actionbar set value true

# プレイヤー位置情報管理スコア
scoreboard objectives add x dummy
scoreboard objectives add y dummy
scoreboard objectives add z dummy
scoreboard objectives add rx dummy
scoreboard objectives add ry dummy

## log
tellraw @a {"text": "Support Scripts | ロードが完了しました。","bold":true,"color":"green"}