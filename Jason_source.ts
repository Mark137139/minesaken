/**
 * Tags:
 * 
 * "minesaken_killer": The killer
 * 
 * "minesaken_survivor": A survivor
 */
/**
 * Cooldown ticks
 */
player.onItemInteracted(ECHO_SHARD, function () {
    if (gashing_debounce > 0) {
        music.playSound(Sound.VillagerNo)
    } else {
        gashing_debounce = 45
        player.execute(
        "damage @e[r = 2, tag = minesaken_survivor] 10 magic"
        )
    }
})
player.onItemInteracted(NETHERITE_SWORD, function () {
    if (beheading_debounce > 0) {
        music.playSound(Sound.VillagerNo)
    } else {
        beheading_debounce = 25
        player.execute(
        "damage @e[r = 2, tag = minesaken_survivor] 5 magic"
        )
        player.execute(
        "effect @e[r = 2,tag = minesaken_survivor] slowness 5 2"
        )
        player.execute(
        "effect @e[r = 2,tag = minesaken_survivor] blindness 10 2"
        )
        music.playSound(Sound.Fizz)
    }
})
player.onItemInteracted(GOLD_NUGGET, function () {
    if (raging_debounce > 0) {
        music.playSound(Sound.VillagerNo)
    } else {
        raging_debounce = 30
        music.playSound(Sound.Thunder)
        mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 14, 2)
        mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 14, 2)
        for (let index = 0; index < 14; index++) {
            mobs.spawnParticle(DRIP_LAVA, posLocal(0, 1.4, 0.3))
        }
    }
})
loops.runInBackground(function () {
    while (true) {
        loops.pause(1000)
        player.execute(
        "title @s actionbar Raging Pace cooldown: " + raging_debounce + "s | Beheading cooldown: " + beheading_debounce + "s | Gashing Wound cooldown: " + gashing_debounce + "s"
        )
        if (raging_debounce > 0) {
            raging_debounce += -1
        }
        if (beheading_debounce > 0) {
            beheading_debounce += -1
        }
        if (gashing_debounce > 0) {
            gashing_debounce += -1
        }
    }
})
let raging_debounce = 0
let beheading_debounce = 0
let gashing_debounce = 0
gashing_debounce = 0
beheading_debounce = 0
raging_debounce = 0
player.execute(
"tag @e remove minesaken_killer"
)
player.execute(
"tag @e remove minesaken_survivor"
)
player.execute(
"tag @e add minesaken_survivor"
)
player.execute(
"tag @s remove minesaken_survivor"
)
player.execute(
"tag @s add minesaken_killer"
)
