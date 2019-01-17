// 业务场景：先拉取接口一的数据，然后根据拉取数据判断是否输出此数据，
// 若是条件满足则进行接口二,并处理接口二的数据

// 方案一：使用原生Promise回调处理

const handleClick = () => {
  return getJSON_1()
      .then(data => {
        if(!data.needNextRequst) return;
        return getJSON_2()
           .then(
             res => {
               this.setState({
                 a: res.a,
                 b: res.b
                 // ....data同步到View State 逻辑
               })
             },
             err => {
               console.log('JSON_2', err.message)
             }
           )
      }).catch(err){
        console.error('JSON_1 Error is', err.message)
      }
}

// 方案二： 采用语法糖async/await,好处是代码简洁 + 可以在控制台打断点 (想象一下业务场景复杂时候，特定时候如果不可以打断点多么不方便)

const handleClick = async() => {
  try {
    const data_1 = await getJSON_1();
    if(!data.needNextRequst) return;
    const data_2 = await getJSON_2();
    this.setState({
      a: data_2.a,
      // ...data同步到View State 逻辑
    })
  }catch (e) {
    console.error('JSON_1 Error is', err.message)
  }
}
// 上线try{}catch(){}会将整个error stack 里面的error导出，供使用者处理error
