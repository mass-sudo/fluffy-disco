ServerEvents.recipes((event) => {

  // logs all loaded items from all mods onto thee console
  /* Ingredient.all.itemIds.forEach(item => {
    console.log('ITEM: ', item);
  }); */

  event.shaped(Item.of("create:empty_blaze_burner", 1), [" A ", "ABA", " A "], {
    A: "create:iron_sheet",
    B: "minecraft:magma_block",
  });

  event.shaped(Item.of("create:blaze_burner", 1), ["AAA", " B ", "   "], {
    A: "minecraft:blaze_rod",
    B: "create:empty_blaze_burner",
  });
});
