EntityJSEvents.biomeSpawns(event => {
    // Apocalypse Now
    event.addSpawn(MOBS.apocalypseNow.cannibal, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 5);
    event.addSpawn(MOBS.apocalypseNow.hunter, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.apocalypseNow.military1, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 5);
    event.addSpawn(MOBS.apocalypseNow.military2, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 5);
    event.addSpawn(MOBS.apocalypseNow.militaryMedic, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 2, 5);
    event.addSpawn(MOBS.apocalypseNow.soldiers, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.apocalypseNow.soldier2, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);

    for (const [key, value] of Object.entries(MOBS.apocalypseNow.looters)) {
        event.addSpawn(value, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 3);
    }

    for (const [key, value] of Object.entries(MOBS.apocalypseNow.runners)) {
        event.addSpawn(value, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 3);
    }

    for (const [key, value] of Object.entries(MOBS.apocalypseNow.survivors)) {
        event.addSpawn(value, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    }

    for (const [key, value] of Object.entries(MOBS.apocalypseNow.walkers)) {
        event.addSpawn(value, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 5, 8);
    }

    for (const [key, value] of Object.entries(MOBS.apocalypseNow.hordes)) {
        event.addSpawn(value, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    }

    for (const [key, value] of Object.entries(MOBS.apocalypseNow.crawlers)) {
        event.addSpawn(value, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    }

    // Vanilla Zombies
    event.addSpawn(MOBS.minecraft.zombie, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 6);

    // Zombie Extreme
    event.addSpawn(MOBS.zombieExtreme.assassinBlackOps, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.boomer, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.chainsaw, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.clicker, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 3);
    event.addSpawn(MOBS.zombieExtreme.crawler, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.demolisher, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.devestated, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.divided, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.explosiveInfected, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.faceless, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.fetus, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.goon, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.infected, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 6);
    event.addSpawn(MOBS.zombieExtreme.infectedHazmat, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.infectedJuggernaut, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.infectedMilitary, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 4);
    event.addSpawn(MOBS.zombieExtreme.infectedPolice, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.inflated, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.military, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 2, 5);
    event.addSpawn(MOBS.zombieExtreme.nightHunter, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.parasite, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.zombieExtreme.ram, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.ratKing, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieExtreme.revived, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieExtreme.runner, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 6);
    event.addSpawn(MOBS.zombieExtreme.zeroPatient, BIOMES.overworld, SPAWN_WEIGHT.monsters.insanelyRare, 1, 1);

    // Zombie More
    event.addSpawn(MOBS.zombieMore.boomerZombie, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieMore.crawlerZombie, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieMore.explosiveZombie, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieMore.tankZombie, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);

    // Extinction Z
    event.addSpawn(MOBS.extinction.boomer, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.extinction.fallenSurvivor, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.extinction.goon, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.extinction.hunter, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.extinction.infectedBear, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.extinction.infectedHazmat, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.extinction.infectedMutated, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.extinction.infectedPolice, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 3);
    event.addSpawn(MOBS.extinction.infectedRiotGear, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1,2);
    event.addSpawn(MOBS.extinction.infectedSoldier, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.extinction.mercenary, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 2, 4);
    event.addSpawn(MOBS.extinction.parasite, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 3, 5);
    event.addSpawn(MOBS.extinction.patientZero, BIOMES.overworld, SPAWN_WEIGHT.monsters.insanelyRare, 1, 1);
    event.addSpawn(MOBS.extinction.runner, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 6);
    event.addSpawn(MOBS.extinction.runner2, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 5);
    event.addSpawn(MOBS.extinction.soldier, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.extinction.soldierClicker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.extinction.stalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.extinction.stalker2, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.extinction.traveler, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);

    // Zombie Island
    event.addSpawn(MOBS.zombieIsland.burningWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.zombieIsland.causticXWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieIsland.eatCourier, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieIsland.firefighterWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.zombieIsland.grenadierWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.hazmatWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.zombieIsland.incendiaryWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieIsland.insectSwarmWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.riotGearWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.zombieIsland.runner, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.runner1, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.runner2, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.runner3, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.runner4, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.shambler, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.shambler1, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.shambler2, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.shambler3, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.shambler4, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 2);
    event.addSpawn(MOBS.zombieIsland.shockingWalker, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 1);
    event.addSpawn(MOBS.zombieIsland.walker, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 3, 5);
    event.addSpawn(MOBS.zombieIsland.walker1, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 3, 5);
    event.addSpawn(MOBS.zombieIsland.walker2, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 6);
    event.addSpawn(MOBS.zombieIsland.walker3, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 4);
    event.addSpawn(MOBS.zombieIsland.walker4, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 2, 6);

    // TACZ Npcs
    event.addSpawn(MOBS.taczNpcs.scavUsec, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.taczNpcs.scavUsecArmored, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.taczNpcs.scavUsecPistol, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.taczNpcs.scavUsecPistolArmored, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.taczNpcs.terroristNoArmor, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.taczNpcs.terroristScav, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.taczNpcs.terroristScavPistol, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);
    event.addSpawn(MOBS.taczNpcs.terroristScavPistolArmored, BIOMES.overworld, SPAWN_WEIGHT.monsters.extremelyRare, 1, 3);

    // Mutant Monsters
    event.addSpawn(MOBS.mutantMonsters.mutantZombie, BIOMES.overworld, SPAWN_WEIGHT.monsters.rare, 1, 1);
});