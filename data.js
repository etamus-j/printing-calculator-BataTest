// data.js - ฐานข้อมูลราคากลางและอัตราการผลิตสำหรับทีมขาย (Sales Estimator Database)
const SALES_CONFIG = {
    // 1. กำหนดอัตราส่วนกำไรประเมินหน้างาน (Sales Buffer Margin 20%)
    marginPercentage: 0.20,

    // 2. กลุ่มวัสดุ/กระดาษ (Material Master - Grouped)
    materials: {
        offset: [
            { id: "bond", name: "ราคากลางกระดาษปอนด์ ขนาด 31x43 นิ้ว", price: 2.22, unit: "แผ่น", widthCm: 78.74, lengthCm: 109.22 },
            { id: "art1", name: "ราคากลางกระดาษอาร์ตมัน / อาร์ตการ์ด 1 หน้า ขนาด 31x43 นิ้ว", price: 6.46, unit: "แผ่น", widthCm: 78.74, lengthCm: 109.22 },
            { id: "art2", name: "ราคากลางกระดาษอาร์ตการ์ด 2 หน้า / การ์ดขาว ขนาด 31x43 นิ้ว", price: 7.00, unit: "แผ่น", widthCm: 78.74, lengthCm: 109.22 },
            { id: "sticker_sm", name: "ราคากลางกระดาษสติ๊กเกอร์ขนาด 330 mm. x 450 mm.", price: 3.50, unit: "แผ่น", widthCm: 33.0, lengthCm: 45.0 },
            { id: "white_craft", name: "กระดาษขาวมันหลังคราฟท์เหลือง ขนาด 106 X 70 mm.", price: 13.36, unit: "แผ่น", widthCm: 10.6, lengthCm: 7.0 },
            { id: "special", name: "ราคากลางกระดาษพิเศษ / Greaseproof / คราฟท์สีน้ำตาล", price: 3.00, unit: "แผ่น", widthCm: 78.74, lengthCm: 109.22 },
            { id: "sticker_pp", name: "กระดาษสติ๊กเกอร์แผ่น PP Gloss PPWG 330x483 mm.", price: 6.99, unit: "แผ่น", widthCm: 33.0, lengthCm: 48.3 }
        ],
        gravure: [
            { id: "tipping", name: "ราคากลางกลุ่มกระดาษม้วน (Tipping)", price: 9215.00, unit: "ม้วน", rollWidthCm: 57, rollMeters: 8500 },
            { id: "art_roll", name: "ราคากลางกลุ่มกระดาษม้วน (อาร์ต)", price: 21000.00, unit: "ม้วน", rollWidthCm: 108, rollMeters: 8300 },
            { id: "bond70_roll", name: "ราคากลางกลุ่มกระดาษม้วน (ปอนด์70)", price: 24151.00, unit: "ม้วน", rollWidthCm: 109.2, rollMeters: 8000 },
            { id: "bond80_roll", name: "ราคากลางกลุ่มกระดาษม้วน (ปอนด์80)", price: 17710.00, unit: "ม้วน", rollWidthCm: 109.2, rollMeters: 8000 },
            { id: "craft_roll", name: "ราคากลางกลุ่มกระดาษม้วน (คราฟท์)", price: 20777.00, unit: "ม้วน", rollWidthCm: 92.7, rollMeters: 8000 },
            { id: "pet_roll", name: "ราคากลางกลุ่มฟิล์ม (PET)", price: 7000.00, unit: "ม้วน", rollWidthCm: 72, rollMeters: 12000 }
        ]
    },

    // 3. ข้อมูลอัตราค่าบริการและต้นทุนเดินเครื่อง (Machine & Labor Rates)
    productionRates: {
        offset: {
            plateCostPerColor: 89,          // บาท/สี
            speedUnitsPerHour: 5000,        // 5000 แผ่น/ชั่วโมง
            electricityCostPerDay: 1000,    // บาท/วัน (8 ชม. = 125 บาท/ชม.)
            laborRatePerHour: 508           // บาท/ชั่วโมง
        },
        gravure: {
            cylinderCostPerColor: 0,        // บาท/สี (ราคาสีละ 28,700 แต่ใส่ 0 ไว้ก่อน)
            speedMetersPerHour: 12000,      // 12000 เมตร/ชั่วโมง
            electricityCostPerDay: 1000,    // บาท/วัน (8 ชม. = 125 บาท/ชม.)
            laborRatePerHour: 508           // บาท/ชั่วโมง
        }
    },

    // 4. ข้อมูลหมึกและตัวทำละลาย (Ink & Solvent Rates)
    inkRates: {
        offset: {
            baseInkPrice: 400.00,          // บาท/กก.
            coveragePerKg: 1250,           // หมึก 1 กก. วิ่งได้ 1,250 แผ่น
            solventCostPerKg: 2.65         // IPA 53 บ./กก. ใช้ 0.5 กก. ต่อหมึก 10 กก.
        },
        gravurePaper: {
            baseInkPrice: 260.00,          // บาท/กก.
            coveragePerKgMeters: 175,      // หมึก 1 กก. วิ่งได้ 175 เมตร
            solventCostPerKg: 24.34        // Ethyl Acetate 35.4 บ./กก. ใช้ 11 กก. ต่อหมึก 16 กก.
        },
        gravurePET: {
            baseInkPrice: 180.00,          // บาท/กก.
            coveragePerKgMeters: 7.5,      // หมึก 1 กก. วิ่งได้ 7.5 เมตร
            solventCostPerKg: 24.34
        }
    },

    // 5. อัตราค่างานหลังพิมพ์ / บริการเสริม (Finishing Options Rates) - ตั้งค่าไว้ที่ 0 รอการอัปเดต
    finishingRates: {
        lamination: {
            ratePerSqM: 0                  // บาท/ตารางเมตร (เช่น เคลือบเงา/ด้าน)
        },
        dieCut: {
            baseBlockCost: 0,              // ค่าบล็อกไดคัทเหมาจ่าย (บาท)
            ratePerThousand: 0             // ค่าแรงไดคัทต่อ 1,000 ชิ้น (บาท)
        },
        foldingGluing: {
            ratePerThousand: 0             // ค่าพับ/ปะกาวต่อ 1,000 ชิ้น (บาท)
        }
    }
};
