
// Video-Conference: L1 of Programmer (Dev)-UI-React.js
//Persistent Systems 14/02/2023

var merchants = [
    {
      name: 'Joes\'s Couch World',
      state: 'UT',
      products: ['furniture', 'appliance']
    },
    {
      name: 'The Couch Store',
      state: 'UT',
      products: ['furniture']
    },
    {
      name: 'Frisco Tire, Wheel and Mini-Fridge',
      state: 'CA',
      products: ['auto', 'appliance']
    },
    {
      name: 'Take a Seat',
      state: 'UT',
      products: ['couch']
    }
  ];
  
  //Approach 01
  // function filterMerchants(filterA, merchants){
  //   var filtered = []
  //   var filter = filterA.toLowerCase()
  //   //console.log(filter)
  //   for(var i=0; i<merchants.length; i++){
  //       if(merchants[i].state.toLowerCase() == filter){
  //           filtered.push(merchants[i].name)
  //       }
  //       //console.log(merchants[i].products.indexOf(filter))
  //       if(merchants[i].products.indexOf(filter) > -1){
  //           filtered.push(merchants[i].name)
  //       }
  //   }
  //  return filtered;
  // }

  //Approach 02
  // function filterMerchants(filterA, merchants){
  //   var filtered = []
  //   var keyValue = filterA.toLowerCase();
  //   merchants.filter((item) => {if(item.state.toLowerCase() == keyValue) filtered.push(item.name)});
  //   merchants.filter((item) => {if(item.products.indexOf(keyValue) > -1) filtered.push(item.name)})
  //   return filtered;
  // }

  //Approach 03
  // function filterData(searchText, array){
  //   const result = array.filter((item)=>item.state === searchText).map((item)=> item.name)
  //   return result;
  // }

  //   function filterData(props,searchText, array){
  //     //const result = array.filter((item)=>item[props] === searchText).map((item)=> item.name)
  //     let temArray =[]
  //    array.forEach((item)=>{
  //        if(Array.isArray(item[props])){
  //            if(item[props].includes(searchText)){
  //                temArray.push(item)
  //            }
  //        }else{
  //            temArray = array.filter((item)=>item[props] === searchText)
  //        }
  //    })
  //    return result = temArray.map((item)=> item.name)
  //   }
  
  // console.log(filterData('state','UT', merchants))
  // console.log(filterData('products','appliance', merchants))
  // console.log(filterData('products','auto', merchants))

  
  
  console.log( filterMerchants( 'UT', merchants ) );
  // Should return ['Joes\'s Couch World', 'The Couch Store', 'Take a Seat']
  
  
  console.log( filterMerchants( 'appliance', merchants ) );
  // Should return ['Joes\'s Couch World', 'Frisco Tire, Wheel and Mini-Fridge']
  
  
  console.log( filterMerchants( 'Auto', merchants ) );
  // Should return ['Frisco Tire, Wheel and Mini-Fridge']