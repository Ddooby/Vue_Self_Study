function GoodsModel() {
    this.id = 0;
    this.name = '';
    this.address = '';
    this.price = '';
    this.likeCount = 0;
    this.isPurchase = '',
    this.category = '',
    this.description = '',
    this.image = '';
}

const getInstance = function(name, price, address, likeCount, isPurchase, category, description, image) {
    let instance = new GoodsModel();
    instance.name = name;
    instance.price = price;
    instance.address = address;
    instance.likeCount = likeCount;
    instance.isPurchase = isPurchase;
    instance.category = category;
    instance.description = description;
    instance.image = image;
    return instance;
}