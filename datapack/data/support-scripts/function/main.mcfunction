# プレイヤー位置情報管理
execute as @a store result score @s x run data get entity @s Pos[0] 1
execute as @a store result score @s y run data get entity @s Pos[1] 1
execute as @a store result score @s z run data get entity @s Pos[2] 1
execute as @a store result score @s rx run data get entity @s Rotation[0] 1
execute as @a store result score @s ry run data get entity @s Rotation[1] 1

execute if data storage datapack/support-scripts setting.show-actionbar run execute as @a at @s run title @s actionbar [{"text": "x: ", "bold": true, "color": "red" } , {"score": {"objective": "x","name": "@s"}, "bold": true, "color": "red"},{"text": " y: ", "bold": true, "color": "green" } , {"score": {"objective": "y","name": "@s"}, "bold": true, "color": "green"},{"text": " z: ", "bold": true,"color": "blue" } , {"score": {"objective": "z","name": "@s"},"bold": true, "color": "blue"},{"text": " rx: ","bold": true, "color": "yellow" } , {"score": {"objective": "rx","name": "@s"}, "bold": true, "color": "yellow"},{"text": " ry: ","bold": true, "color": "gold" } , {"score": {"objective": "ry","name": "@s"},"bold": true, "color": "gold"}]