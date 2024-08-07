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
    instrucionHome:{
        marginLeft:'10%'
    },
    title:{
        color:'#F5F0F0',
        fontSize:'70px', 
        fontFamily: 'Roboto',
    },
    subTitle:{
        color:'#F5F0F0',
        fontSize:'23px',  fontFamily: 'Roboto',
    },
    addItemButton:{
        backgroundColor:'#027fe9',
        color:'black',
        border:'none',
        width:'135px',
        height:'50px',
        fontSize:'18px',
        padding:'5px',
        cursor:'pointer',
        borderRadius:'10px'    
    },
    viewListButton:{
        cursor:'pointer',
        backgroundColor:'black',
        color:'#027fe9',
        border:'solid 2px #027fe9',
        width:'135px',
        height:'50px',
        fontSize:'18px',
        padding:'5px',
        borderRadius:'10px',
        marginLeft:'20px'    
    }
}