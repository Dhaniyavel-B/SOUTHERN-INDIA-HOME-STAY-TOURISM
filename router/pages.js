const { application } = require("express");
const express = require("express");
const router = express.Router();

  router.get("/",(req,res)=>{
    res.render("home");
  })

  router.get("/auth/admin_home",(req,res)=>{
    res.render("admin_home");
  })

  router.get("/admin_home",(req,res)=>{
    res.render("admin_home");
  })

  router.get("/auth/owner_login",(req,res)=>{
    res.render("owner_post");
  })

  router.get("/auth/owner_reg",(req,res)=>{
    res.render("owner_reg");
  })

  router.get("/auth/home",(req,res)=>{
    res.render("home");
  })
  
  router.get("/home",(req,res)=>{
      res.render("home");
  })
  
  router.get("/login",(req,res)=>{
    res.render("login");
  })
  
  router.get("/register",(req,res)=>{
    res.render("register");
  })
  
  router.get("/admin_login",(req,res)=>{
    res.render("admin_login");
  })
  
  router.get("/auth/login",(req,res)=>{
    res.render("login");
  })

  router.get("/tourism",(req,res)=>{
    res.render("tourism");
  })

  router.get("/owner",(req,res)=>{
    res.render("owner");
  })

  router.get("/owner_login",(req,res)=>{
    res.render("owner_login");
  })

  router.get("/owner_reg",(req,res)=>{
    res.render("owner_reg");
  })
  
  router.get("/owner/",(req,res)=>{
    res.render("owner");
  })

  router.get("/owner/owner_post",(req,res)=>{
    res.render("owner_post");
  })
  
  router.get("/owner/home",(req,res)=>{
    res.render("home");
  })
  
  router.get("/madurai/",(req,res)=>{
    res.render("madurai");
  })
  module.exports=router;