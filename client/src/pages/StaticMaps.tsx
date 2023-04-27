export const StaticMaps = ({info : id}) =>{
    return(
        <div>
        <div>
            <img src={require('../assets/maps/' + String(id) + '.jpeg')} style={{maxHeight: 500, maxWidth:600, display: 'block', margin: 'auto', marginTop:50}} alt='Mapa com informações relativas ao uso e a cobertura da terra na região Oeste do Paraná'/>    
        </div>
        </div>
        )
}