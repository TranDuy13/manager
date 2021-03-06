const Schedule = require('../models/Schedule')
const User = require('../models/User')


const getAllSchedule = async () => {
    try {
        const schedule = await Schedule.find({})
        // console.log(currentSchedule)
        return {
            message: 'Successfully get all schedule',
            success: true,
            data: schedule
        }
    } catch (err) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}
const getScheduleByWeek = async body => {
    try {
        const schedule = await Schedule.find({date: body})
        return {
            message: 'Successfully get schedule by week',
            success: true,
            data: schedule
        }
    } catch (err){
        return{
            message: 'An error occurred',
            success: false
        }
    }
}

const getSchedule = async id => {
    try {
        const currentSchedule = await Schedule.findById(id)

        return {
            message: 'Successfully get Schedule',
            success: true,
            data: currentSchedule
        }
    } catch (error) {

        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const createSchedule = async body => {
    try {
        const newSchedule = new Schedule(body)
        await newSchedule.save()
        return {
            message: 'Successfully create Schedule',
            success: true,
            data: newSchedule
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getEmployeeSchedule = async (id) => {
    try {
        const currentSchedule = Schedule.findById(id)
        if (!currentSchedule) {
            return {
                message: 'An error occurred',
                success: false
            }
        }
        const employeeOfSchedule = currentSchedule.arrEmployee

        return {
            message: 'Successfully get Employee',
            success: true,
            data: employeeOfSchedule
        }

    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

// const updateSchedule = async (id, body) => {
//     try {
//         const idNewEmployee = body.employees
//         // console.log(idNewEmployee)
//         const existSchedule = await Schedule.findOne({ _id: id })
//         // console.log(existSchedule.employees)
//         if (!existSchedule) {
//             return {
//                 message: 'Schedule not exist',
//                 success: false
//             }
//         }
//         const newEmployeeArr = existSchedule.employees.concat(idNewEmployee)
//         // console.log('current class', newEmployeeArr)
//         const updateSchedule = await Schedule.findByIdAndUpdate(id, { $set: { employees: newEmployeeArr } })
//         // await existSchedule.updateOne({ _id: id }, body)
//         return {
//             message: 'Successfully update Schedule',
//             success: true,
//             data: body
//         }
//     } catch (error) {
//         return {
//             message: 'An error occurred',
//             success: false
//         }
//     }
// }

// 
const updateSchedule = async (id, body)=>{
    try {
        const idSchedule = await User.findById(id)
        const scheduleOfDate = await Schedule.find({},{date : body, _id : idSchedule})
        if(!scheduleOfDate){
            return {
                message : 'Schedule not exist',
                success: false
            }
        }

    }catch(err){
        
    }
}

const enrollSchedule = async (id, body) => {
    try {
        const idSchedule = body.schedules
        const existUser = await User.findOne({ _id: id })
        if (!existUser) {
            return {
                message: 'User not exist',
                success: false
            }
        }
        const newScheduleArr = existUser.employee.concat(idSchedule)
        // console.log(newScheduleArr)
        const updateSchedule = await User.findByIdAndUpdate(id, { $set: { employee: newScheduleArr } })
        return {
            message: 'Successfully enroll Schedule',
            success: true,
            data: updateSchedule
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const deleteSchedule = async id => {
    try {
        const existSchedule = await Schedule.findOne({ _id: id })
        if (!existSchedule) {
            return {
                message: 'Schedule not exist',
                success: false
            }
        }

        await Schedule.deleteOne({ _id: id })

        return {
            message: 'Successfully delete Schedule',
            success: true
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}




module.exports = {
    createSchedule,
    getSchedule,
    getAllSchedule,
    updateSchedule,
    getScheduleByWeek,
    deleteSchedule,
    // getScheduleByAuthor,
    enrollSchedule,
    getEmployeeSchedule,
    // updateScheduleDetail
}
