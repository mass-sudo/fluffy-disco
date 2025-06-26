EntityJSEvents.biomeSpawns(event => {
    event.removeSpawn(MOBS.minecraft.phantom, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.spider, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.skeleton, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.pillager, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.vindicator, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.creeper, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.witch, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.enderman, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.minecraft.allay, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.zombieMore.cursedZombie, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.mutantMonsters.creeperMinion, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.mutantMonsters.mutantCreeper, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.mutantMonsters.mutantEnderman, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.mutantMonsters.mutantSkeleton, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.mutantMonsters.mutantSnowGolem, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.mutantMonsters.spiderPig, ['#minecraft:is_overworld']);
    event.removeSpawn(MOBS.mekanismAdditions.babyCreeper, ['#minecraft:is_overworld']);
});