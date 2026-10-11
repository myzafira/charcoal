# MrCharcoal

Next.js 16 + TypeScript + Tailwind CSS 4 + Prisma 7 (PostgreSQL)

## เริ่มต้นใช้งานบนเครื่อง (Windows)

```powershell
mkdir D:\project
cd D:\project
git clone https://github.com/myzafira/charcoal.git mrcharcoal
cd mrcharcoal
copy .env.example .env   # แล้วแก้ DATABASE_URL
npm install
npm run dev
```

เปิด http://localhost:3000

## คำสั่ง

- `npm run dev` — รัน dev server
- `npm run build` — build production
- `npm run lint` — ตรวจ lint
- `npx prisma migrate dev` — สร้าง/อัปเดตฐานข้อมูลตาม `prisma/schema.prisma`
