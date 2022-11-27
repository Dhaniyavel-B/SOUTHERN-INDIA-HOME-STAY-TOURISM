//const { compare } = require("bcryptjs");
const mysql = require("mysql");

const readline = require("readline");

const db = mysql.createConnection({
    host: "localhost",
    user: "danny1",
    password:"password" ,
    database:"login_crud" ,
  });
  //admin
  exports.admin_login=async(req,res)=>{
    //console.log(req.body);
    try{
        const{User_id,Password}=req.body;
        if(!User_id || !Password){
            return res.status(400).render("login",{msg:"Please enter your Email and Password", msg_type:'error'});
        }
    
        db.query('select * from Reg_users where User_id=?',[User_id],async(error,result)=>{
            console.log(result);
            if(User_id == result[0].User_id){
                //return res.render("login",{msg:"Success"});
                return res.redirect('/admin_home');
            }
            });
    
    }catch(error){
        console.log(error);
    }
    };
    //owner

    exports.owner_reg=(req,res)=>{
        console.log(req.body);
        const{First_name,Last_name,Contact_no,Email_id,owner_id,Password}=req.body;
        db.query('select owner_id,Password from Reg_owner where owner_id=?',[owner_id,Password,First_name,Last_name,Contact_no,
            Email_id],(error,result)=>{
            if(error){
                throw error;
            }
    
            if(result.length>0){
                return res.render('owner_reg',{msg:'owner_id already taken'})
            }
    
            db.query('insert into Reg_owner set ?',{owner_id:owner_id, Password:Password,First_name:First_name,Last_name:Last_name,
                Contact_no:Contact_no,Email_id:Email_id},(err,result)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(result);
                    return res.render('owner_reg',{msg:"User Registration success"});
                }
            });
        });
    };

    exports.owner_login=async(req,res)=>{
    try{
        const{owner_id,Password}=req.body;
        if(!owner_id || !Password){
            return res.status(400).render("owner_login",{msg:"Please enter your Email and Password", msg_type:'error'});
        }
    
        db.query('select * from Reg_owner where owner_id=?',[owner_id],async(error,result)=>{
            console.log(result);
            if(owner_id == result[0].owner_id){
                //return res.render("login",{msg:"Success"});
                return res.redirect('/owner');
            }
            });
    
    }catch(error){
        console.log(error);
    }
    };

  exports.owner=(req,res)=>{
    try{
        const{owner_id,Details}=req.body;
        if(!owner_id || !Details){
            return res.status(400).render("login",{msg:"Please enter your Email and Password", msg_type:'error'});
        }
        db.query('select * from Reg_owner where owner_id=?',[owner_id],async(error,result)=>{
            console.log(result);
            if(owner_id == result[0].owner_id){
                //return res.render("login",{msg:"Success"});
                console.log('success')
                //return res.redirect('/owner');
            }
            });
}catch(error){
    console.log(error);
}
};

exports.login=async(req,res)=>{
try{
    const{User_id,Password}=req.body;
    if(!User_id || !Password){
        return res.status(400).render("login",{msg:"Please enter your Email and Password", msg_type:'error'});
    }

    db.query('select * from Reg_users where User_id=?',[User_id],async(error,result)=>{
       console.log(result);
        if(User_id == result[0].User_id){
            //return res.render("login",{msg:"Success"});
            return res.redirect('/tourism');
        }
        });

}catch(error){
    console.log(error);
}
};

exports.register=(req,res)=>{
    //res.send("Form submited");
    console.log(req.body);
    /*
    const First_name = req.body.First_name
    const Last_name = req.body.Last_name
    const Contact_no = req.body.Contact_no
    const Email_id = req.body.Email_id
    const User_id = req.body.User_id
    const Password = req.body.Password
    console.log(First_name)
    console.log(Last_name)
*/
    const{First_name,Last_name,Contact_no,Email_id,User_id,Password}=req.body;
    db.query('select User_id,Password from Reg_users where User_id=?',[User_id,Password,First_name,Last_name,Contact_no,
        Email_id],(error,result)=>{
        if(error){
            throw error;
        }

        if(result.length>0){
            return res.render('register',{msg:'User_id already taken'})
        }

        db.query('insert into Reg_users set ?',{User_id:User_id, Password:Password,First_name:First_name,Last_name:Last_name,
            Contact_no:Contact_no,Email_id:Email_id},(err,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log(result);
                return res.render('register',{msg:"User Registration success"});
            }
        });
    });
};