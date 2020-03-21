npm init -y 

npminstall
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mssql": "^6.2.0",
    "winston": "^2.4.0"
    
ขั้นตอนการใช้งานโค้ด

1.git clone git@github.com:pond18143/MVC1503.git

2.npm install

3.run nodeserver.js

Model คือ คือส่วน Business Model หรือส่วนที่ติดต่อกับฐานข้อมูล
Controller คือ ส่วนควบคุมและรับ request จาก user มาและไปดึงข้อมูลจาก Model มาเพื่อแสดงผลข้อมูลกลับไปยัง user ที่ส่วน View
View คือ ส่วนที่แสดงผลข้อมูล
