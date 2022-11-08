import React from 'react'

export function HeaderCards() {
    const HomeReturns = [
        {
            id: 0,
            idName: "productsId",
            name: "Maxsulotlar Soni",
            show: "156 xil maxsulot",
        },
        {
            id: 1,
            idName: "priceId",
            name: "Umumiy narxi",
            show: "243 450 000 so'm",
        },
        {
            id: 2,
            idName: "enoughId",
            name: "Buyurmalar",
            show: "123 dona",
        },
        {
            id: 3,
            idName: "ordersId",
            name: "Sayt mexmonlari",
            show: "2 345 nafar",
        },
        {
            id: 3,
            idName: "ordersId",
            name: "Sayt mexmonlari",
            show: "2 345 nafar",
        },
        {
            id: 3,
            idName: "ordersId",
            name: "Foydalanuvchilar",
            show: "3 214 nafar",
        },
    ]
    return (
        <div>
            {HomeReturns.map((item, index) => {
                return (
                    <div key={index} data-aos="fade-down" id={item.idName}>
                        <div>
                            <h2>{item.name}</h2>
                            <p>{item.show}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
