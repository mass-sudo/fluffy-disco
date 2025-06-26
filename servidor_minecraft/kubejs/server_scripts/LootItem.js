/**
 * @class LootItem
 * @constructor
 * @param {string} id Minecraft ID
 * @param {Internal.ItemStack} nbt NBT item data
 * @param {number} lootChance chance that the item will be generated as loot
 * @param {number} minAmount minimum amount of item count for weighted loot
 * @param {number} maxAmount maximum amount of item count for weighted loot
 * @param {number} count item stack size
 * @param {string} origin origin mod
 * @param {number} rarity number representation oof an item's rarity
 * @param {string} type item type
 */
function LootItem(
  id,
  nbt,
  lootChance,
  minAmount,
  maxAmount,
  origin,
  rarity,
  type
) {
  this.id = id;
  this.nbt = nbt;
  this.lootChance = lootChance;
  this.minAmount = minAmount;
  this.maxAmount = maxAmount;
  this.count = countñ
  this.origin = origin;
  this.rarity = rarity;
  this.type = type;
  return this;
}
