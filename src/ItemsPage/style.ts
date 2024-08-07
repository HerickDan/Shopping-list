import shoppingImage from '../imgs/shopping.jpg'

export const styles: {[keys:string]: React.CSSProperties} ={
    backGround:{
        margin:'0',
        padding:'0',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${shoppingImage}) `,
        backgroundSize:'cover',
        height:'100vh',
        display:'flex',
        alignItems:'center',
    },
}