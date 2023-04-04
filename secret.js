
const user_information ={
    username:process.env['Mongo_Username'],
    password:process.env['Mongo_Password']
}
const mongo_username =user_information.username
console.log(mongo_username)
//export default user_information;