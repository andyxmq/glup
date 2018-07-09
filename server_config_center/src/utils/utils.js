/**
 * @description 解析URL模板 栗子：/a/{b} /a/123
 * @param {*} url 
 * @param {*} params 
 */

export function resolveUrlTpl(url,params){
  return url.replace(/\{\w+\}/gi,function(section){
    let rmBraceSection = section.substring(1,(section.length-1));
    return params[rmBraceSection];
  });
}

/**
 * @description create action
 * @param {*} type action type
 * @param {*} data pass data
 */
export function ActionCreator(type,data){
  return {
    type,
    payload: { ...data }
  }
}

/**
 * @description 找出原始数据
 * @param {*} originalData 原始数字
 * @param {*} key 目标字段
 * @param {*} value 目标字段的值
 * @return {*} Object
 */
export function findTargetRecord(originalData,key,value){
  for(let i in originalData){
    let item = originalData[i];
    if(item[key] === value){
      return item;
    }
  }
}

/**
 * @description 对象的类型
 * @param {*} o 
 */
export function classOf(o){
  if(o===null) return "Null";
  if(o===undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8,-1)
}

/**
 * @description 判断两个对象简直对是否相等
 * @param {object} a 
 * @param {object} b 
 */
export function isEqual(a,b){
  if(a===b) return a !== 0 || 1/a === 1/b;
  if(a == null || b == null) return a === b;
  let classNameA = classOf(a),classNameB = classOf(b);
  if(classNameA !== classNameB){
    return false;
  }
  if(classNameA == 'Object'){
    let propsA = Object.getOwnPropertyNames(a),propsB = Object.getOwnPropertyNames(b);
    if(propsA.length != propsB.length){
      return false;
    }
    for(var i=0;i<propsA.length;i++){
      var propName=propsA[i];
      //如果对应属性对应值不相等，则返回false
      if(a[propName] !== b[propName]){
        return false;
      }
    }
    return true;
  }
  if(classNameA == 'Array'){
    return a.toString() == b.toString()?true: false;
  }
}