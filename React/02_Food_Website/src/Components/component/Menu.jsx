import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import j1 from '../assets/j1.jpg'
import j2 from '../assets/j2.jpg'
// import j3 from '../assets/j3.jpg'
import j4 from '../assets/j4.jpg'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'
import d4 from '../assets/d4.jpg'
import d5 from '../assets/d5.jpg'

const Menu=[
    {
        id:1,
        category:'sandwich',
        imgSrc:s1,
        itemSrc:'https://images.unsplash.com/photo-1559466273-d95e72debaf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:2,
        category:'sandwich',
        imgSrc:s2,
        itemSrc:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:3,
        category:'sandwich',
        imgSrc:s3,
        itemSrc:'https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbmR3aWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:4,
        category:'juice',
        imgSrc:j1,
        itemSrc:'https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGp1aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:5,
        category:'juice',
        imgSrc:j2,
        itemSrc:'https://images.unsplash.com/photo-1583577612013-4fecf7bf8f13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGp1aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    // {
           // id:6,
    //     category:'juice',
    //     imgSrc:j3,
    // itemSrc:'../assets/s1.jpg'
    // },
    {
        id:7,
        category:'juice',
        imgSrc:j4,
        itemSrc:'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGp1aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:8,
        category:'cake',
        imgSrc:c1,
        itemSrc:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:9,
        category:'cake',
        imgSrc:c2,
        itemSrc:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:10,
        category:'cake',
        imgSrc:c3,
        itemSrc:'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:11,
        category:'cake',
        imgSrc:c4,
        itemSrc:'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:12,
        category:'donut',
        imgSrc:d1,
        itemSrc:'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9udXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:13,
        category:'donut',
        imgSrc:d2,
        itemSrc:'https://images.unsplash.com/photo-1604287094096-59a7dee979e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9udXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
    },
    {   id:14,
        category:'donut',
        imgSrc:d3,
        itemSrc:'https://images.unsplash.com/photo-1573050329989-9c2509328687?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGRvbnV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {   id:15,
        category:'donut',
        imgSrc:d4,
        itemSrc:'https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvbnV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {   id:16,
        category:'donut',
        imgSrc:d5,
        itemSrc:'https://images.unsplash.com/photo-1579761314336-f27ea6297ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvbnV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
]

export default Menu;