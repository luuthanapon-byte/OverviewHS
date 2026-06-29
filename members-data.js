/* ============================================================
   ข้อมูลสมาชิกกลาง (members-data.js) — แหล่งข้อมูลจริงเพียงหนึ่งเดียวของเว็บ
   ทุกคนที่เปิด URL จะเห็นข้อมูลจากไฟล์นี้เหมือนกัน
   ------------------------------------------------------------
   MEMBERS_DATA_VERSION = เลขเวอร์ชันข้อมูล
     - baseline เริ่มต้น = 0 (ไม่ทับข้อมูลที่หัวหน้ากรอกไว้ในเครื่องตัวเอง)
     - เมื่อต้องการให้ "ทุกเครื่องเห็นข้อมูลเดียวกัน" ให้กดปุ่ม
       "บันทึกข้อมูลสมาชิก (สำหรับแพ็กส่ง)" ในหน้าจัดการสมาชิก
       ระบบจะสร้างไฟล์นี้ใหม่พร้อมเพิ่มเลขเวอร์ชันอัตโนมัติ → นำไปวางแทน แล้ว push ขึ้น GitHub
   ============================================================ */
window.MEMBERS_DATA_VERSION = 0;

window.SCANNED_MEMBERS = [
  { "name": "HaaS บริการเช่าใช้", "link": "members/HaaS บริการเช่าใช้/HS - Rental 2026 by Chanathip.S.html" },
  { "name": "Hardware ภาคตะวันออก", "link": "members/Hardware ภาคตะวันออก/index.html" },
  { "name": "Helpdesk Call", "link": "members/Helpdesk Call/แสดงข้อมูลสายโทรเข้า.html" },
  { "name": "Helpdesk Case", "link": "members/Helpdesk Case/แยกประเภทโปรแกรม.html" },
  { "name": "OnsiteValue", "link": "https://quotation-analytics.vercel.app/" },
  { "name": "PreventiveMaintenance", "link": "https://luuthanapon-byte.github.io/PM-CusS-Internationel/" },
  { "name": "Repair", "link": "https://repairman-analytics.vercel.app/" },
  { "name": "Robot ROI", "link": "members/Robot ROI/PUDU_Commercial_Dashboard.html" },
  { "name": "Robots", "link": "members/Robots/PUDU-Timeline-Dashboard.html" },
  { "name": "Time&Access Control", "link": "https://access-time-analytics.vercel.app/" }
];

window.SCANNED_MEMBERS_FULL = [
  { "name": "HaaS บริการเช่าใช้", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "members/HaaS บริการเช่าใช้/HS - Rental 2026 by Chanathip.S.html" },
  { "name": "Hardware ภาคตะวันออก", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "members/Hardware ภาคตะวันออก/index.html" },
  { "name": "Helpdesk Call", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "members/Helpdesk Call/แสดงข้อมูลสายโทรเข้า.html" },
  { "name": "Helpdesk Case", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "members/Helpdesk Case/แยกประเภทโปรแกรม.html" },
  { "name": "OnsiteValue", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "https://quotation-analytics.vercel.app/" },
  { "name": "PreventiveMaintenance", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "https://luuthanapon-byte.github.io/PM-CusS-Internationel/" },
  { "name": "Repair", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "https://repairman-analytics.vercel.app/" },
  { "name": "Robot ROI", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "members/Robot ROI/PUDU_Commercial_Dashboard.html" },
  { "name": "Robots", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "members/Robots/PUDU-Timeline-Dashboard.html" },
  { "name": "Time&Access Control", "role": "", "status": "good", "owner": "", "note": "", "updated": "", "link": "https://access-time-analytics.vercel.app/" }
];
