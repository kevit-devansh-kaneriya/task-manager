require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('650c193efcd1993644c74740').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async(id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('650c26d6fcd1993644c74744').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})