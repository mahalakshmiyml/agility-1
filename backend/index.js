const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const JWT = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    credentials: true,
  })
);

var db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

app.post("/register", (req, res) => {
  const body = req.body;

  if (body.password !== body.password_confirm) {
    res.status(400).send({
      message: "Password do not match",
    });
  }

  bcrypt.hash(body.password, 12, (err, hash) => {
    db.query(
      "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
      [body.firstname, body.lastname, body.email, hash],
      (err, result) => {
        if (err) {
          res.status(400).send({ err: err, message: "Please Try again" });
        } 
        if (result) {
          res.status(200).send({ message: "Registered successfully" });
        } else {
          res.status(400).send({ err: err, message: "Please Try Again" });
        }
      }
    );
  });
});

app.post("/login", (req, res) => {
  db.query(
    "SELECT * FROM user where email = ?",
    req.body.email,
    (err, result) => {
      if (err) {
        res.status(400).send({ message: err.message });
      }

      if (result.length > 0) {
        // res.status(200).send({message: result});
        bcrypt.compare(
          req.body.password,
          result[0].password,
          (err, response) => {
            if (!response) {
              res.status(400).send({ message: "Invalid Password" });
            } else {
              // res.status(200).send({message: "Success"})
              const id = result[0].id;
              const token = JWT.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: "30s",
              });
              const refreshToken = JWT.sign(
                { id },
                process.env.REFRESH_SECRET,
                {
                  expiresIn: "1w",
                }
              );

              res.cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000, //1 day
              });

              res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000, //7 day
              });

              res.status(200).send({ message: "Success" });
            }
          }
        );
      } else {
        res.status(400).send({ message: "Invalid Email" });
      }
    }
  );
});

app.get("/login", (req, res) => {
  try {
    const cookie = req.cookies["token"];

    const payload = JWT.verify(cookie, process.env.JWT_SECRET);

    if (!payload) {
      res.status(400).send({ message: "Unauthorized" });
    }

    db.query("select firstname, lastname, email from user where id = ?", payload.id, (err, result) => {
      if (err) {
        res.status(400).send({ message: "Unauthorized" });
      }
      if (result.length > 0) {
        // const {password, ...result} = result;
        res.status(200).send({ message: "success", user: result})
      } else {
        res.status(400).send({ message: "Unauthorized" });
      }
    });
  } catch (e) {
    res.status(401).send({ message: "Unauthorized" });
  }
});

app.post('/refresh', (req, res) => {
    try {
        const cookie = req.cookies['refreshToken'];

        const payload = JWT.verify(cookie, process.env.REFRESH_SECRET)

        if (!payload) {
            res.status(400).send({ message: "Unauthorized"});
        }

        const token = JWT.sign({
            id: payload.id,
        }, process.env.JWT_SECRET, {
            expiresIn: '30s'
        });

        res.cookie('token', token, { 
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //1day
        })

        res.status(200).send({ message: "success"})

    } catch (e) {
        res.status(401).send({ message: "Unauthorized" });
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '' , { maxAge: 0 });
    res.cookie('refreshToken', '' , { maxAge: 0 });

    res.send({message: 'success'})
})

app.get('/getdata', (req, res) => {
  db.query('select * from customslider', (err, result) =>{
    if (err) {
      res.status(400).send({message: "Something went wrong, please try again"});
    }
    if (result) {
      res.status(200).send({message: "success", data: result});
    }
  })
})

app.get('/coachingdata', (req, res) => {
  db.query('select * from mentoring', (err, result) =>{
    if (err) {
      res.status(400).send({message: "Something went wrong, please try again"});
    }
    if (result) {
      res.status(200).send({message: "success", data: result});
    }
  })
})

app.get('/mentoringdata', (req, res) => {
  db.query('select * from promotion', (err, result) =>{
    if (err) {
      res.status(400).send({message: "Something went wrong, please try again"});
    }
    if (result) {
      res.status(200).send({message: "success", data: result});
    }
  })
})

app.get('/courseschedule/:name', (req, res) => {
  const name = req.params.name;
  // console.log(name);

  db.query("SELECT * FROM scheduletime where course = ?", name, (err, result) => {
    if (err) {
      res.status(400).send({message: "Something went wrong, please try again", err: err.message});
    }
    if (result) {
      res.status(200).send({message: "success", data: result});
    }
  })
})

app.listen(process.env.PORT, () => {
  // console.log("Port No", process.env.PORT);
});
