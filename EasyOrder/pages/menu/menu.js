
Page({
  data: {
    selClassifyId: 0, //选中的当前分类ID
    allItemCount: 0,  //已点数量
    totalPrice: 0.00, //总价
    /**分类列表 */
    classifyArray: [
      {
        id: 0,
        name: "锅底"
      },
      {
        id: 1,
        name: "肉类"
      },
      {
        id: 2,
        name: "菌类"
      },
      {
        id: 3,
        name: "蔬菜类"
      },
      {
        id: 4,
        name: "豆制品"
      },
      {
        id: 5,
        name: "海鲜"
      },
      {
        id: 6,
        name: "饮料"
      }
      
      ],
      /**菜单列表 */
    menuItemArray: [
      {
        id:0,
        name:'清汤麻辣鸳鸯锅',
        image: '../../images/fire.jpg',
        price: '49.00',
        unit: '份',
        count: 0
      },
      {
        id:1,
        name: '毛肚',
        image: '../../images/maodu.jpg',
        price: '29.00',
        unit: '份',
        count: 0
      }
    ],

    beanArray: [
      {
        id:2,
        name: '清汤麻辣鸳鸯锅',
        image: '../../images/fire.jpg',
        price: '49.00',
        unit: '份',
        count: 0
      }
    ]
  },
  /**菜单分类点击 */
  classifyTap: function(e){
    var classifyId = e.currentTarget.dataset.classifyid;
    console.log(classifyId)
    this.setData({
      selClassifyId: classifyId,
      menuItemArray: this.data.beanArray
    })
  },
  /**数量编辑 */
  countEdit: function(e){
    var menu_item_id = e.currentTarget.dataset.menu_item_id;
    /**判断增减 */
    var edit = e.currentTarget.dataset.edit;
    var menuItemArray = this.data.menuItemArray;

    var totoalCount = 0;
    var totalPrice = 0.00;
    for(var i in menuItemArray){
      var item = menuItemArray[i];
      if (item.id==menu_item_id){
        var count = item.count;
        if (edit == 1) {
          count += 1;
        }else{
          count -= 1;
          if (count == -1) {
            count = 0;
          }
        }
        item.count=count;
        // menuItemArray[i]=item;
      }

      totoalCount += item.count;
      totalPrice += item.count * item.price;
    }
    
    this.setData({
      allItemCount: totoalCount,
      totalPrice: totalPrice.toFixed(2),
      menuItemArray: menuItemArray
    })
    
  },
  countReduce: function(e){
    console.log(e);
  }
})