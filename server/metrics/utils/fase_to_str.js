
const assign_fase=(num_fase)=>{
    if(num_fase===128)return "Sientoventiochoavos"
    if(num_fase===64)return "Sesentaicuatroavos"
    if(num_fase===32)return "Treintaidosavos"
    if(num_fase===16)return "Diesiseisavos"
    if(num_fase===8)return "Octavos de Final"
    if(num_fase===4)return "Cuartos de Final"
    if(num_fase===2)return "Semifinal"
    if(num_fase===1)return "Final"
}





module.exports = {
  to_str: (arr_fase) => {
    if (arr_fase.length === 1) {
        return assign_fase(arr_fase[0])
    }
    const new_fase_arr=[]
    arr_fase.forEach(fase => {
        new_fase_arr.push(assign_fase(fase))
    });
    return new_fase_arr
  },
};
