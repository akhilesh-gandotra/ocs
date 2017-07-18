const Schema = Mongoose.Schema;

const userSchema = new Schema({
  name        :   String,
  phoneNo     :   { type : String, required : true , index : true, unique : true},
  email       :   { type : String, required : true , index : true, unique : true},
  address     :   String,
  role        : [{
        type: String,
        validate: {
            isAsync: false,
            validator:  (v) => {
                return v.length > 0;
            },
            message: 'Atleast 1 role is required'
        },
        enum : ['ADMIN', 'TEACHER', 'PARENT', 'STUDENT', 'STAFF'],
        required: [true, 'User\'s role is required']
    }]
},{
    timestamps : true
});

let UserModel = Mongoose.model('user', userSchema);

module.exports = UserModel;