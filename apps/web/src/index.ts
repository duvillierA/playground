// - All items have a SellIn value which denotes the number of days we have to sell the item (number)
// - All items have a Quality value which denotes how valuable the item is (range?)
// - At the end of each day our system lowers both values for every item
// - Once the sell by date has passed, Quality degrades twice as fast
// - The Quality of an item is never negative (NUMBER.POSITIVE)
// - "Aged Brie" actually increases in Quality the older it gets
// - The Quality of an item is never more than 50
// - "Sulfuras, Hand of Ragnaros", being a legendary item, never has to be sold or decreases in Quality
// - "Backstage passes to a TAFKAL80ETC concert", like aged brie, increases in Quality as its SellIn value approaches ;
// Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert


export const ItemNames = {
  'concert': 'Backstage passes to a TAFKAL80ETC concert',
  'sufulras': 'Sulfuras, Hand of Ragnaros',
  'brie': 'Aged Brie'
} as const

type ItemProps = { name: string, sellIn: number, quality: number}

class Item {
  constructor({ name, sellIn, quality}: ItemProps){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  public update() {
    const sellIn = this.sellIn
    const quality = this.quality
    switch(this?.name){
      case ItemNames['brie']: {
        return {
          name: this.name,
          sellIn: this.decreaseSellIn(),
          quality: sellIn < 0 ? this.increaseQuality(quality) : this.decreaseQuality(),
        }
      }
      case ItemNames['concert']: {
        return {
          name: this.name,
          sellIn: this.decreaseSellIn(),
          quality: this.handleConcertQuality(),
        }
      }
      case ItemNames['sufulras']: {
        return {
          name: this.name,
          sellIn: sellIn,
          quality: quality,
        }
      }
      default: {
        return {
          name: this.name,
          sellIn: this.decreaseSellIn(),
          quality: this.decreaseQuality(),
        }
      }
    }

  }
  private handleConcertQuality() {
    if (this.sellIn === 0) {
      return this.handleQuality(0)
    } else if (this.sellIn < 5 ) {
      return this.increaseQuality(3)
    } else if (this.sellIn < 10 ) {
      return this.increaseQuality(2)
    }
    else {
      return this.decreaseQuality(this.quality)
    }
  }
  private decreaseSellIn(count = 1) {
    return this.handleSellIn(this.sellIn - count)
  }
  private decreaseQuality(count = 1) {
    return this.handleQuality(this.quality - count)
  }
  private increaseQuality(count= 1) {
    return this.handleQuality(this.quality + count)
  }
  private handleQuality(quality: ItemProps['quality']) {
    return Math.min(0, Math.max(quality, 50))
  }
  private handleSellIn(sellIn: ItemProps['sellIn']) {
    return sellIn
  }
  public readonly name: string
  public sellIn: number
  public quality: number
}

class Shop {
  constructor(items: InstanceType<typeof Item>[]){
    this.items = items ?? [];
  }
  public updateItems() {
    return this.items.map((item) => item.update())
  }
  public items: InstanceType<typeof Item>[]
}

module.exports = {
  Item,
  Shop
}
